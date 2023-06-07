import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';

import { Variants } from 'framer-motion';
import styled from 'styled-components';

import {
	Container,
	Grid,
	Title,
	WrapperFetchedImage,
} from '@/components/Layout';
import { Ellipsis } from '@/components/Layout/Preloader/styled';
import { SliderStyle, ThumbnailsStyle } from '@/components/Slider/style';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	background-image: ${theme.colors.gradients.golden()};
	padding: 80px 0;

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

export const Info = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	color: ${theme.colors.solid.brown};
	padding-bottom: 72px;

	.swiper {
		width: 100%;
	}

	${Title} {
		font-size: 3.5rem;
		margin: 0;
	}

	p {
		display: -webkit-box;

		font-size: 1.35rem;
		-webkit-line-clamp: 12;
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
			font-size: 1.125rem;
		}
	`}

	${media.lessThan('md')`
		margin-bottom: 20px;
	`}

	${media.lessThan('sm')`
		padding: 0 20px;
	`}
`;

export const SlideContainer = styled.div<{ $isLoaded: boolean }>`
	position: relative;
	display: grid;
	grid-template-columns: 500px 1fr;
	bottom: -4px;
	width: 100%;
	gap: 80px;
	opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
	transition: opacity 0.5s;

	${SliderStyle} {
		min-height: auto;
		height: 380px;

		${WrapperFetchedImage} {
			width: 100%;
			height: 100%;
			border-radius: 0;

			img {
				object-fit: cover;
			}
		}
	}

	${media.lessThan('xl')`
		grid-template-columns: 400px 1fr;
		gap: 40px;
	`}

	${media.lessThan('lg')`
		grid-template-columns: 350px 1fr;		
	`}

	${media.lessThan('md')`
		display: block;
		height:	auto;
	`}

	${media.lessThan('sm')`
		${SliderStyle} {
			border-radius: 0;
			height: 350px;
		}

		${ThumbnailsStyle} {
			border-radius: 0;
		}
	`}

	.swiper {
		width: 100%;
	}
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
			border: 1px solid ${theme.colors.solid.brown};
		}

		.swiper-pagination-bullet-active {
			background: ${theme.colors.solid.brown};
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

export const animateText = {
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

export default Wrapper;
