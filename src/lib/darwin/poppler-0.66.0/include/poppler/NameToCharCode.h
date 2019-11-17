//========================================================================
//
// NameToCharCode.h
//
// Copyright 2001-2003 Glyph & Cog, LLC
//
//========================================================================

//========================================================================
//
// Modified under the Poppler project - http://poppler.freedesktop.org
//
// All changes made under the Poppler project to this file are licensed
// under GPL version 2 or later
//
// Copyright (C) 2018 Albert Astals Cid <aacid@kde.org>
//
// To see a description of the changes please see the Changelog file that
// came with your tarball or type make ChangeLog if you are building from git
//
//========================================================================

#ifndef NAMETOCHARCODE_H
#define NAMETOCHARCODE_H

#ifdef USE_GCC_PRAGMAS
#pragma interface
#endif

#include "CharTypes.h"

struct NameToCharCodeEntry;

//------------------------------------------------------------------------

class NameToCharCode {
public:

  NameToCharCode();
  ~NameToCharCode();

  NameToCharCode(const NameToCharCode &) = delete;
  NameToCharCode& operator=(const NameToCharCode &) = delete;

  void add(const char *name, CharCode c);
  CharCode lookup(const char *name);

private:

  int hash(const char *name);

  NameToCharCodeEntry *tab;
  int size;
  int len;
};

#endif
