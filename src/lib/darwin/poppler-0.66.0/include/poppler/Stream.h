//========================================================================
//
// Stream.h
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
// Copyright (C) 2005 Jeff Muizelaar <jeff@infidigm.net>
// Copyright (C) 2008 Julien Rebetez <julien@fhtagn.net>
// Copyright (C) 2008, 2010, 2011, 2016-2018 Albert Astals Cid <aacid@kde.org>
// Copyright (C) 2009 Carlos Garcia Campos <carlosgc@gnome.org>
// Copyright (C) 2009 Stefan Thomas <thomas@eload24.com>
// Copyright (C) 2010 Hib Eris <hib@hiberis.nl>
// Copyright (C) 2011, 2012, 2016 William Bader <williambader@hotmail.com>
// Copyright (C) 2012, 2013 Thomas Freitag <Thomas.Freitag@alfa.de>
// Copyright (C) 2012, 2013 Fabio D'Urso <fabiodurso@hotmail.it>
// Copyright (C) 2013, 2017 Adrian Johnson <ajohnson@redneon.com>
// Copyright (C) 2013 Peter Breitenlohner <peb@mppmu.mpg.de>
// Copyright (C) 2013, 2018 Adam Reichold <adamreichold@myopera.com>
// Copyright (C) 2013 Pino Toscano <pino@kde.org>
//
// To see a description of the changes please see the Changelog file that
// came with your tarball or type make ChangeLog if you are building from git
//
//========================================================================

#ifndef STREAM_H
#define STREAM_H

#ifdef USE_GCC_PRAGMAS
#pragma interface
#endif

#include "poppler-config.h"
#include <stdio.h>
#include "goo/gtypes.h"
#include "Object.h"
#include "goo/GooMutex.h"

class GooFile;
class BaseStream;
class CachedFile;

//------------------------------------------------------------------------

enum StreamKind {
  strFile,
  strCachedFile,
  strASCIIHex,
  strASCII85,
  strLZW,
  strRunLength,
  strCCITTFax,
  strDCT,
  strFlate,
  strJBIG2,
  strJPX,
  strWeird,			// internal-use stream types
  strCrypt			// internal-use to detect decode streams
};

enum StreamColorSpaceMode {
  streamCSNone,
  streamCSDeviceGray,
  streamCSDeviceRGB,
  streamCSDeviceCMYK
};

//------------------------------------------------------------------------

// This is in Stream.h instead of Decrypt.h to avoid really annoying
// include file dependency loops.
enum CryptAlgorithm {
  cryptRC4,
  cryptAES,
  cryptAES256,
  cryptNone
};

//------------------------------------------------------------------------

typedef struct _ByteRange {
  Guint offset;
  Guint length;
} ByteRange;

//------------------------------------------------------------------------
// Stream (base class)
//------------------------------------------------------------------------

class Stream {
public:

  // Constructor.
  Stream();

  // Destructor.
  virtual ~Stream();

  Stream(const Stream &) = delete;
  Stream& operator=(const Stream &other) = delete;

  // Get kind of stream.
  virtual StreamKind getKind() = 0;

  // Reset stream to beginning.
  virtual void reset() = 0;

  // Close down the stream.
  virtual void close();

  inline int doGetChars(int nChars, Guchar *buffer)
  {
    if (hasGetChars()) {
      return getChars(nChars, buffer);
    } else {
      for (int i = 0; i < nChars; ++i) {
        const int c = getChar();
        if (likely(c != EOF)) buffer[i] = c;
        else return i;
      }
      return nChars;
    }
  }

  inline void fillGooString(GooString *s)
  {
    Guchar readBuf[4096];
    int readChars;
    reset();
    while ((readChars = doGetChars(4096, readBuf)) != 0) {
      s->append((const char *)readBuf, readChars);
    }
  }
  
  inline Guchar *toUnsignedChars(int *length, int initialSize = 4096, int sizeIncrement = 4096)
  {
    int readChars;
    Guchar *buf = (Guchar *)gmalloc(initialSize);
    int size = initialSize;
    *length = 0;
    int charsToRead = initialSize;
    bool continueReading = true;
    reset();
    while (continueReading && (readChars = doGetChars(charsToRead, &buf[*length])) != 0) {
      *length += readChars;
      if (readChars == charsToRead) {
        if (lookChar() != EOF) {
          size += sizeIncrement;
          charsToRead = sizeIncrement;
          buf = (Guchar *)grealloc(buf, size);
        } else {
          continueReading = false;
        }
      } else {
        continueReading = false;
      }
    }
    return buf;
  }

  // Get next char from stream.
  virtual int getChar() = 0;

  // Peek at next char in stream.
  virtual int lookChar() = 0;

  // Get next char from stream without using the predictor.
  // This is only used by StreamPredictor.
  virtual int getRawChar();
  virtual void getRawChars(int nChars, int *buffer);

  // Get next char directly from stream source, without filtering it
  virtual int getUnfilteredChar () = 0;

