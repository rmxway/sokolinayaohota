import 'swiper/scss';

import { FC, useState } from 'react';
import { Navigation, Swiper as TypeSwiper, Thumbs } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { GalleryImageType } from '@/@types/types';
import { FetchedImage, Preloader } from '@/components/Layout';
import { jsBreakpoints } from '@/theme/media';

import { Controls } from './Controls';
import {
	LoadingWrapper,
	SliderStyle,
	SliderWrapper,
	ThumbnailsStyle,
} from './style';

type SliderProps = {
	images: GalleryImageType[];
	initialSlide?: number;
	controls?: boolean;
	countThumbsPerView?: number;
};

export const Slider: FC<SliderProps> = ({
	images,
	initialSlide = 0,
	controls = true,
	countThumbsPerView = 7,
}) => {
	const [thumbSwiper, setThumbSwiper] = useState<TypeSwiper>();
	const [isLoaded, setLoaded] = useState(false);

	const mainSwiperConfig: SwiperProps = {
		modules: [Thumbs, Navigation],
		speed: 800,
		spaceBetween: 1,
		lazyPreloadPrevNext: 1,
		slidesPerView: 1,
		initialSlide,
		thumbs: {
			swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null,
		},
		navigation: {
			nextEl: '.btn-slider.btn-next',
			prevEl: '.btn-slider.btn-prev',
		},
		onSwiper(swiper) {
			swiper.update();
		},
		onInit() {
			setLoaded(true);
		},		
	};

	const thumbsSwiperConfig: SwiperProps = {
		modules: [Thumbs, Navigation],
		spaceBetween: 4,
		slidesPerView: 4,
		breakpoints: {
			[jsBreakpoints.xs]: {
				slidesPerView: 4,
			},
			[jsBreakpoints.md]: {
				slidesPerView: countThumbsPerView,
			},
		},
		navigation: {
			nextEl: '.btn-thumbnails.btn-next',
			prevEl: '.btn-thumbnails.btn-prev',
		},
		onInit: (swiper) => {
			swiper.navigation.update();
		},
		onSwiper: (swiper) => {
			setThumbSwiper(swiper);
		},
	};

	return (
		<SliderWrapper>
			{!isLoaded && <Preloader />}
			<LoadingWrapper $loaded={isLoaded}>
				<SliderStyle>
					<Swiper {...mainSwiperConfig}>
						{images.map((image) => (
							<SwiperSlide key={image.id}>
								<FetchedImage
									width={1000}
									height={1000}
									sizes="100vw"
									quality={50}
									src={image.url}
									alt={`image${image.id}`}
								/>
							</SwiperSlide>
						))}
						{controls ? <Controls name="slider" /> : null}
					</Swiper>
				</SliderStyle>
				<ThumbnailsStyle>
					<Swiper {...thumbsSwiperConfig}>
						{images.map((image) => (
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
						{controls ? <Controls name="thumbnails" /> : null}
					</Swiper>
				</ThumbnailsStyle>
			</LoadingWrapper>
		</SliderWrapper>
	);
};

export default Slider;
