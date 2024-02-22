"use client";

import { urlFor } from "@/app/lib/sanity";
import { IProduct } from "@/types/ProductTypes";
import Image from "next/image";
import React, { useState } from "react";
import "@/styles/components/_details.scss";
import { v4 } from "uuid";

interface IProductProps {
  products: IProduct | undefined;
}

const Details = ({ products }: IProductProps) => {
  const [seletedItem, setSelectedItem] = useState<number>(0);

  return (
    <>
      <div className="main">
        <div>
          {products?.image[0] ? (
            <Image
              src={urlFor(products?.image[seletedItem]!).url()!}
              alt={"shoes"}
              width={300}
              height={0}
              unoptimized={true}
              style={{
                height: "480px",
                width: "700px",
                objectFit: "contain",
              }}
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="thumbs">
        {products?.image?.map((item, index) => {
          return (
            <div
              key={v4()}
              className="eachThumbs"
              onClick={() => setSelectedItem(index)}
            >
              <Image
                src={urlFor(products?.image[index]).url()}
                alt={"shoes"}
                width={93}
                height={64}
                unoptimized={true}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Details;
