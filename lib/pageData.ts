import { GalleryImageType, ImageCategory } from '@/@types/types';
import { ResponseData } from '@/app/content';
import {
	advantages,
	galleryImages,
	halls,
	mainSlider,
	questions,
} from '@/mock';

const galleryCategories: { name: string; tag: ImageCategory }[] = [
	{ tag: 'all', name: 'Все' },
	{ tag: 'big-hall', name: 'Большой зал' },
	{ tag: 'small-hall', name: 'Малый зал' },
	{ tag: 'falcon-yard', name: 'Соколиный дворик' },
	{ tag: 'eat', name: 'Еда' },
];

export function getMainPageData(): ResponseData {
	return {
		advantages,
		faqs: questions,
		galleryImages,
		mainSlides: mainSlider,
	};
}

export function getGalleryPageData(): {
	categories: { name: string; tag: ImageCategory }[];
	images: GalleryImageType[];
} {
	return {
		categories: galleryCategories,
		images: galleryImages,
	};
}

export function getHallPageData(): { halls: typeof halls } {
	return { halls };
}
