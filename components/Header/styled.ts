import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

import { Button } from '@/components/ui/Button/styled';
import { defaultTheme as theme, media } from '@/theme';

export const Wrapper = styled.div<{ $isMainPage: boolean }>`
	position: relative;
	display: block;
	display: flex;
	width: 100%;
	flex-direction: column;
	overflow: hidden;
	
	${media.lessThan('md')`
		padding-top: 88px;
	`}
`;

export const Header = styled(motion.header)`
	position: relative;
	padding: 12px 0;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 1) 0%,
		#fff 32.71%,
		rgba(255, 255, 255, 0.9) 65.04%,
		rgba(248, 248, 248, 0.98) 82.29%
	);

	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	z-index: 200;

	${media.lessThan('md')`
		position: fixed;
		top: 0;	
		width: 100%;
		box-shadow: ${theme.layout.shadow.big};

		${Button} {
			display: none;
		}
	`}
`;

export const BannerImage = styled(Image)`
	position: fixed;
	top: 0;
	left: -10px;
	width: 110%;
	height: 100%;
	object-position: center;
	object-fit: cover;
	z-index: -10;
	filter: blur(4px);
`;

export const Banner = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	justify-content: center;
	text-align: center;
	gap: 40px;
	flex-wrap: nowrap;
	min-height: 600px;
	z-index: 2;
	padding: 40px 0;

	${media.lessThan('lg')`
		min-height: 400px;
	`}
`;

export default Wrapper;
