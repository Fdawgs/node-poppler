//========================================================================
//
// PSOutputDev.h
//
// Copyright 1996-2003 Glyph & Cog, LLC
//
//========================================================================

//========================================================================
//
// Modified under the Poppler project - http://poppler.freedesktop.org
//
// All changes made under the Poppler project to this file are licensed
// under GPL version 2 or later
//
// Copyright (C) 2005 Martin Kretzschmar <martink@gnome.org>
// Copyright (C) 2005 Kristian Høgsberg <krh@redhat.com>
// Copyright (C) 2006-2008, 2012, 2013, 2015, 2017 Albert Astals Cid <aacid@kde.org>
// Copyright (C) 2007 Brad Hards <bradh@kde.org>
// Copyright (C) 2009-2013 Thomas Freitag <Thomas.Freitag@alfa.de>
// Copyright (C) 2009 Till Kamppeter <till.kamppeter@gmail.com>
// Copyright (C) 2009 Carlos Garcia Campos <carlosgc@gnome.org>
// Copyright (C) 2009, 2011, 2015-2017 William Bader <williambader@hotmail.com>
// Copyright (C) 2010 Hib Eris <hib@hiberis.nl>
// Copyright (C) 2011, 2014, 2017 Adrian Johnson <ajohnson@redneon.com>
// Copyright (C) 2012 Fabio D'Urso <fabiodurso@hotmail.it>
// Copyright (C) 2018 Klarälvdalens Datakonsult AB, a KDAB Group company, <info@kdab.com>. Work sponsored by the LiMux project of the city of Munich
// Copyright (C) 2018 Adam Reichold <adam.reichold@t-online.de>
//
// To see a description of the changes please see the Changelog file that
// came with your tarball or type make ChangeLog if you are building from git
//
//========================================================================

#ifndef PSOUTPUTDEV_H
#define PSOUTPUTDEV_H

#ifdef USE_GCC_PRAGMAS
#pragma interface
#endif

#include "poppler-config.h"
#include <stddef.h>
#include "Object.h"
#include "GfxState.h"
#include "GlobalParams.h"
#include "OutputDev.h"
#include <set>
#include <map>
#include <vector>
#include <unordered_set>
#include <unordered_map>
#include <string>

class PDFDoc;
class XRef;
class Function;
class GfxPath;
class GfxFont;
class GfxColorSpace;
class GfxSeparationColorSpace;
class PDFRectangle;
struct PST1FontName;
struct PSFont8Info;
struct PSFont16Enc;
class PSOutCustomColor;
class PSOutputDev;

//------------------------------------------------------------------------
// PSOutputDev
//------------------------------------------------------------------------

enum PSOutMode {
  psModePS,
  psModeEPS,
  psModeForm
};

enum PSFileType {
  psFile,			// write to file
  psPipe,			// write to pipe
  psStdout,			// write to stdout
  psGeneric			// write to a generic stream
};

enum PSOutCustomCodeLocation {
  psOutCustomDocSetup,
  psOutCustomPageSetup
};

typedef void (*PSOutputFunc)(void *stream, const char *data, int len);

typedef GooString *(*PSOutCustomCodeCbk)(PSOutputDev *psOut,
				       PSOutCustomCodeLocation loc, int n, 
				       void *data);

class PSOutputDev: public OutputDev {
public:

  // Open a PostScript output file, and write the prolog.
  // pages has to be sorted in increasing order
  PSOutputDev(const char *fileName, PDFDoc *docA,
	      char *psTitleA,
	      const std::vector<int> &pages, PSOutMode modeA,
	      int paperWidthA = -1, int paperHeightA = -1,
              GBool noCrop = gFalse,
	      GBool duplexA = gTrue,
	      int imgLLXA = 0, int imgLLYA = 0,
	      int imgURXA = 0, int imgURYA = 0,
	      GBool forceRasterizeA = gFalse,
	      GBool manualCtrlA = gFalse,
	      PSOutCustomCodeCbk customCodeCbkA = NULL,
	      void *customCodeCbkDataA = NULL);

