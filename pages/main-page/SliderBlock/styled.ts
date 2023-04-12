import Image from 'next/image';
import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';

export const Wrapper = styled.div`
	position: relative;
	background-image: ${theme.colors.gradients.golden};
	padding: 80px 0;

	h1 {
		color: ${theme.colors.disabled};
	}
`;

export const SlideContainer = styled.div`
	display: flex;
	flex-wrap: nowrap;
	gap: 80px;
	margin: 20px 0;
	max-width: 100%;
	margin-right: 30px;
`;

export const Info = styled.div`
	display: flex;
	width: 400px;
	flex-shrink: 0;

	p {
		display: -webkit-box;
		font-size: 24px;
		-webkit-line-clamp: 9;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
`;

export const SliderImage = styled(Image)`
	flex-grow: 1;
	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 520px;
	flex-shrink: 1;

	border-radius: ${theme.radius.blockRadius};
	// box-shadow: ${theme.layout.shadow.basic};
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

export default Wrapper;