import { FC, useState } from 'react';
import { Navigation, Swiper as TypeSwiper, Thumbs } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { ErrorMessage } from '@/components/ErrorMessage';
import { FetchedImage } from '@/components/Layout';
import { Modal } from '@/components/Modal';
import { GalleryImageType } from '@/mock/gallery';
import { jsBreakpoints } from '@/theme/media';

import { Controls } from './Controls';
import { Slider, Thumbnails, WrapperModalGallery } from './styled';

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
}) => {
	const [thumbSwiper, setThumbSwiper] = useState<TypeSwiper>();

	const mainSwiperConfig: SwiperProps = {
		modules: [Thumbs, Navigation],
		speed: 800,
		spaceBetween: 8,
		slidesPerView: 1,
		initialSlide: currentId,
		thumbs: {
			swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null,
		},
		navigation: {
			nextEl: '.btn-next',
			prevEl: '.btn-prev',
		},
		onSwiper: (swiper) => {
			swiper.update();
		},
	};

	const thumbsSwiperConfig: SwiperProps = {
		modules: [Thumbs, Navigation],
		spaceBetween: 8,
		slidesPerView: 4,
		breakpoints: {
			[jsBreakpoints.xs]: {
				slidesPerView: 4,
			},
			[jsBreakpoints.md]: {
				slidesPerView: 7,
			},
		},
		navigation: {
			nextEl: '.btn-next',
			prevEl: '.btn-prev',
		},
		onInit: (swiper) => {
			swiper.navigation.update();
		},
		onSwiper: (swiper) => {
			setThumbSwiper(swiper);
		},
	};

	return (
		<Modal show={show} onClose={onClose}>
			<WrapperModalGallery>
				{gallery.length ? (
					<>
						<Slider>
							<Swiper {...mainSwiperConfig}>
								{gallery.map((image) => (
									<SwiperSlide key={image.id}>
										<FetchedImage
											width={1440}
											height={1440}
											sizes="100vw"
											quality={50}
											src={image.url}
											alt={`image${image.id}`}
										/>
									</SwiperSlide>
								))}
								<Controls />
							</Swiper>
						</Slider>
						<Thumbnails>
							<Swiper {...thumbsSwiperConfig}>
								{gallery.map((image) => (
									<SwiperSlide key={image.id}>
										<FetchedImage
											width={200}
											height={200}
											quality={20}
											src={image.url}
											alt={`image${image.id}`}
										/>
									</SwiperSlide>
								))}
								<Controls />
							</Swiper>
						</Thumbnails>
					</>
				) : (
					<ErrorMessage message="Gallery not found" flat />
				)}
			</WrapperModalGallery>
		</Modal>
	);
};

export default ModalGallery;
