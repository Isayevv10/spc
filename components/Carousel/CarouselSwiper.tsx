"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/components/_carousel.scss";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { v4 } from "uuid";
import { IImages } from "@/types/ProductTypes";

interface IImagesProps {
  pics: IImages[];
}

const CarouselSwiper = ({ pics }: IImagesProps) => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3900,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {pics[0]?.images?.map((item: any, index: number) => {
          return (
            <SwiperSlide key={v4()}>
              <Image
                src={urlFor(item)!.url()!}
                alt={"shoes"}
                unoptimized={true}
                fill
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CarouselSwiper;
