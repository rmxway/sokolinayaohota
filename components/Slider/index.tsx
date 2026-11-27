import 'swiper/css';

import { FC, memo, useState } from 'react';
import { Swiper as TypeSwiper } from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { GalleryImageType } from '@/types/types';
import { Icon } from '@/components';
import { FetchedImage, Flexbox, Title } from '@/components/Layout';
import { prefixImages } from '@/services/constants';
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

		const isImages = images.length !== 0;

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
			onSwiper: (swiper) => {
				swiper.navigation.update();
			},
			onInit: (swiper) => {
				setThumbSwiper(swiper);
			},
		};

		return (
			<SliderShadow $isModal={isModal}>
				<SliderWrapper>
					{!isImages && (
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

					<LoadingWrapper $loaded>
						{isImages && (
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
								{thumbs && (
									<ThumbnailsStyle>
										<Swiper {...thumbsSwiperConfig}>
											{images.map((image) => (
												<SwiperSlide
													key={image.id || image.alt}
												>
													<FetchedImage
														width={200}
														height={200}
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
