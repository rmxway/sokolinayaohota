import icomoon from '@/public/assets/fonts/icofont/icofont.json';

export type HallsTypes = 'falcon-yard' | 'big-hall' | 'small-hall';

// Gallery

export type ImageCategory =
	| 'falcon-yard'
	| 'big-hall'
	| 'small-hall'
	| 'eat'
	| 'all';

export type GalleryImageType = {
	id: number;
	url: string;
	type: ImageCategory;
};

export type CategoryType = {
	name: string;
	code: ImageCategory;
};

// Main Slider

export type MainSliderType = {
	title: string;
	type: HallsTypes;
	description: string;
};

// Hall

export type HallType = {
	advantages: string[];
	description: string[];
	title: string;
	type: HallsTypes;
	images?: GalleryImageType[];
	video?: string;
};

// Advantage

type DescriptionElement = {
	type: 'ul' | 'p';
	values: string[];
};

export type AdvantageType = {
	title: string;
	icon: keyof typeof icomoon;
	description: DescriptionElement[];
};

// Question

export type QuestionType = {
	id?: string;
	question?: string;
	answer?: string;
};
