import '../src/assets/fonts/icofont/icofont.scss';
import './fonts.scss';

import type { Preview } from '@storybook/react-vite';
import { ThemeProvider } from 'styled-components';

import { defaultTheme, GlobalStyles } from '../theme';
import { MemoryRouter } from 'storybook/internal/router';

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
				<MemoryRouter initialEntries={['/']}>
					<Story />
				</MemoryRouter>
			</ThemeProvider>
		),
	],
};

export default preview;
