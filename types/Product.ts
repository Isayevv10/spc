export interface IProduct {
  name: string;
  image: string[];
  description: string;
  price: number;
  id: string;
  slug: string;
  mainImage: string;
}

export interface SpecificProd {
  status: string;
  value: [
    {
      mainImage: string;
      slug: string;
      name: string;
    }
  ];
}
