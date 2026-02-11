import { FC } from 'react';

import { GalleryImageType } from '@/@types/types';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Modal } from '@/components/Modal';
import { Slider } from '@/components/Slider';

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
	<Modal show={show} onClose={onClose} fullscreen gallery>
		{gallery?.length ? (
			<Slider
				key={currentId}
				initialSlide={currentId}
				images={gallery}
				controls
			/>
		) : (
			<ErrorMessage message="Gallery not found" flat />
		)}
	</Modal>
);

export default ModalGallery;
