"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/components/_carousel.scss";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

export default function App() {
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
        <SwiperSlide>
          <Image
            src="/images/shoes10.jpg"
            alt="img1"
            width={0}
            height={0}
            sizes="160vw"
            unoptimized={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/shoes3.png"
            alt="img4"
            width={0}
            height={0}
            sizes="160vw"
            unoptimized={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/shoes5.jpeg"
            alt="img2"
            width={0}
            height={0}
            sizes="160vw"
            unoptimized={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/shoes3.png"
            alt="img4"
            width={0}
            height={0}
            sizes="160vw"
            unoptimized={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/shoes6.jpeg"
            alt="img4"
            width={0}
            height={0}
            sizes="160vw"
            unoptimized={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/shoes2.png"
            alt="img2"
            width={0}
            height={0}
            sizes="160vw"
            unoptimized={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/shoes9.jpg"
            alt="img4"
            width={0}
            height={0}
            sizes="160vw"
            unoptimized={true}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
