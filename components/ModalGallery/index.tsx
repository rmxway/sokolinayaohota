import { FC, useState } from 'react';
import { Navigation, Swiper as TypeSwiper, Thumbs } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { FetchedImage } from '@/components/Layout';
import { Modal } from '@/components/Modal';
import { mainPageGallery } from '@/mock/gallery';
import { jsBreakpoints } from '@/theme/media';

import { Controls } from './Controls';
import { Slider, Thumbnails, Wrapper } from './styled';

interface ModalGalleryProps {
	currentId: number;
	show: boolean;
	onClose: () => void;
}

export const ModalGallery: FC<ModalGalleryProps> = ({
	show,
	onClose,
	currentId,
}) => {
	const [thumbSwiper, setThumbSwiper] = useState<TypeSwiper>();

	const mainSwiperConfig: SwiperProps = {
		modules: [Thumbs],
		speed: 800,
		spaceBetween: 8,
		slidesPerView: 1,
		initialSlide: currentId - 1,
		thumbs: {
			swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null,
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
			<Wrapper>
				<Slider>
					<Swiper {...mainSwiperConfig}>
						{mainPageGallery.map((image) => (
							<SwiperSlide key={image.id}>
								<FetchedImage
									width={1440}
									height={1440}
									sizes="100vw"
									quality={60}
									src={image.url}
									alt={`image${image.id}`}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</Slider>
				<Thumbnails>
					<Swiper {...thumbsSwiperConfig}>
						{mainPageGallery.map((image) => (
							<SwiperSlide key={image.id}>
								<FetchedImage
									width={200}
									height={200}
									quality={50}
									src={image.url}
									alt={`image${image.id}`}
								/>
							</SwiperSlide>
						))}
						<Controls />
					</Swiper>
				</Thumbnails>
			</Wrapper>
		</Modal>
	);
};

export default ModalGallery;