  // Resets the stream without reading anything (even not the headers)
  // WARNING: Reading the stream with something else than getUnfilteredChar 
  // may lead to unexcepted behaviour until you call reset ()
  virtual void unfilteredReset () = 0;

  // Get next line from stream.
  virtual char *getLine(char *buf, int size);

  // Get current position in file.
  virtual Goffset getPos() = 0;

  // Go to a position in the stream.  If <dir> is negative, the
  // position is from the end of the file; otherwise the position is
  // from the start of the file.
  virtual void setPos(Goffset pos, int dir = 0) = 0;

  // Get PostScript command for the filter(s).
  virtual GooString *getPSFilter(int psLevel, const char *indent);

  // Does this stream type potentially contain non-printable chars?
  virtual GBool isBinary(GBool last = gTrue) = 0;

  // Get the BaseStream of this stream.
  virtual BaseStream *getBaseStream() = 0;

  // Get the stream after the last decoder (this may be a BaseStream
  // or a DecryptStream).
  virtual Stream *getUndecodedStream() = 0;

  // Get the dictionary associated with this stream.
  virtual Dict *getDict() = 0;
  virtual Object *getDictObject() = 0;

  // Is this an encoding filter?
  virtual GBool isEncoder() { return gFalse; }

  // Get image parameters which are defined by the stream contents.
  virtual void getImageParams(int * /*bitsPerComponent*/,
			      StreamColorSpaceMode * /*csMode*/) {}

  // Return the next stream in the "stack".
  virtual Stream *getNextStream() { return NULL; }

  // Add filters to this stream according to the parameters in <dict>.
  // Returns the new stream.
  Stream *addFilters(Dict *dict, int recursion = 0);

private:
  friend class Object; // for incRef/decRef

  // Reference counting.
  int incRef();
  int decRef();

  virtual GBool hasGetChars() { return false; }
  virtual int getChars(int nChars, Guchar *buffer);

  Stream *makeFilter(const char *name, Stream *str, Object *params, int recursion = 0, Dict *dict = nullptr);

  int ref;			// reference count
#ifdef MULTITHREADED
  GooMutex mutex;
#endif
};


 //------------------------------------------------------------------------
// OutStream
//
// This is the base class for all streams that output to a file
//------------------------------------------------------------------------
class OutStream {
public:
  // Constructor.
  OutStream ();

  // Desctructor.
  virtual ~OutStream ();

  OutStream(const OutStream &) = delete;
  OutStream& operator=(const OutStream &other) = delete;

  // Close the stream
  virtual void close() = 0;

  // Return position in stream
  virtual Goffset getPos() = 0;

  // Put a char in the stream
  virtual void put (char c) = 0;

  virtual void printf (const char *format, ...) GCC_PRINTF_FORMAT(2,3) = 0;
};

//------------------------------------------------------------------------
// FileOutStream
//------------------------------------------------------------------------
class FileOutStream : public OutStream {
public:
  FileOutStream (FILE* fa, Goffset startA);

  ~FileOutStream ();

  void close() override;

  Goffset getPos() override;

  void put (char c) override;

  void printf (const char *format, ...) override GCC_PRINTF_FORMAT(2,3);
private:
  FILE *f;
  Goffset start;

};


//------------------------------------------------------------------------
// BaseStream
//
// This is the base class for all streams that read directly from a file.
//------------------------------------------------------------------------

class BaseStream: public Stream {
public:

    // TODO Mirar si puedo hacer que dictA sea un puntero
  BaseStream(Object &&dictA, Goffset lengthA);
  ~BaseStream();
  virtual BaseStream *copy() = 0;
  virtual Stream *makeSubStream(Goffset start, GBool limited,
				Goffset length, Object &&dict) = 0;
  void setPos(Goffset pos, int dir = 0) override = 0;
  GBool isBinary(GBool last = gTrue) override { return last; }
  BaseStream *getBaseStream() override { return this; }
  Stream *getUndecodedStream() override { return this; }
  Dict *getDict() override { return dict.getDict(); }
  Object *getDictObject() override { return &dict; }
  virtual GooString *getFileName() { return NULL; }
  virtual Goffset getLength() { return length; }

  // Get/set position of first byte of stream within the file.
  virtual Goffset getStart() = 0;
  virtual void moveStart(Goffset delta) = 0;

protected:

  Goffset length;
  Object dict;
};

//------------------------------------------------------------------------
// FilterStream
//
// This is the base class for all streams that filter another stream.
//------------------------------------------------------------------------

class FilterStream: public Stream {
public:

  FilterStream(Stream *strA);
  ~FilterStream();
  void close() override;
  Goffset getPos() override { return str->getPos(); }
  void setPos(Goffset pos, int dir = 0) override;
  BaseStream *getBaseStream() override { return str->getBaseStream(); }
  Stream *getUndecodedStream() override { return str->getUndecodedStream(); }
  Dict *getDict() override { return str->getDict(); }
  Object *getDictObject() override { return str->getDictObject(); }
  Stream *getNextStream() override { return str; }

