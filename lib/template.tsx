'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { HeaderBlock } from '@/components/Header';
import { Flexbox } from '@/components/Layout';
import { AppProvider } from '@/store/reducers';
import { defaultTheme, GlobalStyles } from '@/theme';

export type TemplateProps = {
	children?: ReactNode | undefined;
};

export const Template = ({ children }: TemplateProps) => {
	const pathname = usePathname();
	const isContactsPage = pathname === '/contacts';

	return (
		<AppProvider>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Flexbox
					$direction="column"
					$w100
					$noWrap
					$h100vh={isContactsPage}
				>
					<HeaderBlock />
					{children}
				</Flexbox>
			</ThemeProvider>
		</AppProvider>
	);
};
