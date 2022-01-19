//========================================================================
//
// PDFDoc.h
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
// Copyright (C) 2005, 2006, 2008 Brad Hards <bradh@frogmouth.net>
// Copyright (C) 2005, 2009, 2014, 2015, 2017-2021 Albert Astals Cid <aacid@kde.org>
// Copyright (C) 2008 Julien Rebetez <julienr@svn.gnome.org>
// Copyright (C) 2008 Pino Toscano <pino@kde.org>
// Copyright (C) 2008 Carlos Garcia Campos <carlosgc@gnome.org>
// Copyright (C) 2009 Eric Toombs <ewtoombs@uwaterloo.ca>
// Copyright (C) 2009 Kovid Goyal <kovid@kovidgoyal.net>
// Copyright (C) 2010, 2014 Hib Eris <hib@hiberis.nl>
// Copyright (C) 2010 Srinivas Adicherla <srinivas.adicherla@geodesic.com>
// Copyright (C) 2011, 2013, 2014, 2016 Thomas Freitag <Thomas.Freitag@alfa.de>
// Copyright (C) 2012 Fabio D'Urso <fabiodurso@hotmail.it>
// Copyright (C) 2013, 2017 Adrian Johnson <ajohnson@redneon.com>
// Copyright (C) 2013, 2018 Adam Reichold <adamreichold@myopera.com>
// Copyright (C) 2013 Adrian Perez de Castro <aperez@igalia.com>
// Copyright (C) 2015 André Guerreiro <aguerreiro1985@gmail.com>
// Copyright (C) 2015 André Esser <bepandre@hotmail.com>
// Copyright (C) 2016 Jakub Alba <jakubalba@gmail.com>
// Copyright (C) 2018 Klarälvdalens Datakonsult AB, a KDAB Group company, <info@kdab.com>. Work sponsored by the LiMux project of the city of Munich
// Copyright (C) 2018 Evangelos Rigas <erigas@rnd2.org>
// Copyright (C) 2020, 2021 Oliver Sander <oliver.sander@tu-dresden.de>
// Copyright (C) 2020 Nelson Benítez León <nbenitezl@gmail.com>
// Copyright (C) 2021 Mahmoud Khalil <mahmoudkhalil11@gmail.com>
// Copyright (C) 2021 Georgiy Sgibnev <georgiy@sgibnev.com>. Work sponsored by lab50.net.
// Copyright (C) 2021 Marek Kasik <mkasik@redhat.com>
//
// To see a description of the changes please see the Changelog file that
// came with your tarball or type make ChangeLog if you are building from git
//
//========================================================================

#ifndef PDFDOC_H
#define PDFDOC_H

#include <algorithm>
#include <cstdio>
#include <mutex>

#include "poppler-config.h"

#include "poppler_private_export.h"

#include "XRef.h"
#include "Catalog.h"
#include "Page.h"
#include "Annot.h"
#include "Form.h"
#include "OptionalContent.h"
#include "Stream.h"

class GooString;
class GooFile;
class BaseStream;
class OutputDev;
class Links;
class LinkAction;
class LinkDest;
class Outline;
class Linearization;
class SecurityHandler;
class Hints;
class StructTreeRoot;

enum PDFWriteMode
{
    writeStandard,
    writeForceRewrite,
    writeForceIncremental
};

enum PDFSubtype
{
    subtypeNull,
    subtypePDFA,
    subtypePDFE,
    subtypePDFUA,
    subtypePDFVT,
    subtypePDFX,
    subtypeNone
};

enum PDFSubtypePart
{
    subtypePartNull,
    subtypePart1,
    subtypePart2,
    subtypePart3,
    subtypePart4,
    subtypePart5,
    subtypePart6,
    subtypePart7,
    subtypePart8,
    subtypePartNone
};

enum PDFSubtypeConformance
{
    subtypeConfNull,
    subtypeConfA,
    subtypeConfB,
    subtypeConfG,
    subtypeConfN,
    subtypeConfP,
    subtypeConfPG,
    subtypeConfU,
    subtypeConfNone
};

//------------------------------------------------------------------------
// PDFDoc
//------------------------------------------------------------------------

