import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "cc0u8vfi",
  dataset: "production",
  apiVersion: "2023-12-12",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
