import 'swiper/css';

import { FC, useState } from 'react';
import { Navigation, Swiper as TypeSwiper, Thumbs } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { Modal } from '@/components/Modal';
import { SliderImage } from '@/components/sections/main-page/SliderBlock/styled';
import { mainPageGallery } from '@/mock/gallery';
import { jsBreakpoints } from '@/theme/media';

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
		speed: 600,
		spaceBetween: 12,
		slidesPerView: 1,
		initialSlide: currentId - 1,
		modules: [Thumbs, Navigation],
		thumbs: {
			swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null,
		},
		navigation: {
			nextEl: '.btn-next',
			prevEl: '.btn-prev',
		},
	};

	const thumbsSwiperConfig: SwiperProps = {
		modules: [Thumbs],
		spaceBetween: 12,
		slidesPerView: 4,
		lazyPreloadPrevNext: 1,
		breakpoints: {
			[jsBreakpoints.xs]: {
				slidesPerView: 4,
			},
			[jsBreakpoints.md]: {
				slidesPerView: 7,
			},
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
								<SliderImage
									width={1440}
									height={1440}
									priority
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
								<SliderImage
									width={200}
									height={200}
									priority
									quality={50}
									src={image.url}
									alt={`image${image.id}`}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</Thumbnails>
			</Wrapper>
		</Modal>
	);
};

export default ModalGallery;
