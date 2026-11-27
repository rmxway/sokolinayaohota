import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/theme';
import { AppProvider } from '@/store/reducers';

const AllProviders = ({ children }: { children: ReactNode }) => (
	<AppProvider>
		<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
	</AppProvider>
);

export const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllProviders, ...options });
