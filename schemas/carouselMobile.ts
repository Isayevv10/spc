export default {
  name: "carouselMobile",
  type: "document",
  title: "Carousel Mobile",
  fields: [
    {
      name: "carouselMobile",
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
