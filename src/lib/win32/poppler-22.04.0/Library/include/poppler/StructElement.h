//========================================================================
//
// StructElement.h
//
// This file is licensed under the GPLv2 or later
//
// Copyright 2013, 2014 Igalia S.L.
// Copyright 2014 Luigi Scarso <luigi.scarso@gmail.com>
// Copyright 2014, 2018, 2019, 2021 Albert Astals Cid <aacid@kde.org>
// Copyright 2018 Adam Reichold <adam.reichold@t-online.de>
// Copyright 2021 Adrian Johnson <ajohnson@redneon.com>
//
//========================================================================

#ifndef STRUCTELEMENT_H
#define STRUCTELEMENT_H

#include "goo/GooString.h"
#include "MarkedContentOutputDev.h"
#include "Object.h"
#include "poppler_private_export.h"
#include <vector>
#include <set>

class GooString;
class Dict;
class StructElement;
class StructTreeRoot;

class POPPLER_PRIVATE_EXPORT Attribute
{
public:
    enum Type
    {
        Unknown = 0, // Uninitialized, parsing error, etc.
        UserProperty, // User defined attribute (i.e. non-standard)

        // Common standard attributes
        Placement,
        WritingMode,
        BackgroundColor,
        BorderColor,
        BorderStyle,
        BorderThickness,
        Color,
        Padding,

        // Block element standard attributes
        SpaceBefore,
        SpaceAfter,
        StartIndent,
        EndIndent,
        TextIndent,
        TextAlign,
        BBox,
        Width,
        Height,
        BlockAlign,
        InlineAlign,
        TBorderStyle,
        TPadding,

        // Inline element standard attributes
        BaselineShift,
        LineHeight,
        TextDecorationColor,
        TextDecorationThickness,
        TextDecorationType,
        RubyAlign,
        RubyPosition,
        GlyphOrientationVertical,

        // Column-only standard attributes
        ColumnCount,
        ColumnGap,
        ColumnWidths,

        // List-only standard attributes
        ListNumbering,

        // PrintField-only standard attributes
        Role,
        checked,
        Desc,

        // Table-only standard attributes
        RowSpan,
        ColSpan,
        Headers,
        Scope,
        Summary,
    };

    enum Owner
    {
        UnknownOwner = 0,
        // User-defined attributes
        UserProperties,
        // Standard attributes
        Layout,
        List,
        PrintField,
        Table,
        // Translation to other formats
        XML_1_00,
        HTML_3_20,
        HTML_4_01,
        OEB_1_00,
        RTF_1_05,
        CSS_1_00,
        CSS_2_00,
    };

    // Creates a standard attribute. The name is predefined, and the
    // value is type-checked to conform to the PDF specification.
    Attribute(Type type, Object *value);

    // Creates an UserProperty attribute, with an arbitrary name and value.
    Attribute(GooString &&name, Object *value);

    bool isOk() const { return type != Unknown; }

    // Name, type and value can be set only on construction.
    Type getType() const { return type; }
    Owner getOwner() const { return owner; }
    const char *getTypeName() const;
    const char *getOwnerName() const;
    const Object *getValue() const { return &value; }
    static Object *getDefaultValue(Type type);

    // The caller gets the ownership of the return GooString and is responsible of deleting it
    std::unique_ptr<GooString> getName() const { return std::make_unique<GooString>(type == UserProperty ? name.c_str() : getTypeName()); }

    // The revision is optional, and defaults to zero.
    unsigned int getRevision() const { return revision; }
    void setRevision(unsigned int revisionA) { revision = revisionA; }

    // Hidden elements should not be displayed by the user agent
    bool isHidden() const { return hidden; }
    void setHidden(bool hiddenA) { hidden = hiddenA; }

    // The formatted value may be in the PDF, or be left undefined (nullptr).
    // In the later case the user agent should provide a default representation.
    const char *getFormattedValue() const { return formatted ? formatted->c_str() : nullptr; }
    void setFormattedValue(const char *formattedA);

    ~Attribute();

private:
    Type type;
    Owner owner;
    unsigned int revision;
    GooString name;
    Object value;
    bool hidden;
    GooString *formatted;

    bool checkType(StructElement *element = nullptr);
    static Type getTypeForName(const char *name, StructElement *element = nullptr);
    static Attribute *parseUserProperty(Dict *property);

    friend class StructElement;
};

class POPPLER_PRIVATE_EXPORT StructElement
{
public:
    enum Type
    {
        Unknown = 0,
        MCID, // MCID reference, used internally
        OBJR, // Object reference, used internally

        Document,
        Part,
        Art,
        Sect,
        Div, // Structural elements

        Span,
        Quote,
        Note,
        Reference,
        BibEntry, // Inline elements
        Code,
        Link,
        Annot,
        BlockQuote,
        Caption,
        NonStruct,
        TOC,
        TOCI,
        Index,
        Private,

        P,
        H,
        H1,
        H2,
        H3,
        H4,
        H5,
        H6, // Paragraph-like

        L,
        LI,
        Lbl,
        LBody, // List elements

        Table,
        TR,
        TH,
        TD,
        THead,
        TFoot,
        TBody, // Table elements

        Ruby,
        RB,
        RT,
        RP, // Ruby text elements
        Warichu,
        WT,
        WP,

        Figure,
        Formula,
        Form, // Illustration-like elements
    };

    static const Ref InvalidRef;

    const char *getTypeName() const;
    Type getType() const { return type; }
    bool isOk() const { return type != Unknown; }
    bool isBlock() const;
    bool isInline() const;
    bool isGrouping() const;

    inline bool isContent() const { return (type == MCID) || isObjectRef(); }
    inline bool isObjectRef() const { return (type == OBJR && c->ref != Ref::INVALID()); }

