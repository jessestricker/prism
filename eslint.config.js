// @ts-check

import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { globalIgnores } from "eslint/config";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const file = (path) => fileURLToPath(new URL(path, import.meta.url));

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  includeIgnoreFile(file(".gitignore")),
  globalIgnores(["eslint.config.js"]),
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: file("."),
      },
    },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    rules: {
      "@typescript-eslint/no-floating-promises": [
        "error",
        {
          allowForKnownSafeCalls: [
            {
              from: "package",
              package: "node:test",
              name: ["suite", "test"],
            },
          ],
        },
      ],
    },
  },
);
