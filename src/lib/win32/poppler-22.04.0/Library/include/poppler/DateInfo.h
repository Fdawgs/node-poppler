//========================================================================
//
// DateInfo.h
//
// Copyright (C) 2008, 2018, 2019 Albert Astals Cid <aacid@kde.org>
// Copyright (C) 2009 Carlos Garcia Campos <carlosgc@gnome.org>
// Copyright (C) 2015 André Guerreiro <aguerreiro1985@gmail.com>
// Copyright (C) 2015 André Esser <bepandre@hotmail.com>
// Copyright (C) 2016, 2021 Adrian Johnson <ajohnson@redneon.com>
//
// To see a description of the changes please see the Changelog file that
// came with your tarball or type make ChangeLog if you are building from git
//
//========================================================================

//========================================================================
//
// Based on code from pdfinfo.cc
//
// Copyright 1998-2003 Glyph & Cog, LLC
//
//========================================================================

#ifndef DATE_INFO_H
#define DATE_INFO_H

#include "goo/GooString.h"
#include "poppler_private_export.h"
#include <ctime>

bool POPPLER_PRIVATE_EXPORT parseDateString(const GooString *date, int *year, int *month, int *day, int *hour, int *minute, int *second, char *tz, int *tzHour, int *tzMinute);

/* Converts the time_t into a PDF Date format string.
 * If timeA is NULL, current time is used.
 * Returns new GooString. Free with delete.
 */
GooString POPPLER_PRIVATE_EXPORT *timeToDateString(const time_t *timeA);

/* Convert PDF date string to time.
 * Returns -1 if conversion fails.
 */
time_t POPPLER_PRIVATE_EXPORT dateStringToTime(const GooString *dateString);

#endif
