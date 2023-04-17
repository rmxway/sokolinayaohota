import { NextPage } from 'next';

import { ModalFormOrder } from '@/components/ModalFormOrder';
import {
	DiscountBlock,
	PresentBanner,
	Questions,
	SliderBlock,
	WhyAreWe,
} from '@/components/sections/main-page';
import { useStore } from '@/hooks';
import { actionChangeModal } from '@/store/actions';

export const MainPage: NextPage = () => {
	const { state, dispatch } = useStore();

	return (
		<>
			<SliderBlock />
			<PresentBanner />
			<WhyAreWe />
			{/* <div>Gallery</div> */}
			<Questions />
			<DiscountBlock />
			{/* <div>Contacts</div> */}
			<ModalFormOrder
				show={state.modal === 'order'}
				onClose={() => dispatch(actionChangeModal(''))}
			/>
		</>
	);
};

export default MainPage;
