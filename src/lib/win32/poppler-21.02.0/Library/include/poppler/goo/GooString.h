//========================================================================
//
// GooString.h
//
// Simple variable-length string type.
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
// Copyright (C) 2006 Kristian Høgsberg <krh@redhat.com>
// Copyright (C) 2006 Krzysztof Kowalczyk <kkowalczyk@gmail.com>
// Copyright (C) 2008-2010, 2012, 2014, 2017-2020 Albert Astals Cid <aacid@kde.org>
// Copyright (C) 2012-2014 Fabio D'Urso <fabiodurso@hotmail.it>
// Copyright (C) 2013 Jason Crain <jason@aquaticape.us>
// Copyright (C) 2015, 2018 Adam Reichold <adam.reichold@t-online.de>
// Copyright (C) 2016 Jakub Alba <jakubalba@gmail.com>
// Copyright (C) 2017 Adrian Johnson <ajohnson@redneon.com>
// Copyright (C) 2018 Klarälvdalens Datakonsult AB, a KDAB Group company, <info@kdab.com>. Work sponsored by the LiMux project of the city of Munich
// Copyright (C) 2019 Christophe Fergeau <cfergeau@redhat.com>
// Copyright (C) 2019 Tomoyuki Kubota <himajin100000@gmail.com>
// Copyright (C) 2019, 2020 Oliver Sander <oliver.sander@tu-dresden.de>
// Copyright (C) 2019 Hans-Ulrich Jüttner <huj@froreich-bioscientia.de>
// Copyright (C) 2020 Thorsten Behrens <Thorsten.Behrens@CIB.de>
//
// To see a description of the changes please see the Changelog file that
// came with your tarball or type make ChangeLog if you are building from git
//
//========================================================================

#ifndef GooString_H
#define GooString_H

#include <cstdarg>
#include <string>

#ifdef __clang__
#    define GOOSTRING_FORMAT __attribute__((__annotate__("gooformat")))
#else
#    define GOOSTRING_FORMAT
#endif

class GooString : private std::string
{
public:
    // Create an empty string.
    GooString() = default;

    // Destructor.
    ~GooString() = default;

    GooString(GooString &&other) = default;
    GooString &operator=(GooString &&other) = default;

    GooString(const GooString &other) = delete;
    GooString &operator=(const GooString &other) = delete;

    // Create a string from a C string.
    explicit GooString(const char *sA) : std::string(sA ? sA : "") { }

    // Zero-cost conversion from and to std::string
    explicit GooString(const std::string &str) : std::string(str) { }
    explicit GooString(std::string &&str) : std::string(std::move(str)) { }

    const std::string &toStr() const { return *this; }
    std::string &toNonConstStr() { return *this; }

    // Create a string from <lengthA> chars at <sA>.  This string
    // can contain null characters.
    GooString(const char *sA, int lengthA) : std::string(sA ? sA : "", sA ? lengthA : 0) { }

    // Create a string from <lengthA> chars at <idx> in <str>.
    GooString(const GooString *str, int idx, int lengthA) : std::string(*str, idx, lengthA) { }

    // Set content of a string to <newStr>.
    GooString *Set(const GooString *newStr)
    {
        assign(newStr ? static_cast<const std::string &>(*newStr) : std::string {});
        return this;
    }
    GooString *Set(const char *newStr)
    {
        assign(newStr ? newStr : "");
        return this;
    }
    GooString *Set(const char *newStr, int newLen)
    {
        assign(newStr ? newStr : "", newStr ? newLen : 0);
        return this;
    }

    // Copy a string.
    explicit GooString(const GooString *str) : std::string(str ? static_cast<const std::string &>(*str) : std::string {}) { }
    GooString *copy() const { return new GooString(this); }

    // Concatenate two strings.
    GooString(const GooString *str1, const GooString *str2)
    {
        reserve(str1->size() + str2->size());
        static_cast<std::string &>(*this).append(*str1);
        static_cast<std::string &>(*this).append(*str2);
    }

