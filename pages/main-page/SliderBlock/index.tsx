import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { FC } from 'react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

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

const sliderConfig: SwiperProps = {
	modules: [Navigation, Pagination, EffectFade],
	speed: 500,
	spaceBetween: 100,
	slidesPerView: 1,
	lazyPreloadPrevNext: 2,
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev',
	},
	pagination: {
		clickable: true,
		el: '.slider-pagination',
		renderBullet() {
			return `<span class="dot swiper-pagination-bullet"></span>`;
		},
		type: 'bullets',
	},
};

const SliderBlock: FC = () => (
	<Wrapper>
		<Container>
			<Swiper {...sliderConfig}>
				{mainSlider.map((slide) => (
					<SwiperSlide key={slide.alt}>
						<SlideContainer>
							<Info>
								<Title>{slide.title}</Title>
								<p>{slide.description}</p>
							</Info>
							<SliderImage
								src={slide.img}
								alt={slide.alt}
								width={2000}
								height={2000}
							/>
						</SlideContainer>
					</SwiperSlide>
				))}
				<span slot="container-start">
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
		</Container>
	</Wrapper>
);

export { SliderBlock };
export default SliderBlock;
