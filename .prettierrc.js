module.exports = {
  proseWrap: "always",
  tailwindConfig: "./tailwind.config.ts",
  importOrder: [
    "^server-only$",
    "^react(.*)$",
    "^next(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^[./](?!.*\\.css$)",
    "^[./].*\\.css$",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators"],
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-prisma",
    "prettier-plugin-xml",
    // "prettier-plugin-organize-imports",
    "@trivago/prettier-plugin-sort-imports",
  ],
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 120,
  semi: false,
  overrides: [
    {
      files: "*.svg",
      options: {
        parser: "html",
      },
    },
  ],
}