    // Create a formatted string.  Similar to printf, but without the
    // string overflow issues.  Formatting elements consist of:
    //     {<arg>:[<width>][.<precision>]<type>}
    // where:
    // - <arg> is the argument number (arg 0 is the first argument
    //   following the format string) -- NB: args must be first used in
    //   order; they can be reused in any order
    // - <width> is the field width -- negative to reverse the alignment;
    //   starting with a leading zero to zero-fill (for integers)
    // - <precision> is the number of digits to the right of the decimal
    //   point (for floating point numbers)
    // - <type> is one of:
    //     d, x, X, o, b -- int in decimal, lowercase hex, uppercase hex, octal, binary
    //     ud, ux, uX, uo, ub -- unsigned int
    //     ld, lx, lX, lo, lb, uld, ulx, ulX, ulo, ulb -- long, unsigned long
    //     lld, llx, llX, llo, llb, ulld, ullx, ullX, ullo, ullb
    //         -- long long, unsigned long long
    //     f, g, gs -- floating point (float or double)
    //         f  -- always prints trailing zeros (eg 1.0 with .2f will print 1.00)
    //         g  -- omits trailing zeros and, if possible, the dot (eg 1.0 shows up as 1)
    //         gs -- is like g, but treats <precision> as number of significant
    //               digits to show (eg 0.0123 with .2gs will print 0.012)
    //     c -- character (char, short or int)
    //     s -- string (char *)
    //     t -- GooString *
    //     w -- blank space; arg determines width
    // To get literal curly braces, use {{ or }}.
    static GooString *format(const char *fmt, ...) GOOSTRING_FORMAT;
    static GooString *formatv(const char *fmt, va_list argList);

    // Get length.
    int getLength() const { return size(); }

    // Get C string.
    using std::string::c_str;

    // Get <i>th character.
    char getChar(int i) const { return (*this)[i]; }

    // Change <i>th character.
    void setChar(int i, char c) { (*this)[i] = c; }

    // Clear string to zero length.
    GooString *clear()
    {
        static_cast<std::string &>(*this).clear();
        return this;
    }

    // Append a character or string.
    GooString *append(char c)
    {
        push_back(c);
        return this;
    }
    GooString *append(const GooString *str)
    {
        static_cast<std::string &>(*this).append(*str);
        return this;
    }
    GooString *append(const std::string &str)
    {
        static_cast<std::string &>(*this).append(str);
        return this;
    }
    GooString *append(const char *str)
    {
        static_cast<std::string &>(*this).append(str);
        return this;
    }
    GooString *append(const char *str, int lengthA)
    {
        static_cast<std::string &>(*this).append(str, lengthA);
        return this;
    }

    // Append a formatted string.
    GooString *appendf(const char *fmt, ...) GOOSTRING_FORMAT;
    GooString *appendfv(const char *fmt, va_list argList);

    // Insert a character or string.
    GooString *insert(int i, char c)
    {
        static_cast<std::string &>(*this).insert(i, 1, c);
        return this;
    }
    GooString *insert(int i, const GooString *str)
    {
        static_cast<std::string &>(*this).insert(i, *str);
        return this;
    }
    GooString *insert(int i, const char *str)
    {
        static_cast<std::string &>(*this).insert(i, str);
        return this;
    }
    GooString *insert(int i, const char *str, int lengthA)
    {
        static_cast<std::string &>(*this).insert(i, str, lengthA);
        return this;
    }

    // Delete a character or range of characters.
    GooString *del(int i, int n = 1)
    {
        erase(i, n);
        return this;
    }

    // Convert string to all-lower case.
    GooString *lowerCase();

    // Compare two strings:  -1:<  0:=  +1:>
    int cmp(const GooString *str) const { return compare(*str); }
    int cmp(const std::string &str) const { return compare(str); }
    int cmpN(GooString *str, int n) const { return compare(0, n, *str); }
    int cmp(const char *sA) const { return compare(sA); }
    int cmpN(const char *sA, int n) const { return compare(0, n, sA); }

    // Return true if strings starts with prefix
    bool startsWith(const char *prefix) const;
    // Return true if string ends with suffix
    bool endsWith(const char *suffix) const;

    bool hasUnicodeMarker() const { return hasUnicodeMarker(*this); }
    static bool hasUnicodeMarker(const std::string &s) { return s.size() >= 2 && s[0] == '\xfe' && s[1] == '\xff'; }
    bool hasUnicodeMarkerLE() const { return hasUnicodeMarkerLE(*this); }
    static bool hasUnicodeMarkerLE(const std::string &s) { return s.size() >= 2 && s[0] == '\xff' && s[1] == '\xfe'; }
    bool hasJustUnicodeMarker() const { return size() == 2 && hasUnicodeMarker(); }

    void prependUnicodeMarker();

    // Sanitizes the string so that it does
    // not contain any ( ) < > [ ] { } / %
    // The postscript mode also has some more strict checks
    // The caller owns the return value
    GooString *sanitizedName(bool psmode) const;
};

#endif
