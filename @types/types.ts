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
	id?: number;
	alt: string;
	url: string;
	tag?: ImageCategory;
};

// Main Slider

export type MainSliderType = {
	title: string;
	order: number;
	description: string;
	tag: ImageCategory;
	images: GalleryImageType[];
};

// Hall

export type HallType = {
	name: string;
	order: number;
	advantages: string[];
	description: string[];
	images?: GalleryImageType[];
	video?: string[] | null;
	tag: HallsTypes;
	isLoaded?: boolean;
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
	id?: number;
	question?: string;
	answer?: string;
};
