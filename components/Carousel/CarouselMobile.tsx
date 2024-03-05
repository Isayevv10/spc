"use client";

import { client } from "@/app/lib/sanity";
import { IImages } from "@/types/ProductTypes";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import CarouselSwiper from "./CarouselSwiper";

const query: string = groq`
                    *[_type == "carouselMobile"] {
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

export default function Smaller() {
  const [pics, setPics] = useState<IImages[]>();

  async function fetchPics() {
    const pics: IImages[] = await getCaoruselItems();
    setPics(pics);
  }

  useEffect(() => {
    fetchPics();
  }, []);
  console.log(pics);

  if (!pics) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container__carousel">
      <CarouselSwiper pics={pics} />
    </div>
  );
}
