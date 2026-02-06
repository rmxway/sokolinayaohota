import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

const legacy = require('./.eslintrc.js');
const legacyWithoutNext = {
	...legacy,
	extends: legacy.extends.filter((e) => !e.includes('@next/next')),
};

export default [
	{
		ignores: [
			'**/node_modules/**',
			'.next/**',
			'out/**',
			'build/**',
			'next-env.d.ts',
			'.yarn/**',
			'.eslintrc.js',
			'eslint.config.mjs',
		],
	},
	...compat.config(legacyWithoutNext),
	{
		files: ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}'],
		plugins: {
			'@next/next': nextPlugin,
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			'@typescript-eslint/await-thenable': 'off',
		},
	},
	{
		files: ['.storybook/**/*.js'],
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
];
