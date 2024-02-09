import React from "react";
import Image from "next/image";
import "@/styles/pages/_blog.scss";
import { groq } from "next-sanity";
import { client, urlFor } from "../lib/sanity";
import { IBlogs } from "@/types/BlogTypes";
import Link from "next/link";
import { v4 } from "uuid";

const blogQuery: string = groq`
                        *[_type == "blog"] {
                          "id": _id,
                          "desc":description,
                          "image": mainImage
                      }`;

const getBlogsItems = () => {
  return client.fetch(groq`${blogQuery}`);
};

export const revalidate = 60;

const Blogs = async () => {
  const blogs: IBlogs[] = await getBlogsItems();

  return (
    <div className="blog__container">
      {blogs?.map((blog) => {
        return (
          <Link href={`/blogs/${blog?.id}`} key={v4()}>
            <div key={v4()} className="blog__container--item">
              <div>
                <Image
                  src={urlFor(blog.image)!.url()!}
                  alt="img"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <div>{blog?.desc}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blogs;
