import { lazy, Suspense } from 'react';

import {
	AdvantageType,
	GalleryImageType,
	MainSliderType,
	QuestionType,
} from '@/types/types';
import { PageLoader } from '@/components/ui';
import { getMainPageData } from '@/lib/pageData';

import type { Route } from './+types/content';

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

export async function clientLoader() {
	try {
		const data = getMainPageData();
		return { data };
	} catch (e) {
		return { error: e instanceof Error ? e.message : String(e) };
	}
}

export default function ContentLayout({ loaderData }: Route.ComponentProps) {
	const { data, error } = loaderData;

	return (
		<Suspense fallback={<PageLoader />}>
			<SliderBlock data={data?.mainSlides} {...{ error }} />
			<PresentBanner />
			<WhyAreWe data={data?.advantages} {...{ error }} />
			<GalleryBlock
				data={data?.galleryImages.slice(0, 9)}
				{...{ error }}
			/>
			<DiscountBlock />
			<Questions data={data?.faqs} {...{ error }} />
		</Suspense>
	);
}
