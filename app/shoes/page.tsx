import React from "react";
import "@/styles/pages/_products.scss";
import Link from "next/link";
import { client, urlFor } from "../lib/sanity";
import { groq } from "next-sanity";
import { IProduct } from "@/types/Product";
import Image from "next/image";
import { truncate } from "@/helpers/truncate";

const getAllProductsQueries = `
                  *[_type == "product" && category->name == 'Shoes'] {
                    name,
                    "id": _id,
                    description,
                    "image":images,
                    price,
                    "slug": slug.current,
                    galleryImage
                  }`;

const getAllProductsItems = () => {
  return client.fetch(groq`${getAllProductsQueries}`);
};

export const revalidate = 60;

export default async function Products() {
  const allDatas: IProduct[] = await getAllProductsItems();
  console.log(allDatas);

  return (
    <div className="products">
      <div className="products__shoes">
        {allDatas?.map((item, index) => {
          return (
            <div className="list">
              <Link href={`/shoes/${item?.slug}`}>
                <div className="list__image">
                  <Image
                    src={urlFor(item?.image[0]).url()}
                    width={200}
                    height={200}
                    alt="productPic"
                  />
                </div>
                <div className="list__desc">
                  <h5>{item?.name}</h5>
                  <p>{truncate(item?.description)}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
