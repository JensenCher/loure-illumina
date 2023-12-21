const character = {
  name: "character",
  title: "Characters",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "race",
      title: "Race",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "writtenBy",
      title: "Written By",
      type: "array",
      description: "The Writers",
      of: [{ type: "string" }],
    },
    {
      name: "editedBy",
      title: "Edited By",
      type: "array",
      description: "The Editors",
      of: [{ type: "string" }],
    },
    {
      name: "show",
      title: "Show",
      description: "Show on the webpage?",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
    {
      name: "bgUrl",
      title: "Background URL",
      type: "string",
    },
    {
      name: "borderUrl",
      title: "Border URL",
      type: "string",
    },
    {
      name: "mgUrl",
      title: "MG URL",
      type: "string",
    },
    {
      name: "fgUrl",
      title: "FG URL",
      type: "string",
    },
    {
      name: "chColorDodgeUrl",
      title: "Character Color Dodge URL",
      type: "string",
    },
    {
      name: "charUrl",
      title: "Character URL",
      type: "string",
    },
    {
      name: "colorDodge2Url",
      title: "Color Dodge 2 URL",
      type: "string",
    },
    {
      name: "colorDodge1Url",
      title: "Color Dodge 1 URL",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default character;
