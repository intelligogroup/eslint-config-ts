module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    parserOptions: {
        sourceType: "module"
    },
    rules: {
        // all should be errors
        "@typescript-eslint/no-use-before-define": 1,
        "@typescript-eslint/camelcase": 1,
        "@typescript-eslint/no-var-requires": 1,
        "no-inner-declarations": 1,
        "require-atomic-updates": 1,
        // all should be errors
        
        "@typescript-eslint/no-namespace": 0,
    }
}
