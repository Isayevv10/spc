"use client";

import { urlFor } from "@/app/lib/sanity";
import { IProduct } from "@/types/Product";
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
              width={580}
              height={0}
              unoptimized={true}
              style={{
                height: "540px",
                width: "540px",
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
                width={100}
                height={100}
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
