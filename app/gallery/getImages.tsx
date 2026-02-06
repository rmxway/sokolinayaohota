import { GalleryImageType } from '@/@types/types';
import { getGalleryPageData } from '@/lib/pageData';

import { CategoryItem, GalleryPageProps } from './content';

export const getImages = async (): Promise<GalleryPageProps> => {
	try {
		const { categories, images } = getGalleryPageData();
		return {
			categories: categories as CategoryItem[],
			images: images as GalleryImageType[],
			error: '',
		};
	} catch (e) {
		return {
			categories: [],
			images: [],
			error: e instanceof Error ? e.message : String(e),
		};
	}
};
