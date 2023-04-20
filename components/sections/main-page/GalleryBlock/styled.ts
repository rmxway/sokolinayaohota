import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme/defaultTheme';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: 80px 0;
`;

export const Grid = styled.div`
	display: grid;
	width: 100%;
	gap: 40px;
	grid-template-columns: 350px repeat(4, 1fr);
	grid-template-rows: 150px 150px;
	grid-template-areas:
		'A B B B B'
		'A B B B B';
`;

export const Item = styled(motion(Image))<{ $big?: boolean }>`
	position: relative;
	top: 0;
	grid-area: ${(props) => (props.$big ? 'A' : '')};
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
