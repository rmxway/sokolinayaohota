import { LayoutGroup } from 'framer-motion';
import { NextPage } from 'next';
import { lazy, Suspense, useState } from 'react';

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
import { categories, ImageCategory, mainPageGallery } from '@/mock/gallery';

const ModalGallery = lazy(() => import('@/components/ModalGallery'));

const GalleryPage: NextPage = () => {
	const [selectedId, setSelectedId] = useState<number>(1);
	const [isOpen, setOpen] = useState(false);
	const [suspended, setSuspended] = useState(false);
	const [currentCategory, setCurrentCategory] =
		useState<ImageCategory>('all');
	const [filteredImages, setFilteredImages] = useState(mainPageGallery);
	const existedCategory = [
		...new Set(mainPageGallery.map((item) => item.type)),
	];

	const handleShowImageInModal = (id: number) => {
		setSelectedId(id);
		setOpen((prev) => !prev);
		if (!suspended) setSuspended(true);
	};

	const handleFilterGallery = (code: ImageCategory) => {
		if (code === 'all') {
			setCurrentCategory('all');
			setFilteredImages(mainPageGallery);
			return;
		}
		setCurrentCategory(code);
		setFilteredImages([
			...mainPageGallery.filter((item) => item.type === code),
		]);
	};

	return (
		<>
			<WrapperGalleryPage>
				<Container grid gap={40} direction="row" center mt>
					<Title>Галерея</Title>
					<Flexbox>
						{categories.map(
							(category) =>
								(existedCategory.includes(category.code) ||
									category.code === 'all') && (
									<CategoryButton
										key={category.code}
										type="button"
										$active={
											category.code === currentCategory
										}
										onClick={() =>
											handleFilterGallery(category.code)
										}
									>
										{category.name}
									</CategoryButton>
								)
						)}
					</Flexbox>
					<Grid gap={20} direction="row" className="gallery-grid">
						<LayoutGroup>
							{filteredImages.map((image, idx) => (
								<GalleryImage
									layoutRoot
									variants={galleryImageAnimation}
									animate="end"
									exit="start"
									transition={{
										duration: 0.1,
										type: 'tween',
									}}
									key={image.id}
									onClick={() => handleShowImageInModal(idx)}
								>
									<FetchedImage
										src={image.url}
										alt={`image${image.id}`}
										width={400}
										height={400}
										quality={10}
									/>
								</GalleryImage>
							))}
						</LayoutGroup>
					</Grid>
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