  int getUnfilteredChar () override { return str->getUnfilteredChar(); }
  void unfilteredReset () override { str->unfilteredReset(); }

protected:

  Stream *str;
};

//------------------------------------------------------------------------
// ImageStream
//------------------------------------------------------------------------

class ImageStream {
public:

  // Create an image stream object for an image with the specified
  // parameters.  Note that these are the actual image parameters,
  // which may be different from the predictor parameters.
  ImageStream(Stream *strA, int widthA, int nCompsA, int nBitsA);

  ~ImageStream();

  ImageStream(const ImageStream &) = delete;
  ImageStream& operator=(const ImageStream &other) = delete;

  // Reset the stream.
  void reset();

  // Close the stream previously reset
  void close();

  // Gets the next pixel from the stream.  <pix> should be able to hold
  // at least nComps elements.  Returns false at end of file.
  GBool getPixel(Guchar *pix);

  // Returns a pointer to the next line of pixels.  Returns NULL at
  // end of file.
  Guchar *getLine();

  // Skip an entire line from the image.
  void skipLine();

private:

  Stream *str;			// base stream
  int width;			// pixels per line
  int nComps;			// components per pixel
  int nBits;			// bits per component
  int nVals;			// components per line
  int inputLineSize;		// input line buffer size
  Guchar *inputLine;		// input line buffer
  Guchar *imgLine;		// line buffer
  int imgIdx;			// current index in imgLine
};

//------------------------------------------------------------------------
// StreamPredictor
//------------------------------------------------------------------------

class StreamPredictor {
public:

  // Create a predictor object.  Note that the parameters are for the
  // predictor, and may not match the actual image parameters.
  StreamPredictor(Stream *strA, int predictorA,
		  int widthA, int nCompsA, int nBitsA);

  ~StreamPredictor();

  StreamPredictor(const StreamPredictor &) = delete;
  StreamPredictor& operator=(const StreamPredictor &) = delete;

  GBool isOk() { return ok; }

  int lookChar();
  int getChar();
  int getChars(int nChars, Guchar *buffer);

private:

  GBool getNextLine();

  Stream *str;			// base stream
  int predictor;		// predictor
  int width;			// pixels per line
  int nComps;			// components per pixel
  int nBits;			// bits per component
  int nVals;			// components per line
  int pixBytes;			// bytes per pixel
  int rowBytes;			// bytes per line
  Guchar *predLine;		// line buffer
  int predIdx;			// current index in predLine
  GBool ok;
};

//------------------------------------------------------------------------
// FileStream
//------------------------------------------------------------------------

#define fileStreamBufSize 256

class FileStream: public BaseStream {
public:

  FileStream(GooFile* fileA, Goffset startA, GBool limitedA,
	     Goffset lengthA, Object &&dictA);
  ~FileStream();
  BaseStream *copy() override;
  Stream *makeSubStream(Goffset startA, GBool limitedA,
				Goffset lengthA, Object &&dictA) override;
  StreamKind getKind() override { return strFile; }
  void reset() override;
  void close() override;
  int getChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr++ & 0xff); }
  int lookChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr & 0xff); }
  Goffset getPos() override { return bufPos + (bufPtr - buf); }
  void setPos(Goffset pos, int dir = 0) override;
  Goffset getStart() override { return start; }
  void moveStart(Goffset delta) override;

  int getUnfilteredChar () override { return getChar(); }
  void unfilteredReset () override { reset(); }

private:

  GBool fillBuf();
  
  GBool hasGetChars() override { return true; }
  int getChars(int nChars, Guchar *buffer) override
    {
      int n, m;

      n = 0;
      while (n < nChars) {
        if (bufPtr >= bufEnd) {
          if (!fillBuf()) {
            break;
          }
        }
        m = (int)(bufEnd - bufPtr);
        if (m > nChars - n) {
          m = nChars - n;
        }
        memcpy(buffer + n, bufPtr, m);
        bufPtr += m;
        n += m;
      }
      return n;
    }

private:
  GooFile* file;
  Goffset offset;
  Goffset start;
  GBool limited;
  char buf[fileStreamBufSize];
  char *bufPtr;
  char *bufEnd;
  Goffset bufPos;
  Goffset savePos;
  GBool saved;
};

//------------------------------------------------------------------------
// CachedFileStream
//------------------------------------------------------------------------

#define cachedStreamBufSize 1024

class CachedFileStream: public BaseStream {
public:

  CachedFileStream(CachedFile *ccA, Goffset startA, GBool limitedA,
	     Goffset lengthA, Object &&dictA);
  ~CachedFileStream();
  BaseStream *copy() override;
  Stream *makeSubStream(Goffset startA, GBool limitedA,
				Goffset lengthA, Object &&dictA) override;
  StreamKind getKind() override { return strCachedFile; }
  void reset() override;
  void close() override;
  int getChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr++ & 0xff); }
  int lookChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr & 0xff); }
  Goffset getPos() override { return bufPos + (bufPtr - buf); }
  void setPos(Goffset pos, int dir = 0) override;
  Goffset getStart() override { return start; }
  void moveStart(Goffset delta) override;

  int getUnfilteredChar () override { return getChar(); }
  void unfilteredReset () override { reset(); }

