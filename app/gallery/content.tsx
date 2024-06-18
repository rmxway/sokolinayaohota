'use client';

import { LayoutGroup } from 'framer-motion';
import { lazy, Suspense, useState } from 'react';

import { GalleryImageType, ImageCategory } from '@/@types/types';
import { ErrorMessage } from '@/components/ErrorMessage';
import {
	Container,
	FetchedImage,
	Flexbox,
	Grid,
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
import { PageLoader } from '@/components/ui';
import { prefixImages } from '@/services/variable';

const ModalGallery = lazy(() => import('@/components/ModalGallery'));

export type CategoryItem = {
	tag: ImageCategory;
	name: string;
};

export interface GalleryPageProps {
	categories: CategoryItem[];
	images: GalleryImageType[];
	error: string;
}

export const GalleryContent = ({
	categories,
	images,
	error,
}: GalleryPageProps) => {
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
			<WrapperGalleryPage>
				<Container $grid $gap={40} $direction="row" $center $mt>
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
								),
						)}
					</Flexbox>
					{filteredImages.length ? (
						<Grid
							$gap={20}
							$direction="row"
							className="gallery-grid"
						>
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
