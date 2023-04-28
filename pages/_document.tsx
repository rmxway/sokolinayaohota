import { Head, Html, Main, NextScript } from 'next/document';

export const Document = () => (
	<Html lang="en">
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="use-credentials"
			/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Ledger&family=Yanone+Kaffeesatz:wght@500;600&family=Zen+Kaku+Gothic+Antique:wght@300;500&display=swap"
			/>
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);

export default Document;