private:

  GBool fillBuf();

  CachedFile *cc;
  Goffset start;
  GBool limited;
  char buf[cachedStreamBufSize];
  char *bufPtr;
  char *bufEnd;
  Guint bufPos;
  int savePos;
  GBool saved;
};


//------------------------------------------------------------------------
// MemStream
//------------------------------------------------------------------------

template<typename T>
class BaseMemStream: public BaseStream {
public:

  BaseMemStream(T *bufA, Goffset startA, Goffset lengthA, Object &&dictA) : BaseStream(std::move(dictA), lengthA) {
    buf = bufA;
    start = startA;
    length = lengthA;
    bufEnd = buf + start + length;
    bufPtr = buf + start;
  }

  BaseStream *copy() override {
    return new BaseMemStream(buf, start, length, dict.copy());
  }

  Stream *makeSubStream(Goffset startA, GBool limited, Goffset lengthA, Object &&dictA) override {
    Goffset newLength;

    if (!limited || startA + lengthA > start + length) {
      newLength = start + length - startA;
    } else {
      newLength = lengthA;
    }
    return new BaseMemStream(buf, startA, newLength, std::move(dictA));
  }

  StreamKind getKind() override { return strWeird; }

  void reset() override {
    bufPtr = buf + start;
  }

  void close() override { }

  int getChar() override
    { return (bufPtr < bufEnd) ? (*bufPtr++ & 0xff) : EOF; }

  int lookChar() override
    { return (bufPtr < bufEnd) ? (*bufPtr & 0xff) : EOF; }

  Goffset getPos() override { return (int)(bufPtr - buf); }

  void setPos(Goffset pos, int dir = 0) override {
    Guint i;

    if (dir >= 0) {
      i = pos;
    } else {
      i = start + length - pos;
    }
    if (i < start) {
      i = start;
    } else if (i > start + length) {
      i = start + length;
    }
    bufPtr = buf + i;
  }

  Goffset getStart() override { return start; }

  void moveStart(Goffset delta) override {
    start += delta;
    length -= delta;
    bufPtr = buf + start;
  }

  int getUnfilteredChar () override { return getChar(); }

  void unfilteredReset () override { reset (); } 

protected:
  T *buf;

private:

  GBool hasGetChars() override { return true; }

  int getChars(int nChars, Guchar *buffer) override {
    int n;

    if (nChars <= 0) {
      return 0;
    }
    if (bufEnd - bufPtr < nChars) {
      n = (int)(bufEnd - bufPtr);
    } else {
      n = nChars;
    }
    memcpy(buffer, bufPtr, n);
    bufPtr += n;
    return n;
  }

  Goffset start;
  T *bufEnd;
  T *bufPtr;
};

class MemStream : public BaseMemStream<const char>
{
public:
  MemStream(const char *bufA, Goffset startA, Goffset lengthA, Object &&dictA)
   : BaseMemStream(bufA, startA, lengthA, std::move(dictA))
   { }
};

class AutoFreeMemStream : public BaseMemStream<char>
{
public:
  AutoFreeMemStream(char *bufA, Goffset startA, Goffset lengthA, Object &&dictA)
   : BaseMemStream(bufA, startA, lengthA, std::move(dictA))
   { }

  ~AutoFreeMemStream()
    { gfree(buf); }
};


//------------------------------------------------------------------------
// EmbedStream
//
// This is a special stream type used for embedded streams (inline
// images).  It reads directly from the base stream -- after the
// EmbedStream is deleted, reads from the base stream will proceed where
// the BaseStream left off.  Note that this is very different behavior
// that creating a new FileStream (using makeSubStream).
//------------------------------------------------------------------------

class EmbedStream: public BaseStream {
public:

  EmbedStream(Stream *strA, Object &&dictA, GBool limitedA, Goffset lengthA, GBool reusableA = gFalse);
  ~EmbedStream();
  BaseStream *copy() override;
  Stream *makeSubStream(Goffset start, GBool limitedA,
				Goffset lengthA, Object &&dictA) override;
  StreamKind getKind() override { return str->getKind(); }
  void reset() override {}
  int getChar() override;
  int lookChar() override;
  Goffset getPos() override;
  void setPos(Goffset pos, int dir = 0) override;
  Goffset getStart() override;
  void moveStart(Goffset delta) override;

  int getUnfilteredChar () override { return str->getUnfilteredChar(); }
  void unfilteredReset () override { str->unfilteredReset(); }

  void rewind();
  void restore();

private:

  GBool hasGetChars() override { return true; }
  int getChars(int nChars, Guchar *buffer) override;

  Stream *str;
  GBool limited;
  GBool reusable;
  GBool record;
  GBool replay;
  unsigned char *bufData;
  long bufMax;
  long bufLen;
  long bufPos;

};

//------------------------------------------------------------------------
// ASCIIHexStream
//------------------------------------------------------------------------

