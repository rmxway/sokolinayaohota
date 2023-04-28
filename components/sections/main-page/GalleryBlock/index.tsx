import Link from 'next/link';
import { useState } from 'react';

import { Container, Title } from '@/components/Layout';
import { ModalGallery } from '@/components/ModalGallery';
import { ButtonUI } from '@/components/ui';
import { mainPageGallery } from '@/mock/gallery';

import { Grid, Item, Wrapper } from './styled';

export const GalleryBlock = () => {
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
							width={600}
							height={600}
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
			<ModalGallery
				show={isOpen}
				onClose={() => setOpen(false)}
				currentId={selectedId}
			/>
		</Wrapper>
	);
};
export default GalleryBlock;
