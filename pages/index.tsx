import { NextPage } from 'next';
import { lazy, Suspense } from 'react';

import { PageLoader } from '@/components/Layout';
import { AdvantageType } from '@/mock/advantages';
import { MainSliderType } from '@/mock/main-slider';
import { QuestionType } from '@/mock/questions';
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

type ErrorMessageType = {
	slider: string | undefined;
	advantages: string | undefined;
	questions: string | undefined;
};

type MainPageProps = {
	slider?: MainSliderType[];
	advantages?: AdvantageType[];
	questions?: QuestionType[];
	error?: ErrorMessageType;
};

export const getServerSideProps = async (): Promise<{
	props: MainPageProps;
}> => {
	const errorMessage: ErrorMessageType = {
		slider: '',
		advantages: '',
		questions: '',
	};

	const responseSlider = fetch(fetchApi('main-slides'));
	const responseQuestions = fetch(fetchApi('faqs'));
	const responseAdvantages = fetch(fetchApi('advantages'));

	const [destSlider, destAdvantages, destQuestions] = await Promise.all([
		responseSlider
			.then((resp) => resp.json())
			.catch((e) => {
				errorMessage.slider = e.message;
			}),
		responseAdvantages
			.then((resp) => resp.json())
			.catch((e) => {
				errorMessage.advantages = e.message;
			}),
		responseQuestions
			.then((resp) => resp.json())
			.catch((e) => {
				errorMessage.questions = e.message;
			}),
	]);

	return {
		props: {
			slider: (Array.isArray(destSlider) && destSlider) || [],
			advantages: (Array.isArray(destAdvantages) && destAdvantages) || [],
			questions: (Array.isArray(destQuestions) && destQuestions) || [],
			error: errorMessage,
		},
	};
};

export const MainPage: NextPage<MainPageProps> = ({
	slider,
	advantages,
	questions,
	error,
}) => (
	<Suspense fallback={<PageLoader />}>
		<SliderBlock data={slider} error={error?.slider} />
		<PresentBanner />
		<WhyAreWe data={advantages} error={error?.advantages} />
		<GalleryBlock />
		<DiscountBlock />
		<Questions data={questions} error={error?.questions} />
		<ContactsBlock />
	</Suspense>
);

export default MainPage;
