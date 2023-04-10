import '@/public/assets/fonts/icofont/icofont.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { Navbar } from '@/components';
import { defaultTheme, GlobalStyles } from '@/theme';

export const App = ({ Component, pageProps }: AppProps) => (
	<ThemeProvider theme={defaultTheme}>
		<Head>
			<title>Соколиная охота</title>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<GlobalStyles />

		<Navbar />
		<Component {...pageProps} />
	</ThemeProvider>
);

export default App;
