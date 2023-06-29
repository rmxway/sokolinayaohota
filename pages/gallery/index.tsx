import { LayoutGroup } from 'framer-motion';
import { GetServerSidePropsContext, NextPage } from 'next';
import { lazy, Suspense, useState } from 'react';

import { GalleryImageType, ImageCategory } from '@/@types/types';
import { ErrorMessage } from '@/components/ErrorMessage';
import { getTitle, HeadPage } from '@/components/HeadPage';
import {
	Container,
	FetchedImage,
	Flexbox,
	Grid,
	PageLoader,
	Title,
} from '@/components/Layout';
import {
	CategoryButton,
	WrapperGalleryPage,
} from '@/components/sections/gallery/styled';
import {
	GalleryImage,
	galleryImageAnimation,
} from '@/components/sections/main-page/GalleryBlock/styled';
import { fetchApi, prefixImages } from '@/services/variable';

const ModalGallery = lazy(() => import('@/components/ModalGallery'));

type CategoryItem = {
	tag: ImageCategory;
	name: string;
};

interface GalleryItem extends GalleryImageType {
	id: number;
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const resp = fetch(fetchApi('gallery-page-data'));
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

	const images: GalleryImageType[] = json?.images || [];

	return {
		props: {
			categories,
			images,
			error,
			title: getTitle(ctx.resolvedUrl),
		},
	};
};

type GalleryPageProps = {
	categories: CategoryItem[];
	images: GalleryItem[];
	error: string;
	title: string;
};

const GalleryPage: NextPage<GalleryPageProps> = ({
	categories,
	images,
	error,
	title,
}) => {
	const [selectedId, setSelectedId] = useState<number>(1);
	const [isOpen, setOpen] = useState(false);
	const [suspended, setSuspended] = useState(false);
	const [currentCategory, setCurrentCategory] =
		useState<ImageCategory>('all');
	const [filteredImages, setFilteredImages] = useState(images);
	const existedCategory = [...new Set(images.map((item) => item.tag))];

	const handleShowImageInModal = (id: number) => {
		setSelectedId(id);
		setOpen((prev) => !prev);
		if (!suspended) setSuspended(true);
	};

	const handleFilterGallery = (code: ImageCategory) => {
		if (code === 'all') {
			setCurrentCategory('all');
			setFilteredImages(images);
			return;
		}
		setCurrentCategory(code);
		setFilteredImages([...images.filter((item) => item.tag === code)]);
	};

	return (
		<>
			<HeadPage title={title} />
			<WrapperGalleryPage>
				<Container grid gap={40} direction="row" center mt>
					<Title as="h1">Галерея</Title>
					<Flexbox>
						{categories?.map(
							(category) =>
								(existedCategory.includes(category.tag) ||
									category.tag === 'all') && (
									<CategoryButton
										key={category.tag}
										type="button"
										$active={
											category.tag === currentCategory
										}
										onClick={() =>
											handleFilterGallery(category.tag)
										}
									>
										{category.name}
									</CategoryButton>
								)
						)}
					</Flexbox>
					{filteredImages.length ? (
						<Grid gap={20} direction="row" className="gallery-grid">
							<LayoutGroup>
								{filteredImages?.map((image, idx) => (
									<GalleryImage
										layoutRoot
										variants={galleryImageAnimation}
										animate="end"
										exit="start"
										transition={{
											duration: 0.1,
											type: 'tween',
										}}
										key={image.alt}
										onClick={() =>
											handleShowImageInModal(idx)
										}
									>
										<FetchedImage
											src={`${prefixImages}${image.url}`}
											alt={image.alt}
											width={400}
											height={400}
											quality={10}
										/>
									</GalleryImage>
								))}
							</LayoutGroup>
						</Grid>
					) : (
						<ErrorMessage message={error || 'Нет картинок'} />
					)}
				</Container>
			</WrapperGalleryPage>
			{suspended && (
				<Suspense key="GalleryPage" fallback={<PageLoader />}>
					<ModalGallery
						show={isOpen}
						onClose={() => setOpen((prev) => !prev)}
						gallery={filteredImages}
						currentId={selectedId}
					/>
				</Suspense>
			)}
		</>
	);
};

export { GalleryPage };
export default GalleryPage;
