import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-04-13",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
});

export async function GET(req: Request) {
  return new Response("Hi from routes");
}

// export async function POST(req: NextRequest, res: Response) {
//   const body = await req.json();
//   console.log(body);

//   return new Response(
//     JSON.stringify({
//       hello: "world",
//     })
//   );
// }

export async function POST(req: NextRequest, res: NextResponse) {
  const { name, email, message } = await req.json();
  console.log("name", name);

  try {
    console.log("creating...");
    await client.create({
      _type: "contact",
      name: name,
      email: email,
      message: message,
    });
    console.log("created :D");
  } catch (err) {
    console.log(err);
    return new Error(
      JSON.stringify({
        message: "Couldn't submit Contact",
        err,
      })
    );
  }
  console.log("Contact submitted.");

  // res.status(200).json({ message: "Contact Submitted!" });
  return new Response(
    JSON.stringify({
      message: "Contact Submitted!",
    })
  );
}