class POPPLER_PRIVATE_EXPORT PDFDoc
{
public:
    explicit PDFDoc(const GooString *fileNameA, const GooString *ownerPassword = nullptr, const GooString *userPassword = nullptr, void *guiDataA = nullptr, const std::function<void()> &xrefReconstructedCallback = {});

#ifdef _WIN32
    PDFDoc(wchar_t *fileNameA, int fileNameLen, GooString *ownerPassword = nullptr, GooString *userPassword = nullptr, void *guiDataA = nullptr, const std::function<void()> &xrefReconstructedCallback = {});
#endif

    explicit PDFDoc(BaseStream *strA, const GooString *ownerPassword = nullptr, const GooString *userPassword = nullptr, void *guiDataA = nullptr, const std::function<void()> &xrefReconstructedCallback = {});
    ~PDFDoc();

    PDFDoc(const PDFDoc &) = delete;
    PDFDoc &operator=(const PDFDoc &) = delete;

    static std::unique_ptr<PDFDoc> ErrorPDFDoc(int errorCode, const GooString *fileNameA = nullptr);

    // Was PDF document successfully opened?
    bool isOk() const { return ok; }

    // Get the error code (if isOk() returns false).
    int getErrorCode() const { return errCode; }

    // Get the error code returned by fopen() (if getErrorCode() ==
    // errOpenFile).
    int getFopenErrno() const { return fopenErrno; }

    // Get file name.
    const GooString *getFileName() const { return fileName; }
#ifdef _WIN32
    wchar_t *getFileNameU() { return fileNameU; }
#endif

    // Get the linearization table.
    Linearization *getLinearization();
    bool checkLinearization();

    // Get the xref table.
    XRef *getXRef() const { return xref; }

    // Get catalog.
    Catalog *getCatalog() const { return catalog; }

    // Get optional content configuration
    OCGs *getOptContentConfig() const { return catalog->getOptContentConfig(); }

    // Get base stream.
    BaseStream *getBaseStream() const { return str; }

    // Get page parameters.
    double getPageMediaWidth(int page) { return getPage(page) ? getPage(page)->getMediaWidth() : 0.0; }
    double getPageMediaHeight(int page) { return getPage(page) ? getPage(page)->getMediaHeight() : 0.0; }
    double getPageCropWidth(int page) { return getPage(page) ? getPage(page)->getCropWidth() : 0.0; }
    double getPageCropHeight(int page) { return getPage(page) ? getPage(page)->getCropHeight() : 0.0; }
    int getPageRotate(int page) { return getPage(page) ? getPage(page)->getRotate() : 0; }

    // Get number of pages.
    int getNumPages();

    // Return the contents of the metadata stream, or nullptr if there is
    // no metadata.
    std::unique_ptr<GooString> readMetadata() const { return catalog->readMetadata(); }

    // Return the structure tree root object.
    const StructTreeRoot *getStructTreeRoot() const { return catalog->getStructTreeRoot(); }

    // Get page.
    Page *getPage(int page);

    // Display a page.
    void displayPage(OutputDev *out, int page, double hDPI, double vDPI, int rotate, bool useMediaBox, bool crop, bool printing, bool (*abortCheckCbk)(void *data) = nullptr, void *abortCheckCbkData = nullptr,
                     bool (*annotDisplayDecideCbk)(Annot *annot, void *user_data) = nullptr, void *annotDisplayDecideCbkData = nullptr, bool copyXRef = false);

    // Display a range of pages.
    void displayPages(OutputDev *out, int firstPage, int lastPage, double hDPI, double vDPI, int rotate, bool useMediaBox, bool crop, bool printing, bool (*abortCheckCbk)(void *data) = nullptr, void *abortCheckCbkData = nullptr,
                      bool (*annotDisplayDecideCbk)(Annot *annot, void *user_data) = nullptr, void *annotDisplayDecideCbkData = nullptr);

    // Display part of a page.
    void displayPageSlice(OutputDev *out, int page, double hDPI, double vDPI, int rotate, bool useMediaBox, bool crop, bool printing, int sliceX, int sliceY, int sliceW, int sliceH, bool (*abortCheckCbk)(void *data) = nullptr,
                          void *abortCheckCbkData = nullptr, bool (*annotDisplayDecideCbk)(Annot *annot, void *user_data) = nullptr, void *annotDisplayDecideCbkData = nullptr, bool copyXRef = false);

    // Find a page, given its object ID.  Returns page number, or 0 if
    // not found.
    int findPage(const Ref ref) { return catalog->findPage(ref); }

