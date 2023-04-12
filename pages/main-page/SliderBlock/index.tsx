import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import {
	Controller,
	EffectFade,
	Navigation,
	Pagination,
	Swiper as TypeSwiper,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, Flexbox, Title } from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { mainSlider } from '@/mock/main-slider';

import {
	Controllers,
	Info,
	SlideContainer,
	SliderImage,
	Wrapper,
} from './styled';

const animateTitle = {
	hidden: {
		y: -20,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.35,
			duration: 0.1,
			stiffness: 150,
			damping: 12,
			type: 'spring',
		},
	},
};

const animateText = {
	hidden: {
		y: 20,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.3,
			duration: 0.6,
			type: 'easy',
		},
	},
};

const SliderBlock: FC = () => {
	const [thumbSwiper, setThumbSwiper] = useState<TypeSwiper>();
	const [slideIndex, setSlideIndex] = useState(0);

	return (
		<Wrapper>
			<Container>
				<SlideContainer>
					<Info>
						<Swiper
							speed={300}
							spaceBetween={100}
							slidesPerView={1}
							resizeObserver
							modules={[Controller, Pagination, Navigation]}
							controller={{
								control:
									thumbSwiper && !thumbSwiper.destroyed
										? thumbSwiper
										: null,
							}}
							pagination={{
								clickable: true,
								el: '.slider-pagination',
								renderBullet() {
									return `<span class="dot swiper-pagination-bullet"></span>`;
								},
								type: 'bullets',
							}}
							navigation={{
								nextEl: '.btn-next',
								prevEl: '.btn-prev',
							}}
							onSlideChange={(swiper) => {
								setSlideIndex(swiper.realIndex);
							}}
						>
							{mainSlider.map((slide, index) => (
								<SwiperSlide key={slide.alt}>
									<Flexbox
										direction="column"
										gap={32}
										style={{ width: 400 }}
									>
										<AnimatePresence>
											{slideIndex === index && (
												<>
													<Title
														variants={animateTitle}
														initial="hidden"
														animate="visible"
														exit="visible"
														layout
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
									</Flexbox>
								</SwiperSlide>
							))}
							<span slot="container-end">
								<Controllers>
									<Flexbox>
										<div className="btn-prev icofont icofont-arrow-simple" />
										<div className="btn-next icofont icofont-arrow-simple" />
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

					<Swiper
						modules={[Controller, EffectFade]}
						speed={500}
						simulateTouch={false}
						watchSlidesProgress
						resizeObserver
						effect="fade"
						spaceBetween={20}
						slidesPerView={1}
						lazyPreloadPrevNext={2}
						slidesOffsetAfter={20}
						slidesOffsetBefore={20}
						onSwiper={(swiper) => {
							setThumbSwiper(swiper);
						}}
					>
						{mainSlider.map((slide) => (
							<SwiperSlide key={slide.alt}>
								<SliderImage
									src={slide.img}
									alt={slide.alt}
									width={2000}
									height={2000}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</SlideContainer>
			</Container>
		</Wrapper>
	);
};

export { SliderBlock };
export default SliderBlock;
