import React from "react";
import "@/styles/pages/_products.scss";
import Link from "next/link";
import { client, urlFor } from "../lib/sanity";
import { groq } from "next-sanity";
import { IProduct } from "@/types/ProductTypes";
import Image from "next/image";
import { v4 } from "uuid";

const getAllProductsQueries = `
                  *[_type == "product" && category->name == 'Shoes'] {
                    name,
                    "id": _id,
                    description,
                    "image":images,
                    "slug": slug.current,
                  }`;

const getAllProductsItems = () => {
  return client.fetch(groq`${getAllProductsQueries}`);
};

export const revalidate = 60;

export default async function Products() {
  const allDatas: IProduct[] = await getAllProductsItems();

  return (
    <div>
      <div className="products">
        <div className="products__shoes">
          {allDatas?.map((item) => {
            return (
              <div className="list" key={v4()}>
                <Link href={`/shoes/${item?.slug}`}>
                  <div className="list__image">
                    <Image
                      src={urlFor(item?.image[0]).url()}
                      width={210}
                      height={210}
                      objectFit="cover"
                      alt="productPic"
                      unoptimized={true}
                    />
                  </div>
                  <div className="list__desc">
                    <h5>{item?.name}</h5>
                    <div>
                      <p>{item?.description.brand}</p>
                      <p>{item?.description.standart}...</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
