import Link from 'next/link';
import { FC, lazy, Suspense, useState } from 'react';

import {
	Container,
	FetchedImage,
	PageLoader,
	Title,
} from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { mainPageGallery } from '@/mock/gallery';

import { Grid, Wrapper } from './styled';

const ModalGallery = lazy(() => import('@/components/ModalGallery'));

export const GalleryBlock: FC = () => {
	const [selectedId, setSelectedId] = useState<number>(1);
	const [isOpen, setOpen] = useState(false);
	const [suspended, setSuspended] = useState(false);

	const handleShowImageInModal = (id: number) => {
		setSelectedId(id);
		setOpen((prev) => !prev);
		if (!suspended) setSuspended(true);
	};

	return (
		<Wrapper>
			<Container grid gap={40} direction="row" center>
				<Title color="disabled">Галерея</Title>

				<Grid>
					{mainPageGallery.map((image, idx) => (
						<FetchedImage
							key={image.id}
							src={image.url}
							alt={`image${image.id}`}
							width={400}
							height={400}
							quality={20}
							className={idx === 0 ? 'big' : ''}
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

			{suspended && (
				<Suspense key="Gallery" fallback={<PageLoader />}>
					<ModalGallery
						show={isOpen}
						onClose={() => setOpen((prev) => !prev)}
						currentId={selectedId}
					/>
				</Suspense>
			)}
		</Wrapper>
	);
};

export default GalleryBlock;
