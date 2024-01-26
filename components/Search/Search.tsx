"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "@/styles/components/_search.scss";
import { groq } from "next-sanity";
import { IProduct } from "@/types/ProductTypes";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";

const query: string = groq`
    *[_type == "product" && (name match $searchText) ] {
      "id": _id,
      "slug": slug.current,
      "image":images,
      name
    }
`;

export const Search = () => {
  const ref = useRef<any>();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [products, setProducts] = useState<IProduct[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    setIsLoading(true);

    const products: IProduct[] = await client.fetch(query, {
      searchText: `*${searchText}*`,
    });

    setIsLoading(false);
    setProducts(products);
  };

  useEffect(() => {
    const timeout: number = window.setTimeout(() => {
      if (searchText.trim().length >= 2) {
        fetchProducts();
      } else {
        setIsModalOpen(false);
      }
    }, 1300);

    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    <div className="search">
      <div ref={ref}>
        <input
          type="search"
          placeholder="Axtar..."
          value={searchText}
          onClick={() => setIsModalOpen(true)}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="dropdown-content">
          {isModalOpen && (
            <div>
              {products?.length === 0 ? (
                isLoading ? (
                  <>Loading...</>
                ) : (
                  <>No Products Found</>
                )
              ) : (
                <SearchedProductsList products={products} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface SearchedProductsListProps {
  products?: IProduct[];
}

const SearchedProductsList = ({ products }: SearchedProductsListProps) => {
  return (
    <>
      {products?.map((product) => (
        <div className="search__product" key={product.id}>
          <Link key={product.id} href={`/shoes/${product.slug}`}>
            <div className="search__product--img">
              <Image
                alt="productPic"
                src={urlFor(product?.image[0]).url()}
                width={42}
                height={42}
                unoptimized={true}
              />
            </div>
            <p className="search__product--name">{product.name}</p>
          </Link>
        </div>
      ))}
    </>
  );
};
