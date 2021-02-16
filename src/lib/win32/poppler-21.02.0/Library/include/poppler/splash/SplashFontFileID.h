//========================================================================
//
// SplashFontFileID.h
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

#ifndef SPLASHFONTFILEID_H
#define SPLASHFONTFILEID_H

//------------------------------------------------------------------------
// SplashFontFileID
//------------------------------------------------------------------------

class SplashFontFileID
{
public:
    SplashFontFileID();
    virtual ~SplashFontFileID();
    SplashFontFileID(const SplashFontFileID &) = delete;
    SplashFontFileID &operator=(const SplashFontFileID &) = delete;
    virtual bool matches(SplashFontFileID *id) = 0;
};

#endif
