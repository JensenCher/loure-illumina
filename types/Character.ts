import { PortableTextBlock } from "sanity";
import { Category } from "./Category";

export type Character = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  name: string;
  race: string;
  description: PortableTextBlock[];
  image: string;
  category: Category;
  url: string;
  bgUrl: string;
  borderUrl: string;
  mgUrl: string;
  charUrl: string;
  content: PortableTextBlock[];
};
