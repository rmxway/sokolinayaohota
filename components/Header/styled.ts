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
	overflow: ${(props) => (props.$isMainPage ? 'hidden' : 'visible')};
	background-image: ${theme.colors.gradients.black()};

	${media.lessThan('md')`
		background: #fff;
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
	z-index: 100;

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
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: bottom;
	z-index: 0;
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
	min-height: 500px;
	z-index: 1;
	padding: 40px 0;

	${media.lessThan('lg')`
		min-height: auto;
	`}

	h1,
	h2 {
		margin: 0;
	}

	h2 {
		font-size: 72px;
	}
`;

export default Wrapper;
