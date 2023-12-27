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
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
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
