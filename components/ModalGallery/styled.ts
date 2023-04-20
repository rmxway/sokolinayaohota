import styled from 'styled-components';

import { SliderImage } from '@/components/sections/main-page/SliderBlock/styled';
import { defaultTheme as theme } from '@/theme';

export const Wrapper = styled.div`
	display: grid;
	gap: 20px;
	max-width: 100%;
	margin: 0 auto;
	grid-template-columns: minmax(500px, 1440px);
	grid-template-rows: minmax(auto, 80vh) 100px;
	grid-template-areas:
		'slider'
		'thumbnail';
`;

export const Slider = styled.div`
	.swiper-slide,
	.swiper,
	.swiper-wrapper {
		height: 100%;
	}

	grid-area: slider;

	${SliderImage} {
		object-fit: cover;
		height: 100%;
	}
`;

export const Thumbnails = styled.div`
	position: relative;
	height: 100%;

	grid-area: thumbnail;

	.swiper {
		height: 100%;
	}

	.swiper-slide {
		opacity: 0.8;
		transition: all 0.2s;
		cursor: pointer;
		border: 4px solid transparent;
		border-radius: 8px;
		overflow: hidden;

		&:hover {
			opacity: 1;
		}
	}

	.swiper-slide-thumb-active {
		border-color: ${theme.colors.disabled};
		opacity: 1;
	}

	${SliderImage} {
		border-radius: 0;
		object-fit: cover;
		height: 100%;
	}
`;
