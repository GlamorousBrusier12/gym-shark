// loadSchema.js

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { mergeTypeDefs } from "@graphql-tools/merge";

// Construct __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to load schema files
const loadSchemaFiles = (directory) => {
  const files = fs.readdirSync(directory);
  const schemas = files.map((file) => {
    const filePath = path.join(directory, file);
    return fs.readFileSync(filePath, { encoding: "utf8" });
  });
  return schemas;
};

const querySchemas = loadSchemaFiles(path.join(__dirname, "./queryTypes"));
const mutationSchemas = loadSchemaFiles(
  path.join(__dirname, "./mutationTypes")
);

export const typeDefs = mergeTypeDefs([...querySchemas, ...mutationSchemas]);
