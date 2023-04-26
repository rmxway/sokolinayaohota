import styled from 'styled-components';

import { SliderImage } from '@/components/sections/main-page/SliderBlock/styled';
import { defaultTheme as theme } from '@/theme';

export const Wrapper = styled.div`
	display: grid;
	gap: 20px;
	max-width: 100%;
	grid-template-columns: minmax(100%, 1440px);
	grid-template-rows: auto 100px;	
`;

export const Slider = styled.div`
	.swiper-slide,
	.swiper,
	.swiper-wrapper {
		height: 100%;
		max-height: 70vh;
		min-height: 500px;
	}

	${SliderImage} {
		object-fit: cover;
		height: 100%;
	}
`;

export const Thumbnails = styled.div`
	position: relative;
	height: 100%;

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
