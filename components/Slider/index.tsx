import 'swiper/css';

import { FC, memo, useEffect, useState } from 'react';
import { Swiper as TypeSwiper } from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { GalleryImageType } from '@/@types/types';
import { Icon } from '@/components';
import { FetchedImage, Flexbox, Title } from '@/components/Layout';
import { Preloader } from '@/components/ui';
import { prefixImages } from '@/services/variable';
import { jsBreakpoints } from '@/theme/media';

import { Controls } from './Controls';
import {
	LoadingWrapper,
	SliderShadow,
	SliderStyle,
	SliderWrapper,
	ThumbnailsStyle,
} from './styled';

type SliderProps = {
	images: GalleryImageType[];
	initialSlide?: number;
	controls?: boolean;
	thumbs?: boolean;
	isModal?: boolean;
	countThumbsPerView?: number;
};

export const Slider: FC<SliderProps> = memo(
	({
		images,
		initialSlide = 0,
		controls,
		thumbs,
		isModal,
		countThumbsPerView = 7,
	}) => {
		const [thumbSwiper, setThumbSwiper] = useState<TypeSwiper>();
		const [isLoaded, setLoaded] = useState(false);

		const mainSwiperConfig: SwiperProps = {
			modules: [Thumbs, Navigation],
			speed: 300,
			spaceBetween: 1,
			lazyPreloadPrevNext: 2,
			slidesPerView: 1,
			initialSlide,
			thumbs: {
				swiper:
					thumbs && thumbSwiper && !thumbSwiper.destroyed
						? thumbSwiper
						: null,
			},
			navigation: {
				nextEl: '.btn-slider.btn-next',
				prevEl: '.btn-slider.btn-prev',
			},
			onSwiper(swiper) {
				swiper.update();
				swiper.slideTo(initialSlide, 0);
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
				nextEl: '.btn-slider.btn-next',
				prevEl: '.btn-slider.btn-prev',
			},
			onInit: (swiper) => {
				swiper.navigation.update();
			},
			onSwiper: (swiper) => {
				setThumbSwiper(swiper);
			},
		};

		useEffect(() => {
			if (images.length === 0) {
				const t = setTimeout(() => setLoaded(true), 0);
				return () => clearTimeout(t);
			}
			return undefined;
		}, [images]);

		return (
			<SliderShadow $isModal={isModal}>
				<SliderWrapper>
					{images.length === 0 && (
						<Flexbox
							$align="center"
							$justify="center"
							$direction="column"
							$w100
							$h100
							className="error-message"
						>
							<Icon icon="no-photo" size={55} color="disabled" />
							<br />
							<Title color="disabled" size="24px">
								Фотографии временно не доступны
							</Title>
						</Flexbox>
					)}
					{!isLoaded && <Preloader light />}
					<LoadingWrapper $loaded={isLoaded}>
						{images.length !== 0 && (
							<>
								<SliderStyle $isModal={isModal}>
									<Swiper {...mainSwiperConfig}>
										{images.map((image) => (
											<SwiperSlide
												key={image.id || image.alt}
											>
												<FetchedImage
													width={1000}
													height={1000}
													sizes="100vw"													
													quality={50}
													light
													src={`${prefixImages}${image.url}`}
													alt={image.alt}
												/>
											</SwiperSlide>
										))}
										{controls ? (
											<Controls name="slider" />
										) : null}
									</Swiper>
								</SliderStyle>
								{thumbs && images.length !== 0 && (
									<ThumbnailsStyle>
										<Swiper {...thumbsSwiperConfig}>
											{images.map((image) => (
												<SwiperSlide
													key={image.id || image.alt}
												>
													<FetchedImage
														width={200}
														height={200}
														quality={10}
														light
														src={`${prefixImages}${image.url}`}
														alt={image.alt}
													/>
												</SwiperSlide>
											))}
											{controls ? (
												<Controls name="slider" />
											) : null}
										</Swiper>
									</ThumbnailsStyle>
								)}
							</>
						)}
					</LoadingWrapper>
				</SliderWrapper>
			</SliderShadow>
		);
	},
);

export default Slider;
