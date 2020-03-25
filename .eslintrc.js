module.exports = {
    settings: {
        'import/resolver': {
            typescript: {}
        }
    },
    extends: [
        'plugin:prettier/recommended',
        'plugin:sonarjs/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', 'sonarjs', '@typescript-eslint', 'import'],

    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'import/no-unresolved': 'error'
    },

    env: {
        es6: true,
        node: true
    },

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true
        }
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            },
            typescript: {}
        }
    }
};
