module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:react/recommended",
    "plugin:import/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "import",
  ],
  rules: {
    //  Common
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-console": ["warn", {allow: ["warn", "error"]}],
    "no-extra-parens": ["error", "all", {
      conditionalAssign: false,
      returnAssign: false,
      nestedBinaryExpressions: false,
      ignoreJSX: "multi-line",
    }],
    "no-loss-of-precision": "error",
    "no-promise-executor-return": "error",
    "no-template-curly-in-string": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-optional-chaining": ["error", {disallowArithmeticOperators: true}],
    "no-useless-backreference": "error",
    "require-atomic-updates": "error",
    "no-return-assign": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-spacing": "error",
    "no-confusing-arrow": ["error", {allowParens: false}],
    "no-duplicate-imports": ["error", {includeExports: true}],
    "no-var": "error",
    "template-curly-spacing": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "never"],
    "block-spacing": "error",
    "keyword-spacing": ["error", {before: true, after: true}],
    "key-spacing": ["error", {beforeColon: false, afterColon: true}],
    "func-call-spacing": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "comma-spacing": ["error", {before: false, after: true}],
    "semi-spacing": "error",
    "no-plusplus": ["error", {allowForLoopAfterthoughts: true}],
    "import/no-extraneous-dependencies": ["error", {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    }],
    "no-unused-vars": "warn",

    //  React
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, {extensions: [".js", ".jsx"]}],
    "react/jsx-props-no-spreading": "off",
  },
};
