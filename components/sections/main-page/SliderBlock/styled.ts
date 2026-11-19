import { Variants } from 'framer-motion';
import styled from 'styled-components';

import { Container, Grid, Title } from '@/components/Layout';
import { SliderStyle, SliderWrapper } from '@/components/Slider/styled';
import { Ellipsis } from '@/components/ui/Preloader/styled';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	background-image: ${theme.colors.gradients.golden()};
	background-color: ${theme.colors.solid.primary};
	padding: 80px 0;
	width: 100%;

	${Ellipsis} {
		position: absolute;
		left: calc(50% - 30px);
		top: calc(50% - 30px);
	}

	h1 {
		color: ${theme.colors.solid.disabled};
	}

	${media.lessThan('lg')`
		padding: 40px 0;
	`}

	${media.lessThan('sm')`
		padding: 0;
		padding-top: 40px;
	
		${Container} {
			padding: 0;
		}
	`}
`;

export const SlideContainer = styled.div<{ $isLoaded: boolean }>`
	position: relative;
	display: grid;
	bottom: -4px;
	width: 100%;
	gap: 80px;
	grid-auto-flow: column;
	grid-template-columns: 500px 1fr;
	opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
	transition: opacity 0.5s;

	${media.lessThan('xl')`
		grid-template-columns: 500px 1fr;
		gap: 40px;
	`}

	${media.lessThan('lg')`
		grid-template-columns: 400px 1fr;
	`}

	${media.lessThan('md')`
		grid-template-columns: 1fr;
		grid-auto-flow: row;
	`}
`;

export const Info = styled.div`
	position: relative;
	display: block;
	color: ${theme.colors.solid.brown};
	padding-bottom: 72px;
	min-width: 1%;

	p {
		display: -webkit-box;

		font-size: 1.35rem;
		line-clamp: 12;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	${media.lessThan('lg')`
		${Grid} {
			gap: 10px;
		}

		${Title} {
			font-size: 2.5rem;
		}

		p {
			-webkit-line-clamp: 8;
			font-size: 1.15rem;
		}
	`}

	${media.lessThan('md')`
		margin-bottom: 20px;
	`}

	${media.lessThan('sm')`
		padding-left: 20px;
		padding-right: 20px;
	`}
`;

export const ContainerForSlider = styled.div`
	display: block;
	min-width: 1%;

	${SliderStyle} {
		height: 350px;
	}

	.swiper {
		width: 100%;
	}

	.swiper-slide {
		height: auto;
	}

	${media.lessThan('sm')`
		${SliderStyle} {
			height: 275px;		
		}
		${SliderWrapper} {
			border-radius: 0;			
		}
	`}

	${media.lessThan('md')`	
		${SliderStyle} {
			height: 400px;
		}
	`}
`;

export const Controllers = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 2;

	.btn-next,
	.btn-prev {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		cursor: pointer;
		opacity: 0.5;

		&:hover {
			opacity: 1;
		}

		&.swiper-button-disabled {
			pointer-events: none;
			cursor: default;
		}
	}

	.btn-prev {
		transform: scale(-1, 1);
	}

	.slider-pagination {
		margin: 0;
		margin-bottom: 6px;
		padding: 0;

		.dot {
			margin: 0 6px;
			width: 10px;
			height: 10px;
			opacity: 1;
			background: none;
			border: 1px solid ${theme.colors.solid.secondary};
		}

		.swiper-pagination-bullet-active {
			background: ${theme.colors.solid.secondary};
		}
	}

	${media.lessThan('sm')`
		padding: 0 20px;
	`}
`;

export const animateTitle: Variants = {
	hidden: {
		y: -20,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.35,
			duration: 0.5,
			type: 'tween',
		},
	},
};

export const animateText: Variants = {
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
			type: 'tween',
			ease: 'easeOut',
		},
	},
};

export default Wrapper;
