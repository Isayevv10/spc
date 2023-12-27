import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { Config, StudioNavbar } from "sanity";
import { schemaTypes } from "./schemas";

export const config: Config = {
  name: "default",
  title: "createIndustry",
  projectId: "cc0u8vfi",
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
};
