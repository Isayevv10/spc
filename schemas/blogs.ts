export default {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