class ASCIIHexStream: public FilterStream {
public:

  ASCIIHexStream(Stream *strA);
  ~ASCIIHexStream();
  StreamKind getKind() override { return strASCIIHex; }
  void reset() override;
  int getChar() override
    { int c = lookChar(); buf = EOF; return c; }
  int lookChar() override;
  GooString *getPSFilter(int psLevel, const char *indent) override;
  GBool isBinary(GBool last = gTrue) override;

private:

  int buf;
  GBool eof;
};

//------------------------------------------------------------------------
// ASCII85Stream
//------------------------------------------------------------------------

class ASCII85Stream: public FilterStream {
public:

  ASCII85Stream(Stream *strA);
  ~ASCII85Stream();
  StreamKind getKind() override { return strASCII85; }
  void reset() override;
  int getChar() override
    { int ch = lookChar(); ++index; return ch; }
  int lookChar() override;
  GooString *getPSFilter(int psLevel, const char *indent) override;
  GBool isBinary(GBool last = gTrue) override;

private:

  int c[5];
  int b[4];
  int index, n;
  GBool eof;
};

//------------------------------------------------------------------------
// LZWStream
//------------------------------------------------------------------------

class LZWStream: public FilterStream {
public:

  LZWStream(Stream *strA, int predictor, int columns, int colors,
	    int bits, int earlyA);
  ~LZWStream();
  StreamKind getKind() override { return strLZW; }
  void reset() override;
  int getChar() override;
  int lookChar() override;
  int getRawChar() override;
  void getRawChars(int nChars, int *buffer) override;
  GooString *getPSFilter(int psLevel, const char *indent) override;
  GBool isBinary(GBool last = gTrue) override;

private:

  GBool hasGetChars() override { return true; }
  int getChars(int nChars, Guchar *buffer) override;

  inline int doGetRawChar() {
    if (eof) {
      return EOF;
    }
    if (seqIndex >= seqLength) {
      if (!processNextCode()) {
        return EOF;
      }
    }
    return seqBuf[seqIndex++];
  }

  StreamPredictor *pred;	// predictor
  int early;			// early parameter
  GBool eof;			// true if at eof
  unsigned int inputBuf;	// input buffer
  int inputBits;		// number of bits in input buffer
  struct {			// decoding table
    int length;
    int head;
    Guchar tail;
  } table[4097];
  int nextCode;			// next code to be used
  int nextBits;			// number of bits in next code word
  int prevCode;			// previous code used in stream
  int newChar;			// next char to be added to table
  Guchar seqBuf[4097];		// buffer for current sequence
  int seqLength;		// length of current sequence
  int seqIndex;			// index into current sequence
  GBool first;			// first code after a table clear

  GBool processNextCode();
  void clearTable();
  int getCode();
};

//------------------------------------------------------------------------
// RunLengthStream
//------------------------------------------------------------------------

class RunLengthStream: public FilterStream {
public:

  RunLengthStream(Stream *strA);
  ~RunLengthStream();
  StreamKind getKind() override { return strRunLength; }
  void reset() override;
  int getChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr++ & 0xff); }
  int lookChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr & 0xff); }
  GooString *getPSFilter(int psLevel, const char *indent) override;
  GBool isBinary(GBool last = gTrue) override;

private:

  GBool hasGetChars() override { return true; }
  int getChars(int nChars, Guchar *buffer) override;

  char buf[128];		// buffer
  char *bufPtr;			// next char to read
  char *bufEnd;			// end of buffer
  GBool eof;

  GBool fillBuf();
};

//------------------------------------------------------------------------
// CCITTFaxStream
//------------------------------------------------------------------------

struct CCITTCodeTable;

class CCITTFaxStream: public FilterStream {
public:

  CCITTFaxStream(Stream *strA, int encodingA, GBool endOfLineA,
		 GBool byteAlignA, int columnsA, int rowsA,
		 GBool endOfBlockA, GBool blackA, int damagedRowsBeforeErrorA);
  ~CCITTFaxStream();
  StreamKind getKind() override { return strCCITTFax; }
  void reset() override;
  int getChar() override
    { int c = lookChar(); buf = EOF; return c; }
  int lookChar() override;
  GooString *getPSFilter(int psLevel, const char *indent) override;
  GBool isBinary(GBool last = gTrue) override;

  void unfilteredReset () override;

  int getEncoding() { return encoding; }
  GBool getEndOfLine() { return endOfLine; }
  GBool getEncodedByteAlign() { return byteAlign; }
  GBool getEndOfBlock() { return endOfBlock; }
  int getColumns() { return columns; }
  GBool getBlackIs1() { return black; }
  int getDamagedRowsBeforeError() { return damagedRowsBeforeError; }

private:

