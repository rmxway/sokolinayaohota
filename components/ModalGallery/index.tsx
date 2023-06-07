import { FC } from 'react';

import { GalleryImageType } from '@/@types/types';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Modal } from '@/components/Modal';
import { Slider } from '@/components/Slider';

import { WrapperModalGallery } from './styled';

interface ModalGalleryProps {
	currentId: number;
	show: boolean;
	gallery: GalleryImageType[];
	onClose: () => void;
}

export const ModalGallery: FC<ModalGalleryProps> = ({
	currentId,
	show,
	gallery,
	onClose,
}) => (
	<Modal show={show} onClose={onClose}>
		<WrapperModalGallery>
			{gallery.length ? (
				<Slider initialSlide={currentId} images={gallery} />
			) : (
				<ErrorMessage message="Gallery not found" flat />
			)}
		</WrapperModalGallery>
	</Modal>
);

export default ModalGallery;
