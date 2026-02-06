import { GalleryImageType } from '@/@types/types';
import { apiUrl } from '@/services/variable';

import { CategoryItem, GalleryPageProps } from './content';

export const getImages = async (): Promise<GalleryPageProps> => {
	const resp = fetch(apiUrl('gallery-page-data'));
	let error = '';

	const json = await resp
		.then((res) => res.json())
		.catch((e) => {
			error = e.message;
		});

	const categories: CategoryItem[] = json?.categories || [];
	const images: GalleryImageType[] = json?.images || [];

	return {
		categories,
		images,
		error,
	};
};