  void ccittReset(GBool unfiltered);
  int encoding;			// 'K' parameter
  GBool endOfLine;		// 'EndOfLine' parameter
  GBool byteAlign;		// 'EncodedByteAlign' parameter
  int columns;			// 'Columns' parameter
  int rows;			// 'Rows' parameter
  GBool endOfBlock;		// 'EndOfBlock' parameter
  GBool black;			// 'BlackIs1' parameter
  int damagedRowsBeforeError;   // 'DamagedRowsBeforeError' parameter
  GBool eof;			// true if at eof
  GBool nextLine2D;		// true if next line uses 2D encoding
  int row;			// current row
  Guint inputBuf;		// input buffer
  int inputBits;		// number of bits in input buffer
  int *codingLine;		// coding line changing elements
  int *refLine;			// reference line changing elements
  int a0i;			// index into codingLine
  GBool err;			// error on current line
  int outputBits;		// remaining ouput bits
  int buf;			// character buffer

  void addPixels(int a1, int blackPixels);
  void addPixelsNeg(int a1, int blackPixels);
  short getTwoDimCode();
  short getWhiteCode();
  short getBlackCode();
  short lookBits(int n);
  void eatBits(int n) { if ((inputBits -= n) < 0) inputBits = 0; }
};

#ifndef ENABLE_LIBJPEG
//------------------------------------------------------------------------
// DCTStream
//------------------------------------------------------------------------

// DCT component info
struct DCTCompInfo {
  int id;			// component ID
  int hSample, vSample;		// horiz/vert sampling resolutions
  int quantTable;		// quantization table number
  int prevDC;			// DC coefficient accumulator
};

struct DCTScanInfo {
  GBool comp[4];		// comp[i] is set if component i is
				//   included in this scan
  int numComps;			// number of components in the scan
  int dcHuffTable[4];		// DC Huffman table numbers
  int acHuffTable[4];		// AC Huffman table numbers
  int firstCoeff, lastCoeff;	// first and last DCT coefficient
  int ah, al;			// successive approximation parameters
};

// DCT Huffman decoding table
struct DCTHuffTable {
  Guchar firstSym[17];		// first symbol for this bit length
  Gushort firstCode[17];	// first code for this bit length
  Gushort numCodes[17];		// number of codes of this bit length
  Guchar sym[256];		// symbols
};

class DCTStream: public FilterStream {
public:

  DCTStream(Stream *strA, int colorXformA, Dict *dict, int recursion);
  virtual ~DCTStream();
  StreamKind getKind() override { return strDCT; }
  void reset() override;
  void close() override;
  int getChar() override;
  int lookChar() override;
  GooString *getPSFilter(int psLevel, const char *indent) override;
  GBool isBinary(GBool last = gTrue) override;

  void unfilteredReset() override;

private:

  void dctReset(GBool unfiltered);  
  GBool progressive;		// set if in progressive mode
  GBool interleaved;		// set if in interleaved mode
  int width, height;		// image size
  int mcuWidth, mcuHeight;	// size of min coding unit, in data units
  int bufWidth, bufHeight;	// frameBuf size
  DCTCompInfo compInfo[4];	// info for each component
  DCTScanInfo scanInfo;		// info for the current scan
  int numComps;			// number of components in image
  int colorXform;		// color transform: -1 = unspecified
				//                   0 = none
				//                   1 = YUV/YUVK -> RGB/CMYK
  GBool gotJFIFMarker;		// set if APP0 JFIF marker was present
  GBool gotAdobeMarker;		// set if APP14 Adobe marker was present
  int restartInterval;		// restart interval, in MCUs
  Gushort quantTables[4][64];	// quantization tables
  int numQuantTables;		// number of quantization tables
  DCTHuffTable dcHuffTables[4];	// DC Huffman tables
  DCTHuffTable acHuffTables[4];	// AC Huffman tables
  int numDCHuffTables;		// number of DC Huffman tables
  int numACHuffTables;		// number of AC Huffman tables
  Guchar *rowBuf[4][32];	// buffer for one MCU (non-progressive mode)
  int *frameBuf[4];		// buffer for frame (progressive mode)
  int comp, x, y, dy;		// current position within image/MCU
  int restartCtr;		// MCUs left until restart
  int restartMarker;		// next restart marker
  int eobRun;			// number of EOBs left in the current run
  int inputBuf;			// input buffer for variable length codes
  int inputBits;		// number of valid bits in input buffer

  void restart();
  GBool readMCURow();
  void readScan();
  GBool readDataUnit(DCTHuffTable *dcHuffTable,
		     DCTHuffTable *acHuffTable,
		     int *prevDC, int data[64]);
  GBool readProgressiveDataUnit(DCTHuffTable *dcHuffTable,
				DCTHuffTable *acHuffTable,
				int *prevDC, int data[64]);
  void decodeImage();
  void transformDataUnit(Gushort *quantTable,
			 int dataIn[64], Guchar dataOut[64]);
  int readHuffSym(DCTHuffTable *table);
  int readAmp(int size);
  int readBit();
  GBool readHeader();
  GBool readBaselineSOF();
  GBool readProgressiveSOF();
  GBool readScanInfo();
  GBool readQuantTables();
  GBool readHuffmanTables();
  GBool readRestartInterval();
  GBool readJFIFMarker();
  GBool readAdobeMarker();
  GBool readTrailer();
  int readMarker();
  int read16();
};

