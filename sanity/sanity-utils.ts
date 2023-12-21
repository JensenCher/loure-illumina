import { Character } from "@/types/Character";
import { NextApiRequest, NextApiResponse } from "next";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-04-13",
  useCdn: process.env.NODE_ENV === "production",
});

export async function getCharacters(orderBy: string | null = null): Promise<Character[]> {
  return client.fetch(
    groq`*[_type=="character"]{
        _id,
        _createdAt,
        order,
        title,
        "slug": slug.current,
        name,
        race,
        description,
        writtenBy,
        editedBy,
        show,
        "image": image.asset->url,
        url,
        bgUrl,
        borderUrl,
        mgUrl,
        fgUrl,
        chColorDodgeUrl,
        charUrl,
        colorDodge2Url,
        colorDodge1Url,
        content,
        category->{
          _id,
          title,
          "slug": slug.current,
          description,
        },
    } ${orderBy ? " | order(" + orderBy + " asc)" : ""}`
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
        writtenBy,
        editedBy,
        show,
        "image": image.asset->url,
        url,
        bgUrl,
        borderUrl,
        mgUrl,
        fgUrl,
        chColorDodgeUrl,
        charUrl,
        colorDodge2Url,
        colorDodge1Url,
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
        writtenBy,
        editedBy,
        show,
        "image": image.asset->url,
        url,
        bgUrl,
        borderUrl,
        mgUrl,
        fgUrl,
        chColorDodgeUrl,
        charUrl,
        colorDodge2Url,
        colorDodge1Url,
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

// export async function createComment(slug: string): Promise<Character> {
//   return client.fetch(
//     groq`*[_type=="character" && slug.current==$slug][0]{
//         _id,
//         _createdAt,
//         title,
//         "slug": slug.current,
//         name,
//         race,
//         description,
//         "image": image.asset->url,
//         url,
//         bgUrl,
//         borderUrl,
//         mgUrl,
//         charUrl,
//         content,
//         category->{
//           _id,
//           title,
//           "slug": slug.current,
//           description,
//         },
//     }`,
//     { slug }
//   );
// }

export default async function createComment(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = JSON.parse(req.body);

  try {
    await client.create({
      _type: "contact",
      name,
      email,
      message,
    });
  } catch (err) {
    return res.status(500).json({ message: "Couldn't submit Contact", err });
  }
  console.log("Contact submitted.");

  res.status(200).json({ message: "Contact Submitted!" });
}
