"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/components/_carousel.scss";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import { groq } from "next-sanity";
import { v4 } from "uuid";
import { IImages } from "@/types/ProductTypes";

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
      <Swiper
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {pics[0].image.map((item: any, index: number) => {
          return (
            <SwiperSlide key={v4()}>
              <Image
                src={urlFor(item)!.url()!}
                alt={"shoes"}
                width={500}
                height={500}
                unoptimized={true}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
