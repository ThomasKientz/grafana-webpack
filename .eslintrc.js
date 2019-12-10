module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    _: "readonly",
    ARGS: "readonly",
    window: "readonly",
    document: "readonly",
    $: "readonly",
    jQuery: "readonly",
    moment: "readonly",
    kbn: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-unused-vars": "warn"
  }
};
