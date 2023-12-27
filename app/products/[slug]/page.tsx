// "use client";

import { client } from "@/app/lib/sanity";
import { IProduct } from "@/types/Product";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import "@/styles/pages/_details.scss";
import "@/styles/components/_details.scss";
import Details from "@/components/DetailsPage/Details";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export default async function ProductDetails({ params: { slug } }: Props) {
  const query: string = groq`
      *[_type == "product" && slug.current == $slug][0] {
        name,
        price,
        description,
        "image":images,
        "id": _id
      }
  `;

  const products: IProduct = await client.fetch(query, { slug });
  console.log(products.description);

  // console.log(products);

  // const [products, setProducts] = useState<IProduct>();

  // const fetchData = async () => {
  //   const query: string = groq`
  //     *[_type == "product" && slug.current == $slug][0] {
  //       name,
  //       price,
  //       description,
  //       "image":images,
  //       "id": _id
  //     }
  // `;

  //   const product: IProduct = await client.fetch(query, { slug });
  //   setProducts(product);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [slug]);

  return (
    <div className="details__container">
      <div className="details__container--item-1">
        <Details products={products} />
      </div>
      <div className="details__container--item-2">
        <div className="details__container--item-2-name">{products?.name}</div>
        <div className="details__container--item-2-price">
          {products?.price} ₼
        </div>
        <div className="details__container--item-2-desc">
          {products?.description}
        </div>
      </div>
    </div>
  );
}
