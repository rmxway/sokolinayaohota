import 'swiper/css';

import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

import { WrapperFetchedImage } from '@/components/Layout/FetchedImage';
import { defaultTheme as theme } from '@/theme/defaultTheme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 80px 0;

	${media.lessThan('lg')`
		padding: 40px 0;
	`}
`;

export const Grid = styled.div`
	display: grid;
	gap: 40px;
	grid-template-columns: 2fr repeat(4, 1fr);
	grid-template-rows: 150px 150px;

	${media.lessThan('lg')`
		gap: 24px;
		grid-template-rows: 130px 130px;
	`}

	${media.lessThan('md')`
		gap: 20px;
		grid-template-columns: repeat(3, 1fr);		
		grid-template-rows: repeat(3, 20vw);
	`}
`;

export const GalleryImage = styled(motion.div)`
	position: relative;
	top: 0;

	border-radius: ${theme.radius.borderRadius};
	overflow: hidden;
	box-shadow: none;

	cursor: zoom-in;
	transition: 0.2s;

	&.big {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 3;
	}

	${WrapperFetchedImage} {
		width: 100%;
		height: 100%;
	}

	&:hover {
		top: -2px;
		box-shadow: ${theme.layout.shadow.gallery};
	}

	${media.lessThan('md')`
		&, &.big {	
			grid-column-start: auto;
			grid-column-end: auto;
			grid-row-start: auto;
			grid-row-end: auto;
		}
	`}
`;

export const galleryImageAnimation: Variants = {
	start: {
		scale: 0,
	},
	end: {
		scale: 1,
	},
};

export default Wrapper;
