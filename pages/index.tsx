import { NextPage } from 'next';
import { lazy, Suspense } from 'react';

import { PageLoader } from '@/components/Layout';

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

export const MainPage: NextPage = () => (
	<Suspense fallback={<PageLoader />}>
		<SliderBlock />
		<PresentBanner />
		<WhyAreWe />
		<GalleryBlock />
		<DiscountBlock />
		<Questions />
		<ContactsBlock />
	</Suspense>
);

export default MainPage;
