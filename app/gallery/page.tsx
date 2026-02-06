import { Metadata } from 'next';

import { GalleryContent } from './content';
import { getImages } from './getImages';

export const metadata: Metadata = {
	title: 'Gallery',
};

export default async function GalleryPage() {
	const data = await getImages();

	return <GalleryContent {...data} />;
}
