import '@/public/assets/fonts/icofont/icofont.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useMemo, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';

import { HeaderBlock } from '@/components/Header';
import { AppContext, initialState, reducer } from '@/store/reducers';
import { defaultTheme, GlobalStyles } from '@/theme';

export const App = ({ Component, pageProps }: AppProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

	return (
		<AppContext.Provider {...{ value }}>
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

				<HeaderBlock />
				<Component {...pageProps} />
			</ThemeProvider>
		</AppContext.Provider>
	);
};

export default App;
