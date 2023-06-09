const character = {
  name: "character",
  title: "Characters",
  type: "document",
  fields: [
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
      type: "url",
    },
    {
      name: "bgUrl",
      title: "Background URL",
      type: "url",
    },
    {
      name: "borderUrl",
      title: "Border URL",
      type: "url",
    },
    {
      name: "mgUrl",
      title: "MG URL",
      type: "url",
    },
    {
      name: "mgColorDodgeUrl",
      title: "MG Color Dodge URL",
      type: "url",
    },
    {
      name: "charUrl",
      title: "Character URL",
      type: "url",
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
