export interface IDescription {
  brand: string;
  model: string;
  standart: string;
  bottomMaterial: string;
  topMaterial: string;
  sole: string;
  protection: string;
  size: string;
}

export interface IProduct {
  name: string;
  image: string[];
  description: IDescription;
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
