export default {
  name: "carousel",
  type: "document",
  title: "Carousel",
  fields: [
    {
      name: "Carousel",
      title: "Carousel",
      type: "string",
      description: "Name of Carousel",
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
      name: "category",
      title: "Slider Categeory",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
  ],
};