  // Open a PSOutputDev that will write to a generic stream.
  // pages has to be sorted in increasing order
  PSOutputDev(PSOutputFunc outputFuncA, void *outputStreamA,
	      char *psTitleA,
	      PDFDoc *docA,
	      const std::vector<int> &pages, PSOutMode modeA,
	      int paperWidthA = -1, int paperHeightA = -1,
              GBool noCrop = gFalse,
	      GBool duplexA = gTrue,
	      int imgLLXA = 0, int imgLLYA = 0,
	      int imgURXA = 0, int imgURYA = 0,
	      GBool forceRasterizeA = gFalse,
	      GBool manualCtrlA = gFalse,
	      PSOutCustomCodeCbk customCodeCbkA = NULL,
	      void *customCodeCbkDataA = NULL);

  // Destructor -- writes the trailer and closes the file.
  virtual ~PSOutputDev();

  // Check if file was successfully created.
  virtual GBool isOk() { return ok; }

  //---- get info about output device

  // Does this device use upside-down coordinates?
  // (Upside-down means (0,0) is the top left corner of the page.)
  GBool upsideDown() override { return gFalse; }

  // Does this device use drawChar() or drawString()?
  GBool useDrawChar() override { return gFalse; }

  // Does this device use tilingPatternFill()?  If this returns false,
  // tiling pattern fills will be reduced to a series of other drawing
  // operations.
  GBool useTilingPatternFill() override { return gTrue; }

  // Does this device use functionShadedFill(), axialShadedFill(), and
  // radialShadedFill()?  If this returns false, these shaded fills
  // will be reduced to a series of other drawing operations.
  GBool useShadedFills(int type) override
    { return type < 4 && level >= psLevel2; }

  // Does this device use drawForm()?  If this returns false,
  // form-type XObjects will be interpreted (i.e., unrolled).
  GBool useDrawForm() override { return preloadImagesForms; }

  // Does this device use beginType3Char/endType3Char?  Otherwise,
  // text in Type 3 fonts will be drawn with drawChar/drawString.
  GBool interpretType3Chars() override { return gFalse; }
  
  GBool needClipToCropBox() override { return mode == psModeEPS; }

  //----- header/trailer (used only if manualCtrl is true)

  // Write the document-level header.
  void writeHeader(const std::vector<int> &pages,
		   PDFRectangle *mediaBox, PDFRectangle *cropBox,
		   int pageRotate, char *pstitle);

  // Write the Xpdf procset.
  void writeXpdfProcset();

  // Write the trailer for the current page.
  void writePageTrailer();

  // Write the document trailer.
  void writeTrailer();

  //----- initialization and control

  // Check to see if a page slice should be displayed.  If this
  // returns false, the page display is aborted.  Typically, an
  // OutputDev will use some alternate means to display the page
  // before returning false.
  GBool checkPageSlice(Page *page, double hDPI, double vDPI,
			       int rotate, GBool useMediaBox, GBool crop,
			       int sliceX, int sliceY, int sliceW, int sliceH,
			       GBool printing,
			       GBool (*abortCheckCbk)(void *data) = NULL,
			       void *abortCheckCbkData = NULL,
			       GBool (*annotDisplayDecideCbk)(Annot *annot, void *user_data) = NULL,
			       void *annotDisplayDecideCbkData = NULL) override;

  // Start a page.
  void startPage(int pageNum, GfxState *state, XRef *xref) override;

  // End a page.
  void endPage() override;

  //----- save/restore graphics state
  void saveState(GfxState *state) override;
  void restoreState(GfxState *state) override;

  //----- update graphics state
  void updateCTM(GfxState *state, double m11, double m12,
			 double m21, double m22, double m31, double m32) override;
  void updateLineDash(GfxState *state) override;
  void updateFlatness(GfxState *state) override;
  void updateLineJoin(GfxState *state) override;
  void updateLineCap(GfxState *state) override;
  void updateMiterLimit(GfxState *state) override;
  void updateLineWidth(GfxState *state) override;
  void updateFillColorSpace(GfxState *state) override;
  void updateStrokeColorSpace(GfxState *state) override;
  void updateFillColor(GfxState *state) override;
  void updateStrokeColor(GfxState *state) override;
  void updateFillOverprint(GfxState *state) override;
  void updateStrokeOverprint(GfxState *state) override;
  void updateOverprintMode(GfxState *state) override;
  void updateTransfer(GfxState *state) override;

