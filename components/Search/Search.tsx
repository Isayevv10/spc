"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
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

  //   useOutsideClick({
  //     ref,
  //     handler: () => {
  //       setIsModalOpen(false);
  //       setProducts([]);
  //     },
  //   });

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
      }
    }, 1300);

    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "right",
        marginRight: "140px",
        border: "3px solid #DAD6D1",
        outline: "none",
        backgroundColor: "#5c5a5a",
      }}
    >
      <div ref={ref}>
        <input
          type="text"
          placeholder="Axtar..."
          value={searchText}
          onClick={() => setIsModalOpen(true)}
          onChange={(e) => setSearchText(e.target.value)}
        />

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
  );
};

interface SearchedProductsListProps {
  products?: IProduct[];
}

const SearchedProductsList = ({ products }: SearchedProductsListProps) => {
  return (
    <>
      {products?.map((product) => (
        <Link key={product.id} href={`/shoes/${product.slug}`}>
          <div>
            <div>
              <Image
                alt="salam"
                src={urlFor(product?.image[0]).url()}
                width={25}
                height={25}
              />
              <p>{product.name}</p>
            </div>
            <div>{/* <p>{product?.category?.name}</p> */}</div>
          </div>
        </Link>
      ))}
    </>
  );
};
