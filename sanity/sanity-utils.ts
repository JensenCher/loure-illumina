import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "p0eh54rl",
  dataset: "production",
  apiVersion: "2023-04-13",
  useCdn: true,
});

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type=="project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}

export async function getProjectById(id: string): Promise<Project> {
  return client.fetch(
    groq`*[_type=="project" && _id==$id][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`,
    { id }
  );
}