  //----- update text state
  void updateFont(GfxState *state) override;
  void updateTextMat(GfxState *state) override;
  void updateCharSpace(GfxState *state) override;
  void updateRender(GfxState *state) override;
  void updateRise(GfxState *state) override;
  void updateWordSpace(GfxState *state) override;
  void updateHorizScaling(GfxState *state) override;
  void updateTextPos(GfxState *state) override;
  void updateTextShift(GfxState *state, double shift) override;
  void saveTextPos(GfxState *state) override;
  void restoreTextPos(GfxState *state) override;

  //----- path painting
  void stroke(GfxState *state) override;
  void fill(GfxState *state) override;
  void eoFill(GfxState *state) override;
  GBool tilingPatternFill(GfxState *state, Gfx *gfx, Catalog *cat, Object *str,
				  double *pmat, int paintType, int tilingType, Dict *resDict,
				  double *mat, double *bbox,
				  int x0, int y0, int x1, int y1,
				  double xStep, double yStep) override;
  GBool functionShadedFill(GfxState *state,
				   GfxFunctionShading *shading) override;
  GBool axialShadedFill(GfxState *state, GfxAxialShading *shading, double /*tMin*/, double /*tMax*/) override;
  GBool radialShadedFill(GfxState *state, GfxRadialShading *shading, double /*sMin*/, double /*sMax*/) override;

  //----- path clipping
  void clip(GfxState *state) override;
  void eoClip(GfxState *state) override;
  void clipToStrokePath(GfxState *state) override;

  //----- text drawing
  void drawString(GfxState *state, const GooString *s) override;
  void beginTextObject(GfxState *state) override;
  void endTextObject(GfxState *state) override;

  //----- image drawing
  void drawImageMask(GfxState *state, Object *ref, Stream *str,
			     int width, int height, GBool invert,
			     GBool interpolate, GBool inlineImg) override;
  void setSoftMaskFromImageMask(GfxState *state,
					Object *ref, Stream *str,
					int width, int height, GBool invert,
					GBool inlineImg, double *baseMatrix) override;
  void unsetSoftMaskFromImageMask(GfxState *state, double *baseMatrix) override;
  void drawImage(GfxState *state, Object *ref, Stream *str,
			 int width, int height, GfxImageColorMap *colorMap,
			 GBool interpolate, int *maskColors, GBool inlineImg) override;
  void drawMaskedImage(GfxState *state, Object *ref, Stream *str,
			       int width, int height,
			       GfxImageColorMap *colorMap,
			       GBool interpolate,
			       Stream *maskStr, int maskWidth, int maskHeight,
			       GBool maskInvert, GBool maskInterpolate) override;

#ifdef OPI_SUPPORT
  //----- OPI functions
  void opiBegin(GfxState *state, Dict *opiDict) override;
  void opiEnd(GfxState *state, Dict *opiDict) override;
#endif

  //----- Type 3 font operators
  void type3D0(GfxState *state, double wx, double wy) override;
  void type3D1(GfxState *state, double wx, double wy,
		       double llx, double lly, double urx, double ury) override;

  //----- form XObjects
  void drawForm(Ref ref) override;

  //----- PostScript XObjects
  void psXObject(Stream *psStream, Stream *level1Stream) override;

  //----- miscellaneous
  void setOffset(double x, double y)
    { tx0 = x; ty0 = y; }
  void setScale(double x, double y)
    { xScale0 = x; yScale0 = y; }
  void setRotate(int rotateA)
    { rotate0 = rotateA; }
  void setClip(double llx, double lly, double urx, double ury)
    { clipLLX0 = llx; clipLLY0 = lly; clipURX0 = urx; clipURY0 = ury; }
  void setUnderlayCbk(void (*cbk)(PSOutputDev *psOut, void *data),
		      void *data)
    { underlayCbk = cbk; underlayCbkData = data; }
  void setOverlayCbk(void (*cbk)(PSOutputDev *psOut, void *data),
		     void *data)
    { overlayCbk = cbk; overlayCbkData = data; }
  void setDisplayText(GBool display) { displayText = display; }

  void setPSCenter(GBool center) { psCenter = center; }
  void setRasterAntialias(GBool a) { rasterAntialias = a; }
  void setRasterResolution(double r) { rasterResolution = r; }
  void setRasterMono(GBool b) { rasterMono = b; }
  void setUncompressPreloadedImages(GBool b) { uncompressPreloadedImages = b; }

