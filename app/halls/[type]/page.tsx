import { notFound } from 'next/navigation';

import { ContentHalls, PathType } from './content';
import { getHalls } from './getHalls';

export default async function GalleryPage({
	params,
}: {
	params: Promise<PathType>;
}) {
	const type = await params;
	const resp = await getHalls(type);
	if (resp.currentHall === null) return notFound();

	return <ContentHalls {...resp} />;
}
