export interface IDescription {
  brand: string;
  model: string;
  standart: string;
  bottomMaterial: string;
  topMaterial: string;
  sole: string;
  protection: string;
  size: string;
  weight: string;
  material: string;
}

export interface IProduct {
  name: string;
  image: string[];
  description: IDescription;
  id: string;
  slug: string;
  mainImage: string;
}

export interface IImages {
  map(
    arg0: (item: any, index: number) => import("react").JSX.Element
  ): import("react").ReactNode | Iterable<import("react").ReactNode>;
  image: string[];
}

export interface RelatedProdacts {
  status: string;
  value: [
    {
      mainImage: string;
      slug: string;
      name: string;
    }
  ];
}
