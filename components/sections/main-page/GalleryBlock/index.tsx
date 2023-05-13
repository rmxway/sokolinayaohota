import Link from 'next/link';
import { FC, lazy, Suspense, useState } from 'react';

import { Container, PageLoader, Title } from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { mainPageGallery } from '@/mock/gallery';

import { Grid, Item, Wrapper } from './styled';

const ModalGallery = lazy(() => import('@/components/ModalGallery'));

export const GalleryBlock: FC = () => {
	const [selectedId, setSelectedId] = useState<number>(1);
	const [isOpen, setOpen] = useState(false);

	const handleShowImageInModal = (id: number) => {
		setSelectedId(id);
		setOpen((prev) => !prev);
	};

	return (
		<Wrapper>
			<Container grid gap={40} direction="row" center>
				<Title color="disabled">Галерея</Title>

				<Grid>
					{mainPageGallery.map((image, idx) => (
						<Item
							key={image.id}
							$big={idx === 0}
							src={image.url}
							width={400}
							height={400}
							quality={20}
							alt={`image${image.id}`}
							onClick={() => handleShowImageInModal(image.id)}
						/>
					))}
				</Grid>

				<Link href="/gallery">
					<ButtonUI primary mobile>
						Больше фото
					</ButtonUI>
				</Link>
			</Container>

			{isOpen && (
				<Suspense fallback={<PageLoader />}>
					<ModalGallery
						show={isOpen}
						onClose={() => setOpen(false)}
						currentId={selectedId}
					/>
				</Suspense>
			)}
		</Wrapper>
	);
};

export default GalleryBlock;
