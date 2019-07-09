module.exports = {
  parser: "babel-eslint",
  extends: ["plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeature: {
      jsx: true,
      experimentalObjectRestSpread: true,
    }
  },

  env: {
    es6: true
  },
  plugins: ['react'],
  // rules: {
  //   "react/jsx-fragments": [1],
  // }
};
