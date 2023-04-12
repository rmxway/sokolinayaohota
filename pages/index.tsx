import { NextPage } from 'next';

import { PresentBanner, SliderBlock, WhyAreWe } from '@/pages/main-page';

export const MainPage: NextPage = () => (
	<>
		<SliderBlock />
		<PresentBanner />
		<WhyAreWe />
		<div>Gallery</div>
		<div>Questions</div>
		<div>Order</div>
		<div>Contacts</div>
	</>
);

export default MainPage;
