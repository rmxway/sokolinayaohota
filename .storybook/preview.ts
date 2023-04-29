import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyles } from '../theme';
import '../public/assets/fonts/icofont/icofont.scss';
import './fonts.scss';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export const decorators = [
	withThemeFromJSXProvider({
		themes: {
			default: defaultTheme,
		},
		defaultTheme: 'default',
		Provider: ThemeProvider,
		GlobalStyles,
	}),
];

export default preview;
