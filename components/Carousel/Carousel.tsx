"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/app/lib/sanity";
import { groq } from "next-sanity";
import { IImages } from "@/types/ProductTypes";
import CarouselSwiper from "./CarouselSwiper";

const query: string = groq`
                    *[_type == "carousel"] {
                        "images":images,
                    }`;

const getCaoruselItems = () => {
  return client.fetch(
    groq`${query}`,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
};

export default function Carousel() {
  const [pics, setPics] = useState<IImages[]>();

  async function fetchPics() {
    const pics: IImages[] = await getCaoruselItems();
    setPics(pics);
  }

  useEffect(() => {
    fetchPics();
  }, []);

  if (!pics) {
    return (
      <div className="loading">
        <div className="spin"></div>
      </div>
    );
  }

  return (
    <div className="container__carousel">
      <CarouselSwiper pics={pics} />
    </div>
  );
}
