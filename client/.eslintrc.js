module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react-hooks"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to", "hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "jsx-a11y/click-events-have-key-events": 0
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    }
  }
};