    int getMCID() const { return c->mcid; }
    Ref getObjectRef() const { return c->ref; }
    Ref getParentRef() { return isContent() ? parent->getParentRef() : s->parentRef; }
    bool hasPageRef() const;
    bool getPageRef(Ref &ref) const;
    StructTreeRoot *getStructTreeRoot() { return treeRoot; }

    // Optional element identifier.
    const GooString *getID() const { return isContent() ? nullptr : s->id; }
    GooString *getID() { return isContent() ? nullptr : s->id; }

    // Optional ISO language name, e.g. en_US
    GooString *getLanguage()
    {
        if (!isContent() && s->language) {
            return s->language;
        }
        return parent ? parent->getLanguage() : nullptr;
    }
    const GooString *getLanguage() const
    {
        if (!isContent() && s->language) {
            return s->language;
        }
        return parent ? parent->getLanguage() : nullptr;
    }

    // Optional revision number, defaults to zero.
    unsigned int getRevision() const { return isContent() ? 0 : s->revision; }
    void setRevision(unsigned int revision)
    {
        if (isContent()) {
            s->revision = revision;
        }
    }

    // Optional element title, in human-readable form.
    const GooString *getTitle() const { return isContent() ? nullptr : s->title; }
    GooString *getTitle() { return isContent() ? nullptr : s->title; }

    // Optional element expanded abbreviation text.
    const GooString *getExpandedAbbr() const { return isContent() ? nullptr : s->expandedAbbr; }
    GooString *getExpandedAbbr() { return isContent() ? nullptr : s->expandedAbbr; }

    unsigned getNumChildren() const { return isContent() ? 0 : s->elements.size(); }
    const StructElement *getChild(int i) const { return isContent() ? nullptr : s->elements.at(i); }
    StructElement *getChild(int i) { return isContent() ? nullptr : s->elements.at(i); }

    void appendChild(StructElement *element)
    {
        if (!isContent() && element && element->isOk()) {
            s->elements.push_back(element);
        }
    }

    unsigned getNumAttributes() const { return isContent() ? 0 : s->attributes.size(); }
    const Attribute *getAttribute(int i) const { return isContent() ? nullptr : s->attributes.at(i); }
    Attribute *getAttribute(int i) { return isContent() ? nullptr : s->attributes.at(i); }

    void appendAttribute(Attribute *attribute)
    {
        if (!isContent() && attribute) {
            s->attributes.push_back(attribute);
        }
    }

    const Attribute *findAttribute(Attribute::Type attributeType, bool inherit = false, Attribute::Owner owner = Attribute::UnknownOwner) const;

    const GooString *getAltText() const { return isContent() ? nullptr : s->altText; }
    GooString *getAltText() { return isContent() ? nullptr : s->altText; }

    const GooString *getActualText() const { return isContent() ? nullptr : s->actualText; }
    GooString *getActualText() { return isContent() ? nullptr : s->actualText; }

    // Content text referenced by the element:
    //
    // - For MCID reference elements, this is just the text of the
    //   corresponding marked content object in the page stream, regardless
    //   of the setting of the "recursive" flag.
    // - For other elements, if the "recursive" flag is set, the text
    //   enclosed by *all* the child MCID reference elements of the subtree
    //   is returned. The text is assembled by traversing the leaf MCID
    //   reference elements in logical order.
    // - In any other case, the function returns nullptr.
    //
    // A new string is returned, and the ownership passed to the caller.
    //
    GooString *getText(bool recursive = true) const { return appendSubTreeText(nullptr, recursive); }

    const TextSpanArray getTextSpans() const
    {
        if (!isContent()) {
            return TextSpanArray();
        }
        MarkedContentOutputDev mcdev(getMCID(), stmRef);
        return getTextSpansInternal(mcdev);
    }

    ~StructElement();

private:
    GooString *appendSubTreeText(GooString *string, bool recursive) const;
    const TextSpanArray &getTextSpansInternal(MarkedContentOutputDev &mcdev) const;

    typedef std::vector<Attribute *> AttrPtrArray;
    typedef std::vector<StructElement *> ElemPtrArray;

    struct StructData
    {
        Ref parentRef;
        GooString *altText;
        GooString *actualText;
        GooString *id;
        GooString *title;
        GooString *expandedAbbr;
        GooString *language;
        unsigned int revision;
        ElemPtrArray elements;
        AttrPtrArray attributes;

        StructData();
        ~StructData();

        StructData(const StructData &) = delete;
        StructData &operator=(const StructData &) = delete;
    };

    // Data in content elements (MCID, MCR)
    struct ContentData
    {
        union {
            int mcid;
            Ref ref;
        };

        explicit ContentData(int mcidA) : mcid(mcidA) { }
        explicit ContentData(const Ref r) { ref = r; }
    };

    // Common data
    Type type;
    StructTreeRoot *treeRoot;
    StructElement *parent;
    mutable Object pageRef;
    Object stmRef;

    union {
        StructData *s;
        ContentData *c;
    };

    StructElement(Dict *elementDict, StructTreeRoot *treeRootA, StructElement *parentA, std::set<int> &seen);
    StructElement(int mcid, StructTreeRoot *treeRootA, StructElement *parentA);
    StructElement(const Ref ref, StructTreeRoot *treeRootA, StructElement *parentA);

    void parse(Dict *elementDict);
    StructElement *parseChild(const Object *ref, Object *childObj, std::set<int> &seen);
    void parseChildren(Dict *element, std::set<int> &seen);
    void parseAttributes(Dict *attributes, bool keepExisting = false);

    friend class StructTreeRoot;
};

#endif
