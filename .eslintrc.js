module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["airbnb","prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": [0, {"vars": "all", "args": "after-used"}],
    "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
    "react/no-multi-comp":0,
    "react/destructuring-assignment":0,
    "prefer-destructuring":0
  }
};
