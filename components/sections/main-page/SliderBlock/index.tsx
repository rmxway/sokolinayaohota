import 'swiper/css/pagination';

import { LayoutGroup, motion } from 'framer-motion';
import { FC, memo, useMemo, useState } from 'react';
import { Link } from 'react-router';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { MainSliderType } from '@/types/types';
import { Icon } from '@/components';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Container, Flexbox, Grid, Title } from '@/components/Layout';
import { Slider } from '@/components/Slider';
import { ButtonUI, Preloader } from '@/components/ui';

import {
	animateText,
	animateTitle,
	ContainerForSlider,
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
	const [slideIndex, setSlideIndex] = useState<number>(0);
	const [isLoaded, setLoaded] = useState(false);

	const typesPath = data?.map((item) => item.tag);
	const currentPath = typesPath?.[slideIndex]
		? `/halls/${typesPath[slideIndex]}`
		: '/halls/big-hall';

	const currentImages = useMemo(
		() => (data ? data[slideIndex].images : []),
		[data, slideIndex],
	);

	const mainSwiperConfig: SwiperProps = {
		speed: 200,
		spaceBetween: 20,
		slidesPerView: 1,
		autoHeight: true,
		loop: true,
		modules: [Thumbs, Pagination, Navigation],
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

	if (error || !data)
		return (
			<Wrapper>
				<Container $grid>
					<ErrorMessage
						message={!data ? 'Данные не найдены' : error}
					/>
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
							<Link to={currentPath}>
								<ButtonUI $brown $icon="arrow">
									Подробнее
								</ButtonUI>
							</Link>
						</Controllers>
					</Info>

					{isLoaded && (
						<ContainerForSlider>
							<Slider
								key={currentPath}
								images={currentImages}
								controls
								thumbs
								countThumbsPerView={5}
							/>
						</ContainerForSlider>
					)}
				</SlideContainer>
			</Container>
		</Wrapper>
	);
});

export default SliderBlock;
