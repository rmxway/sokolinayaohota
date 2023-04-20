import { motion, Variants } from 'framer-motion';
import styled, { css } from 'styled-components';

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

export const ModalWindow = styled(motion.div)<{ $fullscreen?: boolean }>`
	position: relative;
	z-index: 1;
	background-color: #fff;
	padding: 40px;
	min-width: 400px;
	min-height: 250px;
	border-radius: 20px;
	margin: 0 40px;
	box-shadow: ${theme.layout.shadow.big};
	cursor: default;

	.modal-header {
		margin-bottom: 20px;
	}

	${props => props.$fullscreen && css`
		width: 100%;
		height: 100%;
		margin: 0;
		border-radius: 0;
		display: flex;
		align-items: flex-start;
		overflow-y: auto;
	`}
`;

export const CloseButton = styled(motion.button)`
	position: absolute;
	top: 8px;
	right: 8px;
	height: 32px;
	width: 32px;
	border-radius: 40px;
	color: ${theme.colors.disabled};
	cursor: pointer;
	transition: all 0.2s;
	opacity: 0.8;

	&:hover {
		opacity: 1;
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