#endif

#ifndef ENABLE_ZLIB_UNCOMPRESS
//------------------------------------------------------------------------
// FlateStream
//------------------------------------------------------------------------

#define flateWindow          32768    // buffer size
#define flateMask            (flateWindow-1)
#define flateMaxHuffman         15    // max Huffman code length
#define flateMaxCodeLenCodes    19    // max # code length codes
#define flateMaxLitCodes       288    // max # literal codes
#define flateMaxDistCodes       30    // max # distance codes

// Huffman code table entry
struct FlateCode {
  Gushort len;			// code length, in bits
  Gushort val;			// value represented by this code
};

struct FlateHuffmanTab {
  FlateCode *codes;
  int maxLen;
};

// Decoding info for length and distance code words
struct FlateDecode {
  int bits;			// # extra bits
  int first;			// first length/distance
};

class FlateStream: public FilterStream {
public:

  FlateStream(Stream *strA, int predictor, int columns,
	      int colors, int bits);
  ~FlateStream();
  StreamKind getKind() override { return strFlate; }
  void reset() override;
  int getChar() override;
  int lookChar() override;
  int getRawChar() override;
  void getRawChars(int nChars, int *buffer) override;
  GooString *getPSFilter(int psLevel, const char *indent) override;
  GBool isBinary(GBool last = gTrue) override;
  void unfilteredReset () override;

private:
  void flateReset(GBool unfiltered);
  inline int doGetRawChar() {
    int c;

    while (remain == 0) {
      if (endOfBlock && eof)
        return EOF;
      readSome();
    }
    c = buf[index];
    index = (index + 1) & flateMask;
    --remain;
    return c;
  }

  GBool hasGetChars() override { return true; }
  int getChars(int nChars, Guchar *buffer) override;

  StreamPredictor *pred;	// predictor
  Guchar buf[flateWindow];	// output data buffer
  int index;			// current index into output buffer
  int remain;			// number valid bytes in output buffer
  int codeBuf;			// input buffer
  int codeSize;			// number of bits in input buffer
  int				// literal and distance code lengths
    codeLengths[flateMaxLitCodes + flateMaxDistCodes];
  FlateHuffmanTab litCodeTab;	// literal code table
  FlateHuffmanTab distCodeTab;	// distance code table
  GBool compressedBlock;	// set if reading a compressed block
  int blockLen;			// remaining length of uncompressed block
  GBool endOfBlock;		// set when end of block is reached
  GBool eof;			// set when end of stream is reached

  static int			// code length code reordering
    codeLenCodeMap[flateMaxCodeLenCodes];
  static FlateDecode		// length decoding info
    lengthDecode[flateMaxLitCodes-257];
  static FlateDecode		// distance decoding info
    distDecode[flateMaxDistCodes];
  static FlateHuffmanTab	// fixed literal code table
    fixedLitCodeTab;
  static FlateHuffmanTab	// fixed distance code table
    fixedDistCodeTab;

  void readSome();
  GBool startBlock();
  void loadFixedCodes();
  GBool readDynamicCodes();
  void compHuffmanCodes(int *lengths, int n, FlateHuffmanTab *tab);
  int getHuffmanCodeWord(FlateHuffmanTab *tab);
  int getCodeWord(int bits);
};
#endif

//------------------------------------------------------------------------
// EOFStream
//------------------------------------------------------------------------

class EOFStream: public FilterStream {
public:

  EOFStream(Stream *strA);
  ~EOFStream();
  StreamKind getKind() override { return strWeird; }
  void reset() override {}
  int getChar() override { return EOF; }
  int lookChar() override { return EOF; }
  GooString *getPSFilter(int /*psLevel*/, const char * /*indent*/) override  { return NULL; }
  GBool isBinary(GBool /*last = gTrue*/) override { return gFalse; }
};

//------------------------------------------------------------------------
// BufStream
//------------------------------------------------------------------------

class BufStream: public FilterStream {
public:

  BufStream(Stream *strA, int bufSizeA);
  ~BufStream();
  StreamKind getKind() override { return strWeird; }
  void reset() override;
  int getChar() override;
  int lookChar() override;
  GooString *getPSFilter(int psLevel, const char *indent) override
    { return NULL; }
  GBool isBinary(GBool last = gTrue) override;

  int lookChar(int idx);

private:

  int *buf;
  int bufSize;
};

//------------------------------------------------------------------------
// FixedLengthEncoder
//------------------------------------------------------------------------

class FixedLengthEncoder: public FilterStream {
public:

  FixedLengthEncoder(Stream *strA, int lengthA);
  ~FixedLengthEncoder();
  StreamKind getKind() override { return strWeird; }
  void reset() override;
  int getChar() override;
  int lookChar() override;
  GooString *getPSFilter(int /*psLevel*/, const char * /*indent*/) override { return NULL; }
  GBool isBinary(GBool /*last = gTrue*/) override;
  GBool isEncoder() override { return gTrue; }

private:

