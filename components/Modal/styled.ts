import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';

export const ModalWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: #f3f0ecc2;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	cursor: pointer;
	backdrop-filter: blur(10px);
`;

export const ModalWindow = styled(motion.div)`
	position: relative;
	z-index: 1;
	background-color: #fff;
	padding: 40px;
	min-width: 500px;
	min-height: 250px;
	border-radius: 20px;
	box-shadow: ${theme.layout.shadow.big};
	cursor: default;
`;

export const CloseButton = styled(motion.button)`
	position: absolute;
	top: 12px;
	right: 12px;
	height: 40px;
	width: 40px;
	border-radius: 40px;
	background-color: ${theme.colors.gray.$1};
	color: ${theme.colors.disabled};
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		opacity: 1;
	}
`;

export const animationWrapper: Variants = {
	start: { opacity: 0 },
	end: {
		opacity: 1,
		transition: { duration: 0.3, staggerChildren: 0.5, delayChildren: 0.2 },
	},
};

export const animationWindow: Variants = {
	start: { opacity: 0, y: -30 },
	end: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			type: 'spring',
			stiffness: 200,
			damping: 15,
		},
	},
};

export default ModalWindow;
