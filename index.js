module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
        // all should be errors
        "@typescript-eslint/no-namespace": 1,
        "@typescript-eslint/no-use-before-define": 1,
        "@typescript-eslint/camelcase": 1,
        "@typescript-eslint/no-var-requires": 1,
        "no-inner-declarations": 1,
        "require-atomic-updates": 1,
        "node/no-extraneous-require": ["error", {
            "allowModules": ['database', 'infra', 'scheduler', 'nlp', 'utility-adapter', 'infra_api', 'server-health']
        }],
        // all should be errors
    }
}
