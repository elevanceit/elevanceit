module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["commitlint-plugin-function-rules"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
    "subject-case": [
      2,
      "never",
      ["upper-case", "pascal-case", "start-case"],
      // ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 200],
    "function-rules/scope-enum": [
      2, // level: error
      "always",
      (parsed) => {
        if (parsed.scope && /^[A-Z]{2,4}-\d{4}$/.test(parsed.scope)) {
          return [true];
        }

        return [
          false,
          `Scope must be in format "AB-1234" or "ABC-1234" or "ABCD-1234"`,
        ];
      },
    ],
  },
};
