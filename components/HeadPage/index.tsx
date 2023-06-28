import Head from 'next/head';

export const HeadPage = ({ title }: { title?: string }) => (
	<Head>
		<title>Соколиная охота{title && ` – ${title}`}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</Head>
);
export default HeadPage;
