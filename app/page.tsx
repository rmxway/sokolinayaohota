import { apiUrl } from '@/services/variable';

import { ContentLayout, MainPageProps } from './content';

const fetchData = async (): Promise<MainPageProps> => {
	let errorMessage: string | undefined = '';

	const mainPageData = fetch(apiUrl('main-page-data'));
	const data = await mainPageData
		.then((res) => res?.json())
		.catch((e) => {
			errorMessage = e.message;
		});

	return {
		data,
		error: errorMessage,
	};
};

export default async function Page() {
	const resp = await fetchData();

	return <ContentLayout {...resp} />;
}