    // Returns the links for the current page, transferring ownership to
    // the caller.
    std::unique_ptr<Links> getLinks(int page);

    // Find a named destination.  Returns the link destination, or
    // nullptr if <name> is not a destination.
    std::unique_ptr<LinkDest> findDest(const GooString *name) { return catalog->findDest(name); }

    // Process the links for a page.
    void processLinks(OutputDev *out, int page);

    // Return the outline object.
    Outline *getOutline();

    // Is the file encrypted?
    bool isEncrypted() { return xref->isEncrypted(); }

    std::vector<FormFieldSignature *> getSignatureFields();
    int getNumSignatureFields();

    // Check various permissions.
    bool okToPrint(bool ignoreOwnerPW = false) { return xref->okToPrint(ignoreOwnerPW); }
    bool okToPrintHighRes(bool ignoreOwnerPW = false) { return xref->okToPrintHighRes(ignoreOwnerPW); }
    bool okToChange(bool ignoreOwnerPW = false) { return xref->okToChange(ignoreOwnerPW); }
    bool okToCopy(bool ignoreOwnerPW = false) { return xref->okToCopy(ignoreOwnerPW); }
    bool okToAddNotes(bool ignoreOwnerPW = false) { return xref->okToAddNotes(ignoreOwnerPW); }
    bool okToFillForm(bool ignoreOwnerPW = false) { return xref->okToFillForm(ignoreOwnerPW); }
    bool okToAccessibility(bool ignoreOwnerPW = false) { return xref->okToAccessibility(ignoreOwnerPW); }
    bool okToAssemble(bool ignoreOwnerPW = false) { return xref->okToAssemble(ignoreOwnerPW); }

    // Is this document linearized?
    bool isLinearized(bool tryingToReconstruct = false);

    // Return the document's Info dictionary (if any).
    Object getDocInfo() { return xref->getDocInfo(); }
    Object getDocInfoNF() { return xref->getDocInfoNF(); }

    // Remove the document's Info dictionary and update the trailer dictionary.
    void removeDocInfo() { xref->removeDocInfo(); }

    // Set doc info string entry. nullptr or empty value will cause a removal.
    // Takes ownership of value.
    void setDocInfoStringEntry(const char *key, GooString *value);

    // Set document's properties in document's Info dictionary.
    // nullptr or empty value will cause a removal.
    // Takes ownership of value.
    void setDocInfoTitle(GooString *title) { setDocInfoStringEntry("Title", title); }
    void setDocInfoAuthor(GooString *author) { setDocInfoStringEntry("Author", author); }
    void setDocInfoSubject(GooString *subject) { setDocInfoStringEntry("Subject", subject); }
    void setDocInfoKeywords(GooString *keywords) { setDocInfoStringEntry("Keywords", keywords); }
    void setDocInfoCreator(GooString *creator) { setDocInfoStringEntry("Creator", creator); }
    void setDocInfoProducer(GooString *producer) { setDocInfoStringEntry("Producer", producer); }
    void setDocInfoCreatDate(GooString *creatDate) { setDocInfoStringEntry("CreationDate", creatDate); }
    void setDocInfoModDate(GooString *modDate) { setDocInfoStringEntry("ModDate", modDate); }

    // Get document's properties from document's Info dictionary.
    // Returns nullptr on fail.
    std::unique_ptr<GooString> getDocInfoStringEntry(const char *key);

    std::unique_ptr<GooString> getDocInfoTitle() { return getDocInfoStringEntry("Title"); }
    std::unique_ptr<GooString> getDocInfoAuthor() { return getDocInfoStringEntry("Author"); }
    std::unique_ptr<GooString> getDocInfoSubject() { return getDocInfoStringEntry("Subject"); }
    std::unique_ptr<GooString> getDocInfoKeywords() { return getDocInfoStringEntry("Keywords"); }
    std::unique_ptr<GooString> getDocInfoCreator() { return getDocInfoStringEntry("Creator"); }
    std::unique_ptr<GooString> getDocInfoProducer() { return getDocInfoStringEntry("Producer"); }
    std::unique_ptr<GooString> getDocInfoCreatDate() { return getDocInfoStringEntry("CreationDate"); }
    std::unique_ptr<GooString> getDocInfoModDate() { return getDocInfoStringEntry("ModDate"); }

