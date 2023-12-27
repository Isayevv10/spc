import React from "react";
import "@/styles/pages/_products.scss";
import Link from "next/link";
import { client } from "../lib/sanity";
import { groq } from "next-sanity";
import { IProduct } from "@/types/Product";

const getAllProductsQueries = `
                  *[_type == "product" && category->name == 'Shoes'] {
                    name,
                    "id": _id,
                    description,
                    images,
                    price,
                    "slug": slug.current
                  }`;

const getAllProductsItems = () => {
  return client.fetch(groq`${getAllProductsQueries}`);
};

export const revalidate = 60;

export default async function Products() {
  const allDatas: IProduct[] = await getAllProductsItems();

  return (
    <div className="products">
      <div className="products__shoes">
        <h4>Ayaqqabılar</h4>
        <div>
          {allDatas?.map((item) => {
            return (
              <ul key={item.id}>
                <li style={{ cursor: "pointer" }}>
                  <Link href={`/products/${item?.slug}`}>{item?.name}</Link>
                </li>
              </ul>
            );
          })}
        </div>
      </div>

      <div className="products__protection">
        <h4>Fərdi mühafizə vasitələri</h4>
        <ul style={{ fontSize: "15px" }}>
          <li>
            Baş üçün qorunma vasitələri
            <ul style={{ marginLeft: "0.7em" }}>
              <li>Dəbilqələr</li>
              <li>Qulaqlıqlar</li>
              <li>Qulaq tıxacları</li>
            </ul>
          </li>
          <li>
            Üz üçün qorunma vasitələri
            <ul style={{ marginLeft: "0.7em" }}>
              <li>Qoruyucu sipər</li>
              <li>Qoruyucu maskalar</li>
              <li>Qaynaqçı maskaları</li>
              <li>Qoruyucu eynəklər</li>
            </ul>
          </li>
          <li>
            Əl üçün qorunma vasitələri
            <ul style={{ marginLeft: "0.7em" }}>
              <li>Əlcəklər</li>
            </ul>
          </li>
          <li>
            Təhlükəsizlik vasitələri
            <ul style={{ marginLeft: "0.7em" }}>
              <li>Təhlükəsizlik kəmərləri</li>
              <li> Önlüklər</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="products__costume">
        <h4>Xüsusi geyimlər</h4>
        <ul>
          <li>
            <Link href="#">İşıldarlı jilet</Link>
          </li>
          <li>
            <Link href="#">Birdəfəlik kombinezon</Link>
          </li>
          <li>
            <Link href="#">İşıldarlı kombinezon</Link>
          </li>
          <li>
            <Link href="#">Xidməti geyim</Link>
          </li>
          <li>
            <Link href="#">Gödəkçə</Link>
          </li>
          <li>
            <Link href="#">Qadın üçün xidməti geyim</Link>
          </li>
          <li>
            <Link href="#">Qolsuz işıldarlı jilet</Link>
          </li>
          <li>
            <Link href="#">Papaq</Link>
          </li>
          <li>
            <Link href="#">Uzunqol polo</Link>
          </li>
          <li>
            <Link href="#">Qısaqol polo</Link>
          </li>
          <li>
            <Link href="#">Yağmurluq</Link>
          </li>
          <li>
            <Link href="#">Önlük</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
