import { NextPage } from 'next';

import {
	PresentBanner,
	Questions,
	SliderBlock,
	WhyAreWe,
} from '@/pages/main-page';

export const MainPage: NextPage = () => (
	<>
		<SliderBlock />
		<PresentBanner />
		<WhyAreWe />
		{/* <div>Gallery</div> */}
		<Questions />
		{/* <div>Order</div>
		<div>Contacts</div> */}
	</>
);

export default MainPage;