  int length;
  int count;
};

//------------------------------------------------------------------------
// ASCIIHexEncoder
//------------------------------------------------------------------------

class ASCIIHexEncoder: public FilterStream {
public:

  ASCIIHexEncoder(Stream *strA);
  ~ASCIIHexEncoder();
  StreamKind getKind() override { return strWeird; }
  void reset() override;
  int getChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr++ & 0xff); }
  int lookChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr & 0xff); }
  GooString *getPSFilter(int /*psLevel*/, const char * /*indent*/) override { return NULL; }
  GBool isBinary(GBool /*last = gTrue*/) override { return gFalse; }
  GBool isEncoder() override { return gTrue; }

private:

  char buf[4];
  char *bufPtr;
  char *bufEnd;
  int lineLen;
  GBool eof;

  GBool fillBuf();
};

//------------------------------------------------------------------------
// ASCII85Encoder
//------------------------------------------------------------------------

class ASCII85Encoder: public FilterStream {
public:

  ASCII85Encoder(Stream *strA);
  ~ASCII85Encoder();
  StreamKind getKind() override { return strWeird; }
  void reset() override;
  int getChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr++ & 0xff); }
  int lookChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr & 0xff); }
  GooString *getPSFilter(int /*psLevel*/, const char * /*indent*/) override { return NULL; }
  GBool isBinary(GBool /*last = gTrue*/) override { return gFalse; }
  GBool isEncoder() override { return gTrue; }

private:

  char buf[8];
  char *bufPtr;
  char *bufEnd;
  int lineLen;
  GBool eof;

  GBool fillBuf();
};

//------------------------------------------------------------------------
// RunLengthEncoder
//------------------------------------------------------------------------

class RunLengthEncoder: public FilterStream {
public:

  RunLengthEncoder(Stream *strA);
  ~RunLengthEncoder();
  StreamKind getKind() override { return strWeird; }
  void reset() override;
  int getChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr++ & 0xff); }
  int lookChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr & 0xff); }
  GooString *getPSFilter(int /*psLevel*/, const char * /*indent*/) override { return NULL; }
  GBool isBinary(GBool /*last = gTrue*/) override { return gTrue; }
  GBool isEncoder() override { return gTrue; }

private:

  char buf[131];
  char *bufPtr;
  char *bufEnd;
  char *nextEnd;
  GBool eof;

  GBool fillBuf();
};

//------------------------------------------------------------------------
// LZWEncoder
//------------------------------------------------------------------------

struct LZWEncoderNode {
  int byte;
  LZWEncoderNode *next;		// next sibling
  LZWEncoderNode *children;	// first child
};

class LZWEncoder: public FilterStream {
public:

  LZWEncoder(Stream *strA);
  ~LZWEncoder();
  StreamKind getKind() override { return strWeird; }
  void reset() override;
  int getChar() override;
  int lookChar() override;
  GooString *getPSFilter(int psLevel, const char *indent) override
    { return NULL; }
  GBool isBinary(GBool last = gTrue) override { return gTrue; }
  GBool isEncoder() override { return gTrue; }

private:

  LZWEncoderNode table[4096];
  int nextSeq;
  int codeLen;
  Guchar inBuf[4096];
  int inBufLen;
  int outBuf;
  int outBufLen;
  GBool needEOD;

  void fillBuf();
};

//------------------------------------------------------------------------
// CMYKGrayEncoder
//------------------------------------------------------------------------

class CMYKGrayEncoder: public FilterStream {
public:

  CMYKGrayEncoder(Stream *strA);
  ~CMYKGrayEncoder();
  StreamKind getKind() override { return strWeird; }
  void reset() override;
  int getChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr++ & 0xff); }
  int lookChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr & 0xff); }
  GooString *getPSFilter(int /*psLevel*/, const char * /*indent*/) override { return NULL; }
  GBool isBinary(GBool /*last = gTrue*/) override { return gFalse; }
  GBool isEncoder() override { return gTrue; }

private:

  char buf[2];
  char *bufPtr;
  char *bufEnd;
  GBool eof;

  GBool fillBuf();
};

//------------------------------------------------------------------------
// RGBGrayEncoder
//------------------------------------------------------------------------

class RGBGrayEncoder: public FilterStream {
public:

  RGBGrayEncoder(Stream *strA);
  ~RGBGrayEncoder();
  StreamKind getKind() override { return strWeird; }
  void reset() override;
  int getChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr++ & 0xff); }
  int lookChar() override
    { return (bufPtr >= bufEnd && !fillBuf()) ? EOF : (*bufPtr & 0xff); }
  GooString *getPSFilter(int /*psLevel*/, const char * /*indent*/) override { return NULL; }
  GBool isBinary(GBool /*last = gTrue*/) override { return gFalse; }
  GBool isEncoder() override { return gTrue; }

private:

  char buf[2];
  char *bufPtr;
  char *bufEnd;
  GBool eof;

  GBool fillBuf();
};

#endif
