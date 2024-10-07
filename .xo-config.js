module.exports = {
  prettier: true,
  space: true,
  globals: [
    // chai/mocha
    "after",
    "afterEach",
    "before",
    "beforeEach",
    "describe",
    "expect",
    "it",
  ],
  rules: {
    "import/extensions": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        "allowList": {
          "dst": true,
        }
      }
    ]
  }
};
