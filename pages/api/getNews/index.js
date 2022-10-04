import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";

const query = groq`*[_type == "post"] {
  _id,
    ...
  } | order(publishedAt desc)`;

export default async function handler(req, res) {
  try {
    const posts = await sanityClient.fetch(query);
    res.status(200).json({ posts });
  } catch (err) {
    res.status(500).json({ message: "Getting posts failed!" });
    return;
  }
}
