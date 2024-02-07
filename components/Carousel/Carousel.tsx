import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/components/_carousel.scss";
import { client } from "@/app/lib/sanity";
import { groq } from "next-sanity";
import { IImages } from "@/types/ProductTypes";
import CarouselSwiper from "./CarouselSwiper";

const query: string = groq`
                    *[_type == "carousel"] {
                        "image": images,
                        "id": _id,
                    }`;

const getCaoruselItems = () => {
  return client.fetch(groq`${query}`);
};

export const revalidate = 60;

export default async function Carousel() {
  const pics: IImages[] = await getCaoruselItems();

  return (
    <div className="container__carousel">
      <CarouselSwiper pics={pics} />
    </div>
  );
}
