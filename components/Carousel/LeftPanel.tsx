import React from "react";
import "@/styles/components/_leftpanel.scss";
import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import { groq } from "next-sanity";
import { IProduct } from "@/types/Product";
import Link from "next/link";

const getMuganQuery = `
                  *[_type == "product" && category->name == 'Shoes' && name == "Muğan"] {
                    "mainImage": mainImage.asset->url,
                    "slug": slug.current,
                  }`;

const getArazQuery = `
                  *[_type == "product" && category->name == 'Shoes' && name == "Araz"] {
                    "mainImage": mainImage.asset->url,
                    "slug": slug.current
                  }`;

const getMurovQuery = `
                  *[_type == "product" && category->name == 'Shoes' && name == "Murov"] {
                    "mainImage": mainImage.asset->url,
                    "slug": slug.current
                  }`;

const getMuganItems = () => {
  return client.fetch(groq`${getMuganQuery}`);
};

const getArazItems = () => {
  return client.fetch(groq`${getArazQuery}`);
};

const getMurovItems = () => {
  return client.fetch(groq`${getMurovQuery}`);
};

const LeftPanel = async () => {
  const muganData: IProduct[] = await getMuganItems();
  const arazData: IProduct[] = await getArazItems();
  const murovData: IProduct[] = await getMurovItems();

  const [mugan, araz, murov] = await Promise.allSettled([
    muganData,
    arazData,
    murovData,
  ]);

  return (
    <div className="leftpanel__container">
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

export default LeftPanel;
