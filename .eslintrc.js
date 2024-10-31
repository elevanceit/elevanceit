module.exports = {
  extends: [
    "next",
    "eslint:recommended",
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@next/next/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    // "plugin:sonarjs/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "prettier",
    // "sonarjs",
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Not needed with Next.js
    "prettier/prettier": "error",
    "@typescript-eslint/no-empty-object-type": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the version of React
    },
  },
}
