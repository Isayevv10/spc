export default {
  name: "specialClothes",
  type: "document",
  title: "Special Clothes",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of Product",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "images",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "object",
      fields: [
        {
          name: "weight",
          title: "Çəki",
          type: "string",
        },
        {
          name: "material",
          title: "Material",
          type: "string",
        },
        {
          name: "standart",
          title: "Standart",
          type: "string",
        },
        {
          name: "size",
          title: "Ölçü",
          type: "string",
        },
        {
          name: "desc",
          title: "Təsviri",
          type: "string",
        },
      ],
    },
    {
      name: "category",
      title: "Product Categeory",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
  ],
};
