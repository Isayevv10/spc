export default {
  name: "product",
  type: "document",
  title: "Product",
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
          name: "brand",
          title: "Brend",
          type: "string",
        },
        {
          name: "model",
          title: "Model",
          type: "string",
        },
        {
          name: "standart",
          title: "Standart",
          type: "string",
        },
        {
          name: "topMaterial",
          title: "Üst material",
          type: "string",
        },
        {
          name: "bottomMaterial",
          title: "Alt material",
          type: "string",
        },
        {
          name: "sole",
          title: "İçlik",
          type: "string",
        },
        {
          name: "protection",
          title: "Qorunma dərəcəsi",
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
