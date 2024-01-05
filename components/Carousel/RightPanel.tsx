import React from "react";
import "@/styles/components/_rightpanel.scss";
import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import { groq } from "next-sanity";
import { IProduct } from "@/types/Product";
import Link from "next/link";

const getSirvanQuery = `
                  *[_type == "product" && category->name == 'Shoes' && name == "Şirvan"] {
                    "mainImage": mainImage.asset->url,
                    "slug": slug.current
                  }`;

const getJupiter101RQuery = `
                  *[_type == "product" && category->name == 'Shoes' && name == "Jupiter 101R"] {
                    "mainImage": mainImage.asset->url,
                    "slug": slug.current
                  }`;

const getHerbiQuery = `
                  *[_type == "product" && category->name == 'Shoes' && name == "Hərbi çəkmə"] {
                    "mainImage": mainImage.asset->url,
                    "slug": slug.current
                  }`;

const getSirvanItems = () => {
  return client.fetch(groq`${getSirvanQuery}`);
};

const getJupiter101RItems = () => {
  return client.fetch(groq`${getJupiter101RQuery}`);
};

const getHerbiItems = () => {
  return client.fetch(groq`${getHerbiQuery}`);
};

const RightPanel = async () => {
  const muganData: IProduct[] = await getSirvanItems();
  const arazData: IProduct[] = await getJupiter101RItems();
  const murovData: IProduct[] = await getHerbiItems();

  const [mugan, araz, murov] = await Promise.allSettled([
    muganData,
    arazData,
    murovData,
  ]);

  return (
    <div className="rightpanel__container">
      <div>
        {araz.status == "fulfilled"
          ? araz.value?.map((item, index) => {
              return (
                <Link href={`/shoes/${item?.slug}`}>
                  <Image
                    key={index}
                    src={urlFor(item?.mainImage).url()}
                    width={160}
                    height={160}
                    alt="productPic"
                    unoptimized={true}
                  />
                </Link>
              );
            })
          : "Loading.."}
      </div>
      <div>
        {mugan.status == "fulfilled"
          ? mugan.value?.map((item, index) => {
              return (
                <Link href={`/shoes/${item?.slug}`}>
                  <Image
                    key={index}
                    src={urlFor(item?.mainImage).url()}
                    width={160}
                    height={160}
                    alt="productPic"
                    unoptimized={true}
                  />
                </Link>
              );
            })
          : "Loadong.."}
      </div>
      <div>
        {murov.status == "fulfilled"
          ? murov.value?.map((item, index) => {
              return (
                <Link href={`/shoes/${item?.slug}`}>
                  <Image
                    key={index}
                    src={urlFor(item?.mainImage).url()}
                    width={160}
                    height={160}
                    alt="productPic"
                    unoptimized={true}
                  />
                </Link>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
};

export default RightPanel;
