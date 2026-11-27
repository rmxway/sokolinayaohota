import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import { AppProvider } from '@/store/reducers';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyles } from '@/theme';
import HeaderBlock from '@/components/Header';
import { Flexbox } from '@/components/Layout';
import { FooterBlock } from '@/components/Footer';

import '@/src/assets/fonts/icofont/icofont.scss';
import { baseName } from '@/services/constants';

export function meta() {
	return [
		{
			title: 'Соколиная охота',
		},
	];
}

export const links: Route.LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&family=Ledger&family=Yanone+Kaffeesatz:wght@200..700&family=Zen+Kaku+Gothic+Antique&display=swap',
	},
	{
		rel: 'icon',
		href: baseName + 'assets/favicon.ico',
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" data-scroll-behavior="smooth">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<AppProvider>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<HeaderBlock />
				<Flexbox $direction="column" $w100 $noWrap className="main">
					<Outlet />
				</Flexbox>
				<FooterBlock />
			</ThemeProvider>
		</AppProvider>
	);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		// 	details =
		// 		error.status === 404
		// 			? 'The requested page could not be found.'
		// 			: error.statusText || details;
		// } else if (import.meta.env.DEV && error && error instanceof Error) {
		// 	details = error.message;
		// 	stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