  GBool getEmbedType1() const { return embedType1; }
  GBool getEmbedTrueType() const { return embedTrueType; }
  GBool getEmbedCIDPostScript() const { return embedCIDPostScript; }
  GBool getEmbedCIDTrueType() const { return embedCIDTrueType; }
  GBool getFontPassthrough() const { return fontPassthrough; }
  GBool getOptimizeColorSpace() const { return optimizeColorSpace; }
  GBool getPassLevel1CustomColor() const { return passLevel1CustomColor; }
  GBool getEnableLZW() const { return enableLZW; };
  GBool getEnableFlate() const
#ifdef ENABLE_ZLIB
    { return enableFlate; }
#else
    { return gFalse; }
#endif
  void setEmbedType1(GBool b) { embedType1 = b; }
  void setEmbedTrueType(GBool b) { embedTrueType = b; }
  void setEmbedCIDPostScript(GBool b) { embedCIDPostScript = b; }
  void setEmbedCIDTrueType(GBool b) { embedCIDTrueType = b; }
  void setFontPassthrough(GBool b) { fontPassthrough = b; }
  void setOptimizeColorSpace(GBool b) { optimizeColorSpace = b; }
  void setPassLevel1CustomColor(GBool b) { passLevel1CustomColor = b; }
  void setPreloadImagesForms(GBool b) { preloadImagesForms = b; }
  void setGenerateOPI(GBool b) { generateOPI = b; }
  void setUseASCIIHex(GBool b) { useASCIIHex = b; }
  void setUseBinary(GBool b) { useBinary = b; }
  void setEnableLZW(GBool b) { enableLZW = b; }
  void setEnableFlate(GBool b) { enableFlate = b; }

private:

  void init(PSOutputFunc outputFuncA, void *outputStreamA,
	    PSFileType fileTypeA, char *psTitleA, PDFDoc *doc,
	    const std::vector<int> &pages, PSOutMode modeA,
	    int imgLLXA, int imgLLYA, int imgURXA, int imgURYA,
	    GBool manualCtrlA, int paperWidthA, int paperHeightA,
            GBool noCropA, GBool duplexA);
  void postInit();
  void setupResources(Dict *resDict);
  void setupFonts(Dict *resDict);
  void setupFont(GfxFont *font, Dict *parentResDict);
  void setupEmbeddedType1Font(Ref *id, GooString *psName);
  void updateFontMaxValidGlyph(GfxFont *font, int maxValidGlyph);
  void setupExternalType1Font(GooString *fileName, GooString *psName);
  void setupEmbeddedType1CFont(GfxFont *font, Ref *id, GooString *psName);
  void setupEmbeddedOpenTypeT1CFont(GfxFont *font, Ref *id, GooString *psName);
  void setupEmbeddedTrueTypeFont(GfxFont *font, Ref *id, GooString *psName);
  void setupExternalTrueTypeFont(GfxFont *font, GooString *fileName,
				 GooString *psName);
  void setupEmbeddedCIDType0Font(GfxFont *font, Ref *id, GooString *psName);
  void setupEmbeddedCIDTrueTypeFont(GfxFont *font, Ref *id, GooString *psName,
				    GBool needVerticalMetrics);
  void setupExternalCIDTrueTypeFont(GfxFont *font,
				    GooString *fileName,
				    GooString *psName,
				    GBool needVerticalMetrics);
  void setupEmbeddedOpenTypeCFFFont(GfxFont *font, Ref *id, GooString *psName);
  void setupType3Font(GfxFont *font, GooString *psName, Dict *parentResDict);
  GooString *makePSFontName(GfxFont *font, const Ref *id);
  void setupImages(Dict *resDict);
  void setupImage(Ref id, Stream *str, GBool mask);
  void setupForms(Dict *resDict);
  void setupForm(Ref id, Object *strObj);
  void addProcessColor(double c, double m, double y, double k);
  void addCustomColor(GfxSeparationColorSpace *sepCS);
  void doPath(GfxPath *path);
  void maskToClippingPath(Stream *maskStr, int maskWidth, int maskHeight, GBool maskInvert);
  void doImageL1(Object *ref, GfxImageColorMap *colorMap,
		 GBool invert, GBool inlineImg,
		 Stream *str, int width, int height, int len,
		 int *maskColors, Stream *maskStr,
		 int maskWidth, int maskHeight, GBool maskInvert);
  void doImageL1Sep(Object *ref, GfxImageColorMap *colorMap,
		    GBool invert, GBool inlineImg,
		    Stream *str, int width, int height, int len,
		    int *maskColors, Stream *maskStr,
		    int maskWidth, int maskHeight, GBool maskInvert);
  void doImageL2(Object *ref, GfxImageColorMap *colorMap,
		 GBool invert, GBool inlineImg,
		 Stream *str, int width, int height, int len,
		 int *maskColors, Stream *maskStr,
		 int maskWidth, int maskHeight, GBool maskInvert);
  void doImageL3(Object *ref, GfxImageColorMap *colorMap,
		 GBool invert, GBool inlineImg,
		 Stream *str, int width, int height, int len,
		 int *maskColors, Stream *maskStr,
		 int maskWidth, int maskHeight, GBool maskInvert);
  void dumpColorSpaceL2(GfxColorSpace *colorSpace,
			GBool genXform, GBool updateColors,
			GBool map01);
  GBool tilingPatternFillL1(GfxState *state, Catalog *cat, Object *str,
			    double *pmat, int paintType, int tilingType, Dict *resDict,
			    double *mat, double *bbox,
			    int x0, int y0, int x1, int y1,
			    double xStep, double yStep);
  GBool tilingPatternFillL2(GfxState *state, Catalog *cat, Object *str,
			    double *pmat, int paintType, int tilingType, Dict *resDict,
			    double *mat, double *bbox,
			    int x0, int y0, int x1, int y1,
			    double xStep, double yStep);

#ifdef OPI_SUPPORT
  void opiBegin20(GfxState *state, Dict *dict);
  void opiBegin13(GfxState *state, Dict *dict);
  void opiTransform(GfxState *state, double x0, double y0,
		    double *x1, double *y1);
#endif
  void cvtFunction(Function *func, GBool invertPSFunction = gFalse);
  GooString *filterPSName(const GooString *name);

