import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {visionTool} from '@sanity/vision'
import schemas from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const config = defineConfig({
  name: "loure-illumina",
  title: "Loure Illumina",
  apiVersion: "2023-05-19",

  projectId: projectId,
  dataset: dataset,

  basePath: "/admin",
  plugins: [deskTool(),
    visionTool({
      // Note: These are both optional
      defaultApiVersion: 'v2021-10-21',
      defaultDataset: 'production',
    }),],
  schema: {
    types: schemas,
  },
});

export default config;