    // Return the PDF subtype, part, and conformance
    PDFSubtype getPDFSubtype() const { return pdfSubtype; }
    PDFSubtypePart getPDFSubtypePart() const { return pdfPart; }
    PDFSubtypeConformance getPDFSubtypeConformance() const { return pdfConformance; }

    // Return the PDF version specified by the file (either header or catalog).
    int getPDFMajorVersion() const { return std::max(headerPdfMajorVersion, catalog->getPDFMajorVersion()); }
    int getPDFMinorVersion() const
    {
        const int catalogMajorVersion = catalog->getPDFMajorVersion();
        if (catalogMajorVersion > headerPdfMajorVersion) {
            return catalog->getPDFMinorVersion();
        } else if (headerPdfMajorVersion > catalogMajorVersion) {
            return headerPdfMinorVersion;
        } else {
            return std::max(headerPdfMinorVersion, catalog->getPDFMinorVersion());
        }
    }

    // Return the PDF ID in the trailer dictionary (if any).
    bool getID(GooString *permanent_id, GooString *update_id) const;

    // Save one page with another name.
    int savePageAs(const GooString *name, int pageNo);
    // Save this file with another name.
    int saveAs(const GooString *name, PDFWriteMode mode = writeStandard);
    // Save this file in the given output stream.
    int saveAs(OutStream *outStr, PDFWriteMode mode = writeStandard);
    // Save this file with another name without saving changes
    int saveWithoutChangesAs(const GooString *name);
    // Save this file in the given output stream without saving changes
    int saveWithoutChangesAs(OutStream *outStr);

    // Return a pointer to the GUI (XPDFCore or WinPDFCore object).
    void *getGUIData() { return guiData; }

    // rewrite pageDict with MediaBox, CropBox and new page CTM
    void replacePageDict(int pageNo, int rotate, const PDFRectangle *mediaBox, const PDFRectangle *cropBox);
    void markPageObjects(Dict *pageDict, XRef *xRef, XRef *countRef, unsigned int numOffset, int oldRefNum, int newRefNum, std::set<Dict *> *alreadyMarkedDicts = nullptr);
    bool markAnnotations(Object *annots, XRef *xRef, XRef *countRef, unsigned int numOffset, int oldPageNum, int newPageNum, std::set<Dict *> *alreadyMarkedDicts = nullptr);
    void markAcroForm(Object *afObj, XRef *xRef, XRef *countRef, unsigned int numOffset, int oldRefNum, int newRefNum);
    // write all objects used by pageDict to outStr
    unsigned int writePageObjects(OutStream *outStr, XRef *xRef, unsigned int numOffset, bool combine = false);
    static void writeObject(Object *obj, OutStream *outStr, XRef *xref, unsigned int numOffset, unsigned char *fileKey, CryptAlgorithm encAlgorithm, int keyLength, int objNum, int objGen, std::set<Dict *> *alreadyWrittenDicts = nullptr);
    static void writeObject(Object *obj, OutStream *outStr, XRef *xref, unsigned int numOffset, unsigned char *fileKey, CryptAlgorithm encAlgorithm, int keyLength, Ref ref, std::set<Dict *> *alreadyWrittenDicts = nullptr);
    static void writeHeader(OutStream *outStr, int major, int minor);

    static Object createTrailerDict(int uxrefSize, bool incrUpdate, Goffset startxRef, Ref *root, XRef *xRef, const char *fileName, Goffset fileSize);
    static void writeXRefTableTrailer(Object &&trailerDict, XRef *uxref, bool writeAllEntries, Goffset uxrefOffset, OutStream *outStr, XRef *xRef);
    static void writeXRefStreamTrailer(Object &&trailerDict, XRef *uxref, Ref *uxrefStreamRef, Goffset uxrefOffset, OutStream *outStr, XRef *xRef);
    // scans the PDF and returns whether it contains any javascript
    bool hasJavascript();

