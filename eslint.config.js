// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  globalIgnores(["dist/", "eslint.config.js"]),
);
