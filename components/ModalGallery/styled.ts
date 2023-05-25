import styled from 'styled-components';

import { WrapperFetchedImage } from '@/components/Layout';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	display: grid;
	gap: 20px;
	max-width: 100%;
	grid-template-columns: minmax(100%, 1440px);
	grid-template-rows: minmax(400px, 70vh) 100px;
	height: 100%;

	${media.lessThan('md')`
		grid-template-rows: 70vh 100px;
	`}

	${media.lessThan('sm')`
		grid-template-rows: max-content 80px;
	`}
`;

export const Slider = styled.div`
	.swiper-slide,
	.swiper,
	.swiper-wrapper {
		height: 100%;
	}

	${WrapperFetchedImage} {
		height: 100%;
	}

	border-radius: ${theme.radius.blockRadius};
	overflow: hidden;

	${media.lessThan('md')`
		.swiper-slide,
		.swiper,
		.swiper-wrapper {			
			max-height: 100%;
		}
	`}
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
		border-color: ${theme.colors.solid.disabled};
		opacity: 1;
	}

	${WrapperFetchedImage} {
		min-height: auto;
		border-radius: 0;
		height: 100%;
	}
`;
