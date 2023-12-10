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
  show: boolean;
  image: string;
  category: Category;
  url: string;
  bgUrl: string;
  borderUrl: string;
  mgUrl: string;
  chColorDodgeUrl: string;
  charUrl: string;
  colorDodge2Url: string;
  colorDodge1Url: string;
  content: PortableTextBlock[];
};
