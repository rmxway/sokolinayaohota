import Head from 'next/head';

import { navbarItems } from '@/mock/navbar';

export const getTitle = (resolvedUrl: string) => {
	const navbarItem = navbarItems.find((item) => item.url === resolvedUrl);

	let title = '';

	if (navbarItem) {
		title = navbarItem.title !== undefined ? navbarItem.title : '';
	}

	return `Соколиная охота${title && ` | ${title}`}`;
};

type HeadPageProps = {
	title: string | undefined;
};

export const HeadPage = ({ title }: HeadPageProps) => (
	<Head>
		<title>{title}</title>
	</Head>
);

export default HeadPage;
