//========================================================================
//
// Outline.h
//
// Copyright 2002-2003 Glyph & Cog, LLC
//
//========================================================================

//========================================================================
//
// Modified under the Poppler project - http://poppler.freedesktop.org
//
// All changes made under the Poppler project to this file are licensed
// under GPL version 2 or later
//
// Copyright (C) 2005 Marco Pesenti Gritti <mpg@redhat.com>
// Copyright (C) 2016, 2018 Albert Astals Cid <aacid@kde.org>
//
// To see a description of the changes please see the Changelog file that
// came with your tarball or type make ChangeLog if you are building from git
//
//========================================================================

#ifndef OUTLINE_H
#define OUTLINE_H

#ifdef USE_GCC_PRAGMAS
#pragma interface
#endif

#include "Object.h"
#include "CharTypes.h"

class GooString;
class GooList;
class XRef;
class LinkAction;

//------------------------------------------------------------------------

class Outline {
public:

  Outline(const Object *outlineObj, XRef *xref);
  ~Outline();

  Outline(const Outline &) = delete;
  Outline& operator=(const Outline &) = delete;

  const GooList *getItems() const { return items; }

private:

  GooList *items;		// NULL if document has no outline,
				// otherwise, a list of OutlineItem
};

//------------------------------------------------------------------------

class OutlineItem {
public:

  OutlineItem(const Dict *dict, int refNumA, OutlineItem *parentA, XRef *xrefA);
  ~OutlineItem();

  OutlineItem(const OutlineItem &) = delete;
  OutlineItem& operator=(const OutlineItem &) = delete;

  static GooList *readItemList(OutlineItem *parent, const Object *firstItemRef, XRef *xrefA);

  void open();
  void close();

  const Unicode *getTitle() const { return title; }
  int getTitleLength() const { return titleLen; }
  const LinkAction *getAction() const { return action; }
  GBool isOpen() const { return startsOpen; }
  GBool hasKids() const { return firstRef.isRef(); }
  const GooList *getKids() const { return kids; }

private:

  int refNum;
  OutlineItem *parent;
  XRef *xref;
  Unicode *title;
  int titleLen;
  LinkAction *action;
  Object firstRef;
  Object lastRef;
  Object nextRef;
  GBool startsOpen;
  GooList *kids;	// NULL if this item is closed or has no kids,
			// otherwise a list of OutlineItem
};

#endif
