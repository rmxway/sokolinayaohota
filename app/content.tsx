'use client';

import { lazy, Suspense } from 'react';

import {
	AdvantageType,
	GalleryImageType,
	MainSliderType,
	QuestionType,
} from '@/@types/types';
import { PageLoader } from '@/components/ui';

const InfoBlock = lazy(
	() => import('@/components/sections/main-page/InfoBlock'),
);
const SliderBlock = lazy(
	() => import('@/components/sections/main-page/SliderBlock'),
);
const PresentBanner = lazy(
	() => import('@/components/sections/main-page/PresentBanner'),
);
const DiscountBlock = lazy(
	() => import('@/components/sections/main-page/DiscountBlock'),
);
const GalleryBlock = lazy(
	() => import('@/components/sections/main-page/GalleryBlock'),
);
const Questions = lazy(
	() => import('@/components/sections/main-page/Questions'),
);
const WhyAreWe = lazy(() => import('@/components/sections/main-page/WhyAreWe'));
const ContactsBlock = lazy(
	() => import('@/components/sections/main-page/ContactsBlock'),
);

export interface ResponseData {
	faqs: QuestionType[];
	advantages: AdvantageType[];
	mainSlides: MainSliderType[];
	galleryImages: GalleryImageType[];
}
export interface MainPageProps {
	data?: ResponseData | undefined;
	error?: string | undefined;
}

export const ContentLayout = (props: MainPageProps) => {
	const { data, error } = props;

	return (
		<Suspense fallback={<PageLoader />}>
			<InfoBlock />
			<SliderBlock data={data?.mainSlides} {...{ error }} />
			<PresentBanner />
			<WhyAreWe data={data?.advantages} {...{ error }} />
			<GalleryBlock data={data?.galleryImages} {...{ error }} />
			<DiscountBlock />
			<Questions data={data?.faqs} {...{ error }} />
			<ContactsBlock />
		</Suspense>
	);
};
export default ContentLayout;
