import '../public/assets/fonts/icofont/icofont.scss';
import './fonts.scss';

import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme, GlobalStyles } from '../theme';

const preview: Preview = {
	tags: ['autodocs'],
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => (
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Story />
			</ThemeProvider>
		),
	],
};

export default preview;
