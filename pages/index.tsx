import { NextPage } from 'next';

import {
	ContactsBlock,
	DiscountBlock,
	GalleryBlock,
	PresentBanner,
	Questions,
	SliderBlock,
	WhyAreWe,
} from '@/components/sections/main-page';

export const MainPage: NextPage = () => (
	<>
		<SliderBlock />
		<PresentBanner />
		<WhyAreWe />
		<GalleryBlock />
		<DiscountBlock />
		<Questions />
		<ContactsBlock />
	</>
);

export default MainPage;
