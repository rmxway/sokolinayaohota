import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import Image from 'next/image';
import styled from 'styled-components';

import { Container } from '@/components/Layout';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	background-image: ${theme.colors.gradients.golden};
	padding: 80px 0;

	h1 {
		color: ${theme.colors.disabled};
	}

	${media.lessThan('sm')`
		padding: 0;
		padding-top: 40px;

		${Container} {
			padding: 0;
		}
	`}
`;

export const Info = styled.div`
	display: flex;
	width: 100%;
	color: ${theme.colors.brown};
	overflow: hidden;

	.swiper {
		width: 100%;
	}

	p {
		display: -webkit-box;
		font-size: 24px;
		-webkit-line-clamp: 9;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	${media.lessThan('md')`
		p {
			-webkit-line-clamp: 5;
			font-size: 20px;
		}
	`}

	${media.lessThan('sm')`
		padding: 20px;
	`}
`;

export const SliderImage = styled(Image)`
	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 520px;
	border-radius: ${theme.radius.blockRadius};

	${media.lessThan('sm')`
		height: 100%;
		min-height: 400px;
	`}
`;

export const SlideContainer = styled.div`
	display: grid;
	grid-template-columns: 400px 1fr;
	margin: 20px 0;
	width: 100%;
	gap: 80px;

	${media.lessThan('lg')`
		grid-template-columns: 350px 1fr;
		gap: 40px;
	`}

	${media.lessThan('md')`
		grid-auto-flow: column;
		grid-template-columns: 1fr;
		grid-template-rows: 300px 1fr;
		margin: 0;
		gap: 20px;
	`}

	${media.lessThan('sm')`
		grid-template-rows: 350px 1fr;

		${SliderImage} {
			border-radius: 0;
		}
	`}

	.swiper {
		width: 100%;
	}
`;

export const Controllers = styled.div`
	position: absolute;
	bottom: 10px;
	left: 0;
	width: 400px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 2;

	${media.lessThan('lg')`
		width: 350px;
	`}

	${media.lessThan('md')`
		width: 100%;
	`}

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
			border: 1px solid ${theme.colors.brown};
		}

		.swiper-pagination-bullet-active {
			background: ${theme.colors.brown};
		}
	}
`;

export const animateTitle = {
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
