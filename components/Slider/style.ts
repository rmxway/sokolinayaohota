import styled from 'styled-components';

import { WrapperFetchedImage } from '@/components/Layout';
import { defaultTheme as theme, media } from '@/theme';

export const SliderWrapper = styled.div`
	position: relative;	
`;

export const SliderStyle = styled.div`
	display: flex;
	grid-template-columns: 1fr;
	max-height: 70vh;
	min-height: 500px;
	max-width: 100%;

	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	overflow: hidden;

	.swiper {
		width: 100%;
	}

	${WrapperFetchedImage} {
		height: 100%;

		img {
			height: 100%;
			max-height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}

	${media.lessThan('lg')`
		min-height: auto; 

		.swiper-slide,
		.swiper,
		.swiper-wrapper {			
			max-height: 100%;
		}

		${WrapperFetchedImage} {
			img {
				object-fit: content;
			}
		}
	`}
`;

export const ThumbnailsStyle = styled.div`
	position: relative;
	height: 100px;

	background-image: ${theme.colors.gradients.black()};
	padding: 8px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;

	.swiper {
		height: 100%;
	}

	.swiper-slide {
		opacity: 0.6;
		transition: all 0.2s;
		cursor: pointer;
		border: 2px solid transparent;
		border-radius: 8px;
		overflow: hidden;

		&:hover {
			opacity: 1;
		}
	}

	.swiper-slide-thumb-active {
		border-color: ${theme.colors.solid.primary};
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
		min-height: 80px;
		height: 12vw;
	`}
`;
