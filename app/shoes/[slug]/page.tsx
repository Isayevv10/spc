import { client } from "@/app/lib/sanity";
import { IProduct, SpecificProd } from "@/types/ProductTypes";
import { groq } from "next-sanity";
import React from "react";
import "@/styles/pages/_details.scss";
import "@/styles/components/_details.scss";
import Details from "@/components/DetailsPage/Details";
import Slider from "@/components/Slider/Slider";
import { Search } from "@/components/Search/Search";

type Props = {
  params: {
    slug: string;
  };
};

const query: string = groq`
      *[_type == "product" && slug.current == $slug][0] {
        name,
        description,
        "image":images,
        "id": _id
      }
  `;

const getSirvanQuery = `
  *[_type == "product" && category->name == 'Shoes'] {
    "mainImage": mainImage.asset->url,
    "slug": slug.current,
    name
  }`;

const getSirvanItems = () => {
  return client.fetch(groq`${getSirvanQuery}`);
};

export const revalidate = 60;

export default async function ProductDetails({ params: { slug } }: Props) {
  const products: IProduct = await client.fetch(query, { slug });
  const sirvanData: SpecificProd[] = await getSirvanItems();

  const [sirvan, jupiter, herbi] = (await Promise.allSettled([
    sirvanData,
  ])) as unknown as SpecificProd[];

  const {
    brand,
    size,
    topMaterial,
    bottomMaterial,
    standart,
    model,
    protection,
    sole,
  } = products?.description;

  return (
    <div className="details__container">
      <Search />

      <div className="details__info">
        <div className="details__info--item-1">
          <Details products={products} />
        </div>
        <div className="details__info--item-2">
          <div className="details__info--item-2-name">{products?.name}</div>
          <div className="details__info--item-2-desc">
            {brand ? (
              <div>
                <span>Brend: </span>
                {brand}
              </div>
            ) : (
              <></>
            )}

            {model ? (
              <div>
                <span>Model: </span>
                {model}
              </div>
            ) : (
              <></>
            )}

            {standart ? (
              <div>
                <span>Standart: </span>
                {standart}
              </div>
            ) : (
              <></>
            )}

            {protection ? (
              <div>
                <span>Qorunma Dərəcəsi: </span>
                {protection}
              </div>
            ) : (
              <></>
            )}

            {topMaterial ? (
              <div>
                <span>Üst Material: </span>
                {topMaterial}
              </div>
            ) : (
              <></>
            )}

            {bottomMaterial ? (
              <div>
                <span>Alt Metarial: </span>
                {bottomMaterial}
              </div>
            ) : (
              <></>
            )}

            {sole ? (
              <div>
                <span>İçlik: </span>
                {sole}
              </div>
            ) : (
              <></>
            )}

            {size ? (
              <div>
                <span>Ölçü: </span>
                {size}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <div className="title">
        <p>Əlaqəli Məhsullar</p>
      </div>

      <div className="related__products">
        <Slider sirvan={sirvan} herbi={herbi} jupiter={jupiter} />
      </div>
    </div>
  );
}
