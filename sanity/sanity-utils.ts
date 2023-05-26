import { Character } from "@/types/Character";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "p0eh54rl",
  dataset: "production",
  apiVersion: "2023-04-13",
  useCdn: true,
});

export async function getCharacters(): Promise<Character[]> {
  return client.fetch(
    groq`*[_type=="character"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        name,
        race,
        description,
        "image": image.asset->url,
        url,
        content,
        category->{
          _id,
          title,
          "slug": slug.current,
          description,
        },
    }`
  );
}

export async function getCharacterById(id: string): Promise<Character> {
  return client.fetch(
    groq`*[_type=="character" && _id==$id][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        name,
        race,
        description,
        "image": image.asset->url,
        url,
        content,
        category->{
          _id,
          title,
          "slug": slug.current,
          description,
        },
    }`,
    { id }
  );
}

export async function getCharacterBySlug(slug: string): Promise<Character> {
  return client.fetch(
    groq`*[_type=="character" && slug.current==$slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        name,
        race,
        description,
        "image": image.asset->url,
        url,
        content,
        category->{
          _id,
          title,
          "slug": slug.current,
          description,
        },
    }`,
    { slug }
  );
}