  // Write the document-level setup.
  void writeDocSetup(PDFDoc *doc, Catalog *catalog, const std::vector<int> &pages, GBool duplexA);

  void writePSChar(char c);
  void writePS(const char *s);
  void writePSBuf(const char *s, int len);
  void writePSFmt(const char *fmt, ...);
  void writePSString(const GooString *s);
  void writePSName(const char *s);
  GooString *filterPSLabel(GooString *label, GBool *needParens=nullptr);
  void writePSTextLine(const GooString *s);

  PSLevel level;		// PostScript level (1, 2, separation)
  PSOutMode mode;		// PostScript mode (PS, EPS, form)
  int paperWidth;		// width of paper, in pts
  int paperHeight;		// height of paper, in pts
  GBool paperMatch;		// true if paper size is set to match each page
  int prevWidth;		// width of previous page
                                // (only psModePSOrigPageSizes output mode)
  int prevHeight;		// height of previous page
                                // (only psModePSOrigPageSizes output mode)
  int imgLLX, imgLLY,		// imageable area, in pts
      imgURX, imgURY;
  GBool noCrop;
  GBool duplex;
  std::vector<int> pages;
  char *psTitle;
  GBool postInitDone;		// true if postInit() was called

  PSOutputFunc outputFunc;
  void *outputStream;
  PSFileType fileType;		// file / pipe / stdout
  GBool manualCtrl;
  int seqPage;			// current sequential page number
  void (*underlayCbk)(PSOutputDev *psOut, void *data);
  void *underlayCbkData;
  void (*overlayCbk)(PSOutputDev *psOut, void *data);
  void *overlayCbkData;
  GooString *(*customCodeCbk)(PSOutputDev *psOut,
			    PSOutCustomCodeLocation loc, int n, 
			    void *data);
  void *customCodeCbkData;

  PDFDoc *doc;
  XRef *xref;			// the xref table for this PDF file

