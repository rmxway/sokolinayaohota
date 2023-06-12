import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Navigation, Pagination, Swiper as TypeSwiper, Thumbs } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { MainSliderType } from '@/@types/types';
import { Icon } from '@/components';
import { ErrorMessage } from '@/components/ErrorMessage';
import {
	Container,
	Flexbox,
	Grid,
	Preloader,
	Title,
} from '@/components/Layout';
import { Slider } from '@/components/Slider';
import { ButtonUI } from '@/components/ui';

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

export const SliderBlock: FC<SliderBlockProps> = ({ data, error }) => {
	const [thumbSwiper, setThumbSwiper] = useState<TypeSwiper>();
	const [slideIndex, setSlideIndex] = useState<number>(0);
	const [isLoaded, setLoaded] = useState(false);
	const [currentPath, setCurrentPath] = useState('/halls/big-hall');

	const typesPath = data?.map((item) => item.tag);

	const mainSwiperConfig: SwiperProps = {
		speed: 300,
		spaceBetween: 20,
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
			if (typesPath)
				setCurrentPath(`/halls/${typesPath[swiper.realIndex]}`);
		},
		onInit: () => {
			setLoaded(true);
		},
	};

	const imagesSwiperConfig: SwiperProps = {
		modules: [Thumbs],
		speed: 600,
		allowTouchMove: false,
		spaceBetween: 20,
		slidesPerView: 1,
		onSwiper: (swiper) => {
			setThumbSwiper(swiper);
		},
	};

	if (error)
		return (
			<Wrapper>
				<Container grid>
					<ErrorMessage message={error} />
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
							{data?.map(({ title, description }, index) => (
								<SwiperSlide key={title}>
									<Grid direction="row" gap={32}>
										<AnimatePresence>
											<>
												<Title
													variants={animateTitle}
													initial="hidden"
													animate={
														slideIndex === index
															? 'visible'
															: 'hidden'
													}
													color="brown"
												>
													{title}
												</Title>
												<motion.p
													variants={animateText}
													initial="hidden"
													animate={
														slideIndex === index
															? 'visible'
															: 'hidden'
													}
												>
													{description}
												</motion.p>
											</>
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
							<Link href={currentPath}>
								<ButtonUI brown icon="arrow">
									Подробнее
								</ButtonUI>
							</Link>
						</Controllers>
					</Info>
					{isLoaded && (
						<Swiper {...imagesSwiperConfig}>
							{data?.map(({ tag, images }) => (
								<SwiperSlide key={tag}>
									<Slider
										images={images}
										countThumbsPerView={5}
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
