import { getMainPageData } from '@/lib/pageData';

import { ContentLayout, MainPageProps } from './content';

const getData = (): MainPageProps => {
	try {
		const data = getMainPageData();
		return { data };
	} catch (e) {
		return { error: e instanceof Error ? e.message : String(e) };
	}
};

export default function Page() {
	const resp = getData();

	return <ContentLayout {...resp} />;
}
