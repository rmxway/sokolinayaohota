import styled, { css } from 'styled-components';

import { WrapperFetchedImage } from '@/components/Layout';
import { Ellipsis } from '@/components/ui/Preloader/styled';
import { defaultTheme as theme, media } from '@/theme';

export const SliderShadow = styled.div<{ $isModal?: boolean }>`
	position: relative;
	width: 100%;
	height: 100%;

	${({ $isModal }) =>
		!$isModal &&
		css`
			box-shadow: ${theme.layout.shadow.basic};
			border-radius: 20px;
		`}
`;

export const SliderWrapper = styled.div`
	position: relative;
	height: 100%;
	text-align: center;
	border-radius: 20px;
	overflow: hidden;

	${Ellipsis} {
		margin: auto;
	}
`;

export const SliderStyle = styled.div<{ $isModal?: boolean }>`
	${({ $isModal }) => css`
		position: relative;
		width: 100%;
		display: flex;
		min-height: 1px;
		max-height: 80vh;
		object-fit: contain;
		flex-grow: 1;

		${WrapperFetchedImage} {
			height: 100%;

			img {
				height: 100%;
				max-height: 100%;
				object-fit: ${$isModal ? 'contain' : 'cover'};
				object-position: center;
			}
		}

		${media.lessThan('md')`
			min-height: 0;
			
			.swiper-slide,
			.swiper,
			.swiper-wrapper {			
				max-height: 100%;
			}

			${WrapperFetchedImage} {
				width: 100%;
			}
		`}
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
		transition: opacity 0.2s;
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

export const LoadingWrapper = styled.div<{ $loaded: boolean }>`
	display: ${(props) => (props.$loaded ? 'flex' : 'none')};
	max-height: 100%;
	height: 100%;
	opacity: ${(props) => (props.$loaded ? 1 : 0)};
	transition: 0.2s all;
	flex-direction: column;

	.btn-slider {
		opacity: 0;
	}

	${SliderStyle}:hover {
		.btn-slider {
			opacity: 1;
		}
	}

	${ThumbnailsStyle}:hover {
		.btn-slider {
			opacity: 1;
		}
	}
`;
