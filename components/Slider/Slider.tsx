"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/components/_slider.scss";
import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";
import { Navigation } from "swiper/modules";
import { RelatedProdacts } from "@/types/ProductTypes";
import { urlFor } from "@/app/lib/sanity";
import { useParams, usePathname } from "next/navigation";

interface Sirvan {
  relatedItems: RelatedProdacts;
}

export default function Slider({ relatedItems }: Sirvan) {
  const params = usePathname();
  const urlsArray = params.split("/");

  return (
    <div className="container__slider">
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {relatedItems?.value.map((item) => {
          return (
            <div className="slider__container" key={v4()}>
              {item.mainImage ? (
                <SwiperSlide key={v4()}>
                  <Link
                    href={`/${urlsArray.at(1)}/${item?.slug}`}
                    prefetch={true}
                  >
                    <Image
                      key={v4()}
                      src={urlFor(item?.mainImage).url()}
                      width={0}
                      height={200}
                      alt="productPic"
                      unoptimized={true}
                    />
                    <div className="card">
                      <div className="card__name">
                        <h4>{item.name}</h4>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}
