import { AnimatePresence, motion } from 'framer-motion';
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
import {
	Container,
	FetchedImage,
	Flexbox,
	Grid,
	Preloader,
	Title,
} from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { mainSlider } from '@/mock/main-slider';

import {
	animateText,
	animateTitle,
	Controllers,
	Info,
	SlideContainer,
	Wrapper,
} from './styled';

export const SliderBlock: FC = () => {
	const [thumbSwiper, setThumbSwiper] = useState<TypeSwiper>();
	const [slideIndex, setSlideIndex] = useState<number>(0);
	const [isLoaded, setLoaded] = useState(false);

	const mainSwiperConfig: SwiperProps = {
		speed: 300,
		spaceBetween: 100,
		slidesPerView: 1,
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
		onSlideChange: (swiper) => {
			setSlideIndex(swiper.realIndex);
		},
		onInit: () => {
			setLoaded(true);
		},
	};

	const imagesSwiperConfig: SwiperProps = {
		modules: [Thumbs, EffectFade],
		speed: 1000,
		allowTouchMove: false,
		effect: 'fade',
		spaceBetween: 20,
		slidesPerView: 1,
		onSwiper: (swiper) => {
			setThumbSwiper(swiper);
		},
	};

	return (
		<Wrapper>
			{!isLoaded && <Preloader />}
			<Container>
				<SlideContainer $isLoaded={isLoaded}>
					<Info>
						<Swiper {...mainSwiperConfig}>
							{mainSlider.map((slide, index) => (
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
							<span slot="container-end">
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
									<ButtonUI brown icon="arrow">
										Подробнее
									</ButtonUI>
								</Controllers>
							</span>
						</Swiper>
					</Info>
					{isLoaded && (
						<Swiper {...imagesSwiperConfig}>
							{mainSlider.map((slide) => (
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
