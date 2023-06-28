import styled from 'styled-components';

import { WrapperFetchedImage } from '@/components/Layout';
import { Ellipsis } from '@/components/Layout/Preloader/styled';
import { defaultTheme as theme, media } from '@/theme';

export const SliderWrapper = styled.div`
	position: sticky;
	text-align: center;
	background-color: ${theme.colors.gray.$1};
	border-radius: 20px;
	border: 1px solid ${theme.colors.gray.$4};
	overflow: hidden;

	${Ellipsis} {
		margin: auto;
	}
`;

export const LoadingWrapper = styled.div<{ $loaded: boolean }>`
	display: ${(props) => (props.$loaded ? 'block' : 'none')};
	height: 100%;
	opacity: ${(props) => (props.$loaded ? 1 : 0)};
	padding: ${(props) => (props.$loaded ? '0' : '40px')};
	transition: 0.2s all;
`;

export const SliderStyle = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	grid-template-columns: 1fr;
	height: calc(100% - 80px);
	max-height: 70vh;
	min-height: 200px;

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

	${media.lessThan('md')`
		min-height: 0;
		height: 50vw;

		.swiper-slide,
		.swiper,
		.swiper-wrapper {			
			max-height: 100%;
		}

		${WrapperFetchedImage} {
			width: 100%;
		}
	`}
`;

export const ThumbnailsStyle = styled.div`
	position: relative;
	height: 80px;
	max-height: 80px;
	min-height: 60px;
	width: 100%;
	z-index: 1;

	background-image: ${theme.colors.gradients.black()};
	padding: 8px;

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
		border-color: ${theme.colors.solid.white};
		opacity: 1;
	}

	${WrapperFetchedImage} {
		min-height: auto;
		height: 100%;

		img {
			object-fit: cover;
			height: 100%;
		}
	}

	${media.lessThan('sm')`
		height: 20vw;
	`}
`;
