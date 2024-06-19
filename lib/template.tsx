'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { HeaderBlock } from '@/components/Header';
import { AppProvider } from '@/store/reducers';
import { defaultTheme, GlobalStyles } from '@/theme';

export type TemplateProps = {
	children?: ReactNode | undefined;
};

export const Template = ({ children }: TemplateProps) => (
	<div>
		<AppProvider>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<HeaderBlock />
				{children}
			</ThemeProvider>
		</AppProvider>
	</div>
);
