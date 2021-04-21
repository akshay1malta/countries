module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console":"warn"
    },
    "overrides": [
        {
          "files": ["index.test.js", "functions.test.js"],
          "rules": {
            "no-undef": "off"
          }
        }
      ]
};
