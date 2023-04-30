import { motion, Variants } from 'framer-motion';
import styled, { css } from 'styled-components';

import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const ModalWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #f3f0ecc2;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	z-index: 100;
	padding: 20px;
	touch-action: pan-y;
	cursor: pointer;
	overflow-y: auto;
	backdrop-filter: blur(8px);

	${media.lessThan('xs')`
		padding: 0;
	`}
`;

export const ModalWindow = styled(motion.div)<{ $fullscreen?: boolean }>`
	position: relative;
	z-index: 1;
	background-color: #fff;
	padding: 40px;
	width: auto;
	margin: auto;
	min-width: 400px;
	max-width: 100%;
	min-height: 250px;
	border-radius: 20px;
	box-shadow: ${theme.layout.shadow.big};
	cursor: default;

	.modal-header {
		margin-bottom: 20px;
	}

	${(props) =>
		props.$fullscreen &&
		css`
			width: 100%;
			height: 100%;
			margin: 0;
			border-radius: 0;
			display: flex;
			align-items: flex-start;
			justify-content: center;
		`}

	${media.lessThan('md')`
		margin-top: 0;
	`}

	${media.lessThan('xs')`
		min-width: auto;
		width: 100%;
		min-height: 100%;
		margin: 0;
		padding: 52px 20px;
		border-radius: 0;
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
		transition: { duration: 0.3, staggerChildren: 1, delayChildren: 0.3 },
	},
};

export const animationWindow: Variants = {
	start: {
		opacity: 0,
		top: 20,
	},
	end: {
		opacity: 1,
		top: 0,
		transition: {
			duration: 0.7,
			type: 'spring',
			stiffness: 200,
			damping: 15,
		},
	},
};

export default ModalWindow;