    // Arguments signatureText and signatureTextLeft are UTF-16 big endian strings with BOM.
    // Arguments reason and location are UTF-16 big endian strings with BOM. An empty string and nullptr are acceptable too.
    // Argument imagePath is a background image (a path to a file).
    // sign() takes ownership of partialFieldName.
    bool sign(const char *saveFilename, const char *certNickname, const char *password, GooString *partialFieldName, int page, const PDFRectangle &rect, const GooString &signatureText, const GooString &signatureTextLeft, double fontSize,
              std::unique_ptr<AnnotColor> &&fontColor, double borderWidth, std::unique_ptr<AnnotColor> &&borderColor, std::unique_ptr<AnnotColor> &&backgroundColor, const GooString *reason = nullptr, const GooString *location = nullptr,
              const std::string &imagePath = "", const GooString *ownerPassword = nullptr, const GooString *userPassword = nullptr);

private:
    // insert referenced objects in XRef
    void markDictionnary(Dict *dict, XRef *xRef, XRef *countRef, unsigned int numOffset, int oldRefNum, int newRefNum, std::set<Dict *> *alreadyMarkedDicts);
    void markObject(Object *obj, XRef *xRef, XRef *countRef, unsigned int numOffset, int oldRefNum, int newRefNum, std::set<Dict *> *alreadyMarkedDicts = nullptr);
    static void writeDictionnary(Dict *dict, OutStream *outStr, XRef *xRef, unsigned int numOffset, unsigned char *fileKey, CryptAlgorithm encAlgorithm, int keyLength, Ref ref, std::set<Dict *> *alreadyWrittenDicts);

    // Write object header to current file stream and return its offset
    static Goffset writeObjectHeader(Ref *ref, OutStream *outStr);
    static void writeObjectFooter(OutStream *outStr);

    inline void writeObject(Object *obj, OutStream *outStr, unsigned char *fileKey, CryptAlgorithm encAlgorithm, int keyLength, int objNum, int objGen)
    {
        writeObject(obj, outStr, getXRef(), 0, fileKey, encAlgorithm, keyLength, { objNum, objGen });
    }
    inline void writeObject(Object *obj, OutStream *outStr, unsigned char *fileKey, CryptAlgorithm encAlgorithm, int keyLength, Ref ref) { writeObject(obj, outStr, getXRef(), 0, fileKey, encAlgorithm, keyLength, ref); }
    static void writeStream(Stream *str, OutStream *outStr);
    static void writeRawStream(Stream *str, OutStream *outStr);
    void writeXRefTableTrailer(Goffset uxrefOffset, XRef *uxref, bool writeAllEntries, int uxrefSize, OutStream *outStr, bool incrUpdate);
    static void writeString(const GooString *s, OutStream *outStr, const unsigned char *fileKey, CryptAlgorithm encAlgorithm, int keyLength, Ref ref);
    void saveIncrementalUpdate(OutStream *outStr);
    void saveCompleteRewrite(OutStream *outStr);

    Page *parsePage(int page);

    // Get hints.
    Hints *getHints();

    PDFDoc();
    void init();
    bool setup(const GooString *ownerPassword, const GooString *userPassword, const std::function<void()> &xrefReconstructedCallback);
    bool checkFooter();
    void checkHeader();
    bool checkEncryption(const GooString *ownerPassword, const GooString *userPassword);
    void extractPDFSubtype();

    // Get the offset of the start xref table.
    Goffset getStartXRef(bool tryingToReconstruct = false);
    // Get the offset of the entries in the main XRef table of a
    // linearized document (0 for non linearized documents).
    Goffset getMainXRefEntriesOffset(bool tryingToReconstruct = false);
    long long strToLongLong(const char *s);

    const GooString *fileName;
#ifdef _WIN32
    wchar_t *fileNameU;
#endif
    GooFile *file;
    BaseStream *str;
    void *guiData;
    int headerPdfMajorVersion;
    int headerPdfMinorVersion;
    PDFSubtype pdfSubtype;
    PDFSubtypePart pdfPart;
    PDFSubtypeConformance pdfConformance;
    Linearization *linearization;
    // linearizationState = 0: unchecked
    // linearizationState = 1: checked and valid
    // linearizationState = 2: checked and invalid
    int linearizationState;
    XRef *xref;
    SecurityHandler *secHdlr;
    Catalog *catalog;
    Hints *hints;
    Outline *outline;
    Page **pageCache;

    bool ok;
    int errCode;
    // If there is an error opening the PDF file with fopen() in the constructor,
    // then the POSIX errno will be here.
    int fopenErrno;

    Goffset startXRefPos; // offset of last xref table
    mutable std::recursive_mutex mutex;
};

#endif
