import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { FC, memo, useRef, useState } from 'react';
import { Swiper as TypeSwiper } from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { MainSliderType } from '@/@types/types';
import { Icon } from '@/components';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Container, Flexbox, Grid, Title } from '@/components/Layout';
import { Slider } from '@/components/Slider';
import { ButtonUI, Preloader } from '@/components/ui';

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

export const SliderBlock: FC<SliderBlockProps> = memo(({ data, error }) => {
	const [thumbSwiper, setThumbSwiper] = useState<TypeSwiper>();
	const [slideIndex, setSlideIndex] = useState<number>(0);
	const [isLoaded, setLoaded] = useState(false);
	const currentPath = useRef<string>('/halls/big-hall');

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
		onSlideChange: (swiper) => {
			setSlideIndex(swiper.realIndex);

			if (typesPath)
				currentPath.current = `/halls/${typesPath[swiper.realIndex]}`;
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

	if (error || !data)
		return (
			<Wrapper>
				<Container $grid>
					<ErrorMessage message={!data ? 'Данные не найдены' : error} />
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
									<Grid $direction="row" $gap={32}>
										<LayoutGroup key={title}>
											<Title
												layout
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
												layout
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
										</LayoutGroup>
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
							<Link href={currentPath.current}>
								<ButtonUI $brown $icon="arrow">
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
										controls
										thumbs
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
});

export default SliderBlock;
