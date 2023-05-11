import 'swiper/scss';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import { defaultTheme as theme } from '@/theme/defaultTheme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: 80px 0;
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

export const Item = styled(motion(Image))<{ $big?: boolean }>`
	position: relative;
	top: 0;

	${(props) =>
		props.$big &&
		css`
			grid-column-start: 1;
			grid-column-end: 2;
			grid-row-start: 1;
			grid-row-end: 3;
		`}

	${media.lessThan('md')`
		grid-column-start: auto;
		grid-column-end: auto;
		grid-row-start: auto;
		grid-row-end: auto;
	`} 

	max-width: 100%;
	max-height: 100%;
	border-radius: ${theme.radius.blockRadius};
	box-shadow: ${theme.layout.shadow.basic};
	object-fit: cover;
	cursor: pointer;
	opacity: 0.8;
	transition: 0.3s;

	&:hover {
		top: -2px;
		box-shadow: ${theme.layout.shadow.gallery};
		opacity: 1;
	}
`;

export default Wrapper;
