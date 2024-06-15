import { Metadata } from 'next';

import { apiUrl } from '@/services/variable';

import {
	CategoryItem,
	GalleryContent,
	GalleryItem,
	GalleryPageProps,
} from './content';

export const metadata: Metadata = {
	title: 'Gallery',
};

export const getImages = async (): Promise<GalleryPageProps> => {
	const resp = fetch(apiUrl('gallery-page-data'));
	let error = '';

	const json = await resp
		.then((res) => res.json())
		.catch((e) => {
			error = e.message;
		});

	const categories: CategoryItem[] = json?.categories || [];
	categories.unshift({
		tag: 'all',
		name: 'Все',
	});

	const images: GalleryItem[] = json?.images || [];

	return {
		categories,
		images,
		error,
	};
};

export default async function GalleryPage() {
	const data = await getImages();
	return <GalleryContent {...data} />;
}
