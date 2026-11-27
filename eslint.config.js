// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginStorybook from 'eslint-plugin-storybook';

export default [{
    ignores: [
        '**/node_modules/**',
        '**/build/**',
        '**/.react-router/**',
        './storybook-static',
    ],
}, {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
        globals: globals.browser,
    },
    rules: {
        ...js.configs.recommended.rules,
    },
}, {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
        ecmaVersion: 'latest',
        globals: {
            ...globals.mocha,
            ...globals.vitest,
            ...globals.browser,
        },
        parser: tsParser,
        parserOptions: {
            sourceType: 'module',
        },
    },
    settings: {
        'import/resolver': {
            typescript: {},
            node: {
                extensions: ['.ts', '.tsx', '.js'],
            },
        },
        react: { version: 'detect' },
    },
    plugins: {
        '@typescript-eslint': tseslint,
        react: eslintPluginReact,
        'react-hooks': eslintPluginReactHooks,
        'react-refresh': eslintPluginReactRefresh,
        'storybook': eslintPluginStorybook,
    },
    rules: {
        // React-правила поверх рекомендуемых от typescript-eslint
        ...tseslint.configs.recommended.rules,
        ...eslintPluginReact.configs.recommended.rules,
        ...eslintPluginReact.configs['jsx-runtime'].rules,
        ...eslintPluginReactHooks.configs.recommended.rules,

        // Твои кастомные исключения
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-components': [
            'off',
            { allowConstantExport: true },
        ],
        'react/prop-types': 'off', // в TS не нужны
        'react/display-name': 'off',
    },
}, ...storybook.configs["flat/recommended"]];
