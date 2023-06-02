import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import {
	EffectFade,
	Navigation,
	Pagination,
	Swiper as TypeSwiper,
	Thumbs,
} from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { Icon } from '@/components';
import { ErrorMessage } from '@/components/ErrorMessage';
import {
	Container,
	FetchedImage,
	Flexbox,
	Grid,
	Preloader,
	Title,
} from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { mainSlider as data, MainSliderType } from '@/mock/main-slider';

import {
	animateText,
	animateTitle,
	Controllers,
	Info,
	SlideContainer,
	Wrapper,
} from './styled';

type SliderBlockProps = {
	data: MainSliderType[] | undefined;
	error?: string;
};

export const SliderBlock: FC<SliderBlockProps> = () => {
	const [thumbSwiper, setThumbSwiper] = useState<TypeSwiper>();
	const [slideIndex, setSlideIndex] = useState<number>(0);
	const [isLoaded, setLoaded] = useState(false);
	const router = useRouter();
	const [currentPath, setCurrentPath] = useState('/halls/big-hall');
	const typesPath = data.map((item) => item.type);

	const mainSwiperConfig: SwiperProps = {
		speed: 300,
		spaceBetween: 100,
		slidesPerView: 1,
		autoHeight: true,
		loop: true,
		modules: [Thumbs, Pagination, Navigation],
		thumbs: {
			swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null,
		},
		pagination: {
			clickable: true,
			el: '.slider-pagination',
			renderBullet() {
				return `<span class="dot swiper-pagination-bullet"></span>`;
			},
			type: 'bullets',
		},
		navigation: {
			nextEl: '.btn-next',
			prevEl: '.btn-prev',
		},
		onSlideChangeTransitionEnd: (swiper) => {
			setSlideIndex(swiper.realIndex);
			setCurrentPath(`/halls/${typesPath[swiper.realIndex]}`);
		},
		onInit: () => {
			setLoaded(true);
		},
	};

	const imagesSwiperConfig: SwiperProps = {
		modules: [Thumbs, EffectFade],
		speed: 600,
		allowTouchMove: false,
		effect: 'fade',
		autoHeight: true,
		spaceBetween: 20,
		slidesPerView: 1,
		onSwiper: (swiper) => {
			setThumbSwiper(swiper);
		},
	};

	if (!data?.length)
		return (
			<Wrapper>
				<Container grid>
					<ErrorMessage />
				</Container>
			</Wrapper>
		);

	return (
		<Wrapper>
			{!isLoaded && <Preloader />}
			<Container>
				<SlideContainer $isLoaded={isLoaded}>
					<Info>
						<Swiper {...mainSwiperConfig}>
							{data?.map((slide, index) => (
								<SwiperSlide key={slide.alt}>
									<Grid direction="row" gap={32}>
										<AnimatePresence>
											{slideIndex === index && (
												<>
													<Title
														variants={animateTitle}
														initial="hidden"
														animate="visible"
														exit="visible"
														layout
														color="brown"
													>
														{slide.title}
													</Title>
													<motion.p
														variants={animateText}
														initial="hidden"
														animate="visible"
														layout
													>
														{slide.description}
													</motion.p>
												</>
											)}
										</AnimatePresence>
									</Grid>
								</SwiperSlide>
							))}
						</Swiper>
						<Controllers>
							<Flexbox>
								<Icon
									icon="arrow-simple"
									className="btn-prev"
									as="div"
									active
								/>
								<Icon
									icon="arrow-simple"
									className="btn-next"
									as="div"
									active
								/>
							</Flexbox>
							<div>
								<div className="slider-pagination" />
							</div>
							<ButtonUI
								brown
								icon="arrow"
								onClick={() => {
									router.replace(currentPath);
								}}
							>
								Подробнее
							</ButtonUI>
						</Controllers>
					</Info>
					{isLoaded && (
						<Swiper {...imagesSwiperConfig}>
							{data?.map((slide) => (
								<SwiperSlide key={slide.alt}>
									<FetchedImage
										src={slide.img}
										alt={slide.alt}
										width={1000}
										height={1000}
										sizes="100vw"
										quality={70}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					)}
				</SlideContainer>
			</Container>
		</Wrapper>
	);
};

export default SliderBlock;
