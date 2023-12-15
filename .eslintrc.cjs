module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "airbnb",
        "airbnb/hooks",
        "plugin:prettier/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh", "prettier"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "react/prop-types": "off",
        "import/prefer-default-export": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/anchor-is-valid": "off",
    },
};
