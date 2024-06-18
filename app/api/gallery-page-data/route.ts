import { NextResponse } from 'next/server';

import { GalleryImageType, ImageCategory } from '@/@types/types';
import { galleryImages } from '@/mock';

interface GalleryResponse {
	categories: {
		name: string;
		tag: ImageCategory;
	}[];
	images: GalleryImageType[];
}

export async function GET() {
	return NextResponse.json<GalleryResponse>({
		categories: [
			{
				tag: 'all',
				name: 'Все',
			},
			{
				tag: 'big-hall',
				name: 'Большой зал',
			},
			{
				tag: 'small-hall',
				name: 'Малый зал',
			},
			{
				tag: 'falcon-yard',
				name: 'Соколиный дворик',
			},
			{
				tag: 'eat',
				name: 'Еда',
			},
		],
		images: galleryImages,
	});
}
