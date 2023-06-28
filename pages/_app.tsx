import '@/public/assets/fonts/icofont/icofont.scss';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { HeaderBlock } from '@/components/Header';
import { HeadPage } from '@/components/HeadPage';
import { navbarItems } from '@/mock/navbar';
import { AppProvider } from '@/store/reducers';
import { defaultTheme, GlobalStyles } from '@/theme';

export const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();
	const [title, setTitle] = useState('');

	useEffect(() => {
		const navbarItem = navbarItems.find(
			(item) => item.url === router.asPath
		);
		if (navbarItem) setTitle(navbarItem?.title);
	}, [router]);

	return (
		<AppProvider>
			<ThemeProvider theme={defaultTheme}>
				<HeadPage {...{ title }} />
				<GlobalStyles />

				<HeaderBlock />
				<Component {...pageProps} />
			</ThemeProvider>
		</AppProvider>
	);
};

export default App;
