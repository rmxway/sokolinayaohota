import styled from 'styled-components';

import { WrapperFetchedImage } from '@/components/Layout';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	display: block;
	max-width: 1300px;
`;

export const Slider = styled.div`
	display: flex;
	max-height: 70vh;

	margin-bottom: 20px;

	${WrapperFetchedImage} {
		height: 100%;

		img {
			height: 100%;
			max-height: 100%;
			object-fit: contain;
			object-position: center;
		}
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
	height: 100px;

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

		img {
			object-fit: cover;
			height: 100%;
		}
	}

	${media.lessThan('md')`
		height: 80px;
	`}
`;
