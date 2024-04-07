import { motion, Variants } from 'framer-motion';
import styled, { css } from 'styled-components';

import { SliderWrapper } from '@/components/Slider/styled';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const ModalWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #15120fc2;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	z-index: 100;
	touch-action: pan-y;
	cursor: pointer;
	overflow-y: auto;
	backdrop-filter: blur(8px);

	${media.lessThan('sm')`
		padding: 0;
	`}

	${SliderWrapper} {
		background-image: none;
		border: none;
		border-radius: 0;
		padding: 0;
	}
`;

type ModalWindowTypes = {
	$fullscreen?: boolean;
	$gallery?: boolean;
};

export const ModalWindow = styled(motion.div)<ModalWindowTypes>`
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

	${(props) =>
		props.$gallery &&
		css`
			background: none;
			padding: 0;
		`}

	${(props) =>
		!props.$fullscreen &&
		!props.$gallery &&
		media.lessThan('md')`
	margin-top: 0;
	` &&
		media.lessThan('sm')`
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
	color: ${theme.colors.gray.$8};
	cursor: pointer;
	background-color: #ddddddaa;
	transition: all 0.2s;
	opacity: 0.8;
	z-index: 10;
	line-height: 16px;

	&:hover {
		opacity: 1;
	}

	&:active {
		opacity: 1;
	}
`;

export const animationWrapper: Variants = {
	start: { opacity: 0, transition: { delay: 0.2 } },
	end: {
		opacity: 1,
		transition: { duration: 0.4, staggerChildren: 1, delayChildren: 0.3 },
	},
};

export const animationWindow: Variants = {
	start: {
		opacity: 0,
	},
	end: {
		opacity: 1,
		transition: {
			duration: 0.3,
			type: 'tween',
		},
	},
};

export default ModalWindow;
