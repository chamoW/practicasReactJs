module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile:false,
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            generators: true,
        },
    },
    extends: ["prettier"],
};
