import { client } from "@/app/lib/sanity";
import { IProduct, RelatedProdacts } from "@/types/ProductTypes";
import { groq } from "next-sanity";
import React from "react";
import "@/styles/pages/_details.scss";
import Details from "@/components/DetailsPage/Details";
import Slider from "@/components/Slider/Slider";

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

const getRelatedItemsQuery = `
  *[_type == "product" && category->name == 'Shoes'] {
    "mainImage": mainImage.asset->url,
    "slug": slug.current,
    name
  }`;

const getRelatedItemsQueries = () => {
  return client.fetch(groq`${getRelatedItemsQuery}`);
};

export const revalidate = 60;

export default async function ProductDetails({ params: { slug } }: Props) {
  const products: IProduct = await client.fetch(query, { slug });
  const relatedProducts: RelatedProdacts[] = await getRelatedItemsQueries();

  const [related] = (await Promise.allSettled([
    relatedProducts,
  ])) as unknown as RelatedProdacts[];

  const {
    brand,
    size,
    topMaterial,
    bottomMaterial,
    standart,
    model,
    protection,
    sole,
    desc,
  } = products?.description;

  return (
    <div className="details__container">
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
              <div className="standart">
                <span>Standart: </span>
                {standart}
              </div>
            ) : (
              <></>
            )}

            {protection ? (
              <div className="protection">
                <span>Qorunma Dərəcəsi: </span>
                {protection}
              </div>
            ) : (
              <></>
            )}

            {topMaterial ? (
              <div className="topMaterial">
                <span>Üst Material: </span>
                {topMaterial}
              </div>
            ) : (
              <></>
            )}

            {bottomMaterial ? (
              <div className="bottomMaterial">
                <span>Alt Metarial: </span>
                {bottomMaterial}
              </div>
            ) : (
              <></>
            )}

            {sole ? (
              <div className="sole">
                <span>İçlik: </span>
                {sole}
              </div>
            ) : (
              <></>
            )}

            {size ? (
              <div className="size">
                <span>Ölçü: </span>
                {size}
              </div>
            ) : (
              <></>
            )}

            {desc ? (
              <div className="desc">
                <span>Təsviri: </span>
                {desc}
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
        <Slider relatedItems={related} />
      </div>
    </div>
  );
}