  Ref *fontIDs;			// list of object IDs of all used fonts
  int fontIDLen;		// number of entries in fontIDs array
  int fontIDSize;		// size of fontIDs array
  std::set<int> resourceIDs;	// list of object IDs of objects containing Resources we've already set up
  std::unordered_set<std::string> fontNames; // all used font names
  std::unordered_map<std::string, int> fontMaxValidGlyph; // max valid glyph of each font
  PST1FontName *t1FontNames;	// font names for Type 1/1C fonts
  int t1FontNameLen;		// number of entries in t1FontNames array
  int t1FontNameSize;		// size of t1FontNames array
  PSFont8Info *font8Info;	// info for 8-bit fonts
  int font8InfoLen;		// number of entries in font8Info array
  int font8InfoSize;		// size of font8Info array
  PSFont16Enc *font16Enc;	// encodings for substitute 16-bit fonts
  int font16EncLen;		// number of entries in font16Enc array
  int font16EncSize;		// size of font16Enc array
  Ref *imgIDs;			// list of image IDs for in-memory images
  int imgIDLen;			// number of entries in imgIDs array
  int imgIDSize;		// size of imgIDs array
  Ref *formIDs;			// list of IDs for predefined forms
  int formIDLen;		// number of entries in formIDs array
  int formIDSize;		// size of formIDs array
  int numSaves;			// current number of gsaves
  int numTilingPatterns;	// current number of nested tiling patterns
  int nextFunc;			// next unique number to use for a function

  GooList *paperSizes;		// list of used paper sizes, if paperMatch
				//   is true [PSOutPaperSize]
  std::map<int,int> pagePaperSize; // page num to paperSize entry mapping
  double tx0, ty0;		// global translation
  double xScale0, yScale0;	// global scaling
  int rotate0;			// rotation angle (0, 90, 180, 270)
  double clipLLX0, clipLLY0,
         clipURX0, clipURY0;
  double tx, ty;		// global translation for current page
  double xScale, yScale;	// global scaling for current page
  int rotate;			// rotation angle for current page
  double epsX1, epsY1,		// EPS bounding box (unrotated)
         epsX2, epsY2;

  GooString *embFontList;		// resource comments for embedded fonts

  int processColors;		// used process colors
  PSOutCustomColor		// used custom colors
    *customColors;

  GBool haveTextClip;		// set if text has been drawn with a
				//   clipping render mode

  GBool inType3Char;		// inside a Type 3 CharProc
  GBool inUncoloredPattern;     // inside a uncolored pattern (PaintType = 2)
  GooString *t3String;		// Type 3 content string
  double t3WX, t3WY,		// Type 3 character parameters
         t3LLX, t3LLY, t3URX, t3URY;
  GBool t3FillColorOnly;	// operators should only use the fill color
  GBool t3Cacheable;		// cleared if char is not cacheable
  GBool t3NeedsRestore;		// set if a 'q' operator was issued
  GBool forceRasterize;		// forces the page to be rasterized into a image before printing
  GBool displayText;		// displayText
  GBool psCenter;		// center pages on the paper
  GBool rasterAntialias;	// antialias on rasterize
  GBool uncompressPreloadedImages;
  double rasterResolution;	// PostScript rasterization resolution (dpi)
  GBool rasterMono;		// true to do PostScript rasterization
				//   in monochrome (gray); false to do it
				//   in color (RGB/CMYK)
  GBool embedType1;		// embed Type 1 fonts?
  GBool embedTrueType;		// embed TrueType fonts?
  GBool embedCIDPostScript;	// embed CID PostScript fonts?
  GBool embedCIDTrueType;	// embed CID TrueType fonts?
  GBool fontPassthrough;	// pass all fonts through as-is?
  GBool optimizeColorSpace;	// false to keep gray RGB images in their original color space
				// true to optimize gray images to DeviceGray color space
  GBool passLevel1CustomColor;	// false to convert all custom colors to CMYK
				// true to pass custom colors
				// has effect only when doing a level1sep
  GBool preloadImagesForms;	// preload PostScript images and forms into
				//   memory
  GBool generateOPI;		// generate PostScript OPI comments?
  GBool useASCIIHex;		// use ASCIIHex instead of ASCII85?
  GBool useBinary;		// use binary instead of hex
  GBool enableLZW;		// enable LZW compression
  GBool enableFlate;		// enable Flate compression

#ifdef OPI_SUPPORT
  int opi13Nest;		// nesting level of OPI 1.3 objects
  int opi20Nest;		// nesting level of OPI 2.0 objects
#endif

  GBool ok;			// set up ok?

  friend class WinPDFPrinter;
};

#endif
