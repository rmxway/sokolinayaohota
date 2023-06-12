import { NextPage } from 'next';
import { lazy, Suspense } from 'react';

import {
	AdvantageType,
	GalleryImageType,
	MainSliderType,
	QuestionType,
} from '@/@types/types';
import { PageLoader } from '@/components/Layout';
import { fetchApi } from '@/services/variable';

const ContactsBlock = lazy(
	() => import('@/components/sections/main-page/ContactsBlock')
);
const DiscountBlock = lazy(
	() => import('@/components/sections/main-page/DiscountBlock')
);
const GalleryBlock = lazy(
	() => import('@/components/sections/main-page/GalleryBlock')
);
const PresentBanner = lazy(
	() => import('@/components/sections/main-page/PresentBanner')
);
const Questions = lazy(
	() => import('@/components/sections/main-page/Questions')
);
const SliderBlock = lazy(
	() => import('@/components/sections/main-page/SliderBlock')
);
const WhyAreWe = lazy(() => import('@/components/sections/main-page/WhyAreWe'));

type ResponseData = {
	faqs: QuestionType[];
	advantages: AdvantageType[];
	mainSlides: MainSliderType[];
	galleryImages: GalleryImageType[];
};

type MainPageProps = {
	data?: ResponseData | undefined;
	error?: string | undefined;
};

export const getServerSideProps = async (): Promise<{
	props: MainPageProps;
}> => {
	let errorMessage: string | undefined = '';

	const mainPageData = fetch(fetchApi('main-page-data'));

	const data = await mainPageData
		.then((resp) => resp.json())
		.catch((e) => {
			errorMessage = e.message;
		});

	return {
		props: {
			data,
			error: errorMessage,
		},
	};
};

export const MainPage: NextPage<MainPageProps> = ({ data, error }) => (
	<Suspense fallback={<PageLoader />}>
		<SliderBlock data={data?.mainSlides} {...{ error }} />
		<PresentBanner />
		<WhyAreWe data={data?.advantages} {...{ error }} />
		<GalleryBlock data={data?.galleryImages} {...{ error }} />
		<DiscountBlock />
		<Questions data={data?.faqs} {...{ error }} />
		<ContactsBlock />
	</Suspense>
);

export default MainPage;
