import React from "react";
import { client } from "@/app/lib/sanity";
import { groq } from "next-sanity";
import { IImages } from "@/types/ProductTypes";
import CarouselSwiper from "./CarouselSwiper";

const query: string = groq`
                    *[_type == "carousel"] {
                        "image":images,
                    }`;

const getCaoruselItems = () => {
  return client.fetch(groq`${query}`);
};

export const revalidate = 10;

export default async function Carousel() {
  const pics: IImages[] = await getCaoruselItems();

  console.log(pics);

  return (
    <div className="container__carousel">
      <CarouselSwiper pics={pics} />
    </div>
  );
}
