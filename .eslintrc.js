module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
  },
};
