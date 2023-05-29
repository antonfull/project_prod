module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:i18next/recommended", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "i18next/no-literal-string": ["error", {
      markupOnly: true,
      ignoreAttribute: ["data-testid", "to"]
    }]
  },
  overrides: [{
    files: ["**/src/**/*.test.{ts,tsx}"],
    rules: {
      "i18next/no-literal-string": 0
    }
  }]
};