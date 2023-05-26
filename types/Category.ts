import { PortableTextBlock } from "sanity";

export type Category = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  description: PortableTextBlock[];
  image: string;
  url: string;
  content: PortableTextBlock[];
};
