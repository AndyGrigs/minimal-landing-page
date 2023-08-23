module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": '@typescript-eslint/parser',
    "plugins": ['@typescript-eslint'],
    "extends": [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{ts,tsx}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "settings": {
        "react": {
            "version": "detect",
        },
    },
    "plugins": [
        "react"
    ],
    "rules": {

    }
}
