import React from "react";
import "@/styles/pages/_products.scss";
import Link from "next/link";
import { client, urlFor } from "../lib/sanity";
import { groq } from "next-sanity";
import { IProduct } from "@/types/ProductTypes";
import Image from "next/image";
import { v4 } from "uuid";

const getSpecialClothesQueries = `
                  *[_type == "protectional" && category->name == 'PPE'] {
                    name,
                    "id": _id,
                    description,
                    "image":images,
                    "slug": slug.current,
                  }`;

const getPpeItems = () => {
  return client.fetch(groq`${getSpecialClothesQueries}`);
};

export const revalidate = 60;

export default async function Products() {
  const allDatas: IProduct[] = await getPpeItems();

  return (
    <div>
      <div className="products">
        <div className="products__shoes">
          {allDatas?.map((item) => {
            return (
              <div className="list" key={v4()}>
                <Link href={`/protectional/${item?.slug}`}>
                  <div className="list__image">
                    <Image
                      src={urlFor(item?.image[0]).url()}
                      width={210}
                      height={210}
                      alt="productPic"
                      unoptimized={true}
                    />
                  </div>
                  <div className="list__desc">
                    <h5>{item?.name}</h5>
                    <div>
                      <p>
                        {item.description?.material?.length > 70
                          ? `${item.description?.material.slice(0, 55)}...`
                          : item.description?.material}
                      </p>
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
