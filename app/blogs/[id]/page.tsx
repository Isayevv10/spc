import React from "react";
import "@/styles/components/_blogId.scss";
import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import { groq } from "next-sanity";
import { IBlogs } from "@/types/BlogTypes";

type Props = {
  params: {
    id: string;
  };
};

const query: string = groq`
      *[_type == "blog" && _id == $id] {
        "id": _id,
        "desc":description,
        "image":mainImage.asset->url,
      }
`;

const page = async ({ params: { id } }: Props) => {
  const blog: IBlogs[] = await client.fetch(query, { id });

  return (
    <div className="container__blog--id">
      <div>
        <Image
          src={urlFor(blog[0].image)!.url()!}
          alt="img"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div>{blog[0].desc}</div>
    </div>
  );
};

export default page;
