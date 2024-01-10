import { client } from "@/app/lib/sanity";
import { IProduct, SpecificProd } from "@/types/Product";
import { groq } from "next-sanity";
import React from "react";
import "@/styles/pages/_details.scss";
import "@/styles/components/_details.scss";
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
        price,
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

  // const getJupiter101RQuery = `
  // *[_type == "product" && category->name == 'Shoes' && name == "Jupiter 101R"] {
  //   "mainImage": mainImage.asset->url,
  //   "slug": slug.current
  // }`;

  // const getHerbiQuery = `
  // *[_type == "product" && category->name == 'Shoes' && name == "Hərbi çəkmə"] {
  //   "mainImage": mainImage.asset->url,
  //   "slug": slug.current
  // }`;

  // const getJupiter101RItems = () => {
  //   return client.fetch(groq`${getJupiter101RQuery}`);
  // };

  // const getHerbiItems = () => {
  //   return client.fetch(groq`${getHerbiQuery}`);
  // };

  // const jupiterData: SpecificProd[] = await getJupiter101RItems();
  // const herbiData: SpecificProd[] = await getHerbiItems();

  const [sirvan, jupiter, herbi] = (await Promise.allSettled([
    sirvanData,
    // jupiterData,
    // herbiData,
  ])) as unknown as SpecificProd[];

  return (
    <div className="details__container">
      <div className="details__info">
        <div className="details__info--item-1">
          <Details products={products} />
        </div>
        <div className="details__info--item-2">
          <div className="details__info--item-2-name">{products?.name}</div>
          <div className="details__info--item-2-desc">
            <pre>{products?.description}</pre>
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
