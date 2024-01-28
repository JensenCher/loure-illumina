import { PortableTextBlock } from "sanity";
import { Category } from "./Category";

export type Character = {
  [key: string]: string | string[] | Date | PortableTextBlock[] | boolean | number | Category | undefined;
  _id: string;
  _createdAt: Date;
  order: number;
  title: string;
  slug: string;
  name: string;
  race: string;
  description: PortableTextBlock[];
  writtenBy: string[];
  editedBy: string[];
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
