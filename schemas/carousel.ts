export default {
  name: "carousel",
  type: "document",
  title: "Carousel",
  fields: [
    {
      name: "carousel",
      title: "Carousel",
      type: "string",
      description: "Name of Carousel",
    },
    {
      name: "images",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
