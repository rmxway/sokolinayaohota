import { motion, Variants } from 'framer-motion';
import styled, { css } from 'styled-components';

import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const DesktopNav = styled.div`
	display: flex;
	align-items: center;
	justify-items: center;
	margin: 10px 40px 5px 0;
	transition: right 2s;
	cursor: default;

	${media.lessThan('md')`
		display: none;
	`}
`;

export const BurgerButton = styled.button<{ $open: boolean }>`
	position: relative;
	display: none;

	width: 22px;
	height: 22px;
	margin-left: auto;
	padding: 0;
	cursor: pointer;

	span {
		position: relative;
		top: 0;
		display: block;
		width: 100%;
		height: 2px;
		border-radius: 10px;
		background-color: ${theme.colors.solid.brown};
		transition: all 0.25s ease-in-out;
		transform-origin: 50%;
	}

	.second-line {
		margin: 6px 0;
	}

	${(props) =>
		props.$open &&
		css`
			.first-line {
				top: 8px;
				transform: rotate(45deg);
				width: 110%;
			}

			.second-line {
				opacity: 0;
				width: 0;
			}

			.third-line {
				top: -8px;
				transform: rotate(-45deg);
				width: 110%;
			}
		`}

	${media.lessThan('md')`
		display: block;
	`}
`;

export const MobileNav = styled(motion.div)`
	position: fixed;
	top: 0;
	bottom: 0;
	width: calc(100% - 90px);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-image: ${theme.colors.gradients.golden()};
	box-shadow: ${theme.layout.shadow.big};
	margin: 0;
	padding: 40px;
	z-index: 20;

	svg {
		display: block;
		margin-top: auto;
		margin-bottom: auto;
		pointer-events: none;
		opacity: 0.5;
	}
`;

export const mobileNavVariant: Variants = {
	start: {
		left: '-100%',
	},
	end: {
		left: 0,
		transition: {
			type: 'tween',
			ease: 'easeInOut',
			delay: 0.2,
			staggerChildren: 0.06,
			delayChildren: 0.4,
		},
	},
};

export const Wrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: #00000099;
	backdrop-filter: blur(3px);
	pointer-events: none;
	z-index: 10;
	opacity: 0;
	cursor: pointer;
`;

export const wrapperVariant: Variants = {
	start: { opacity: 0 },
	end: {
		opacity: 1,
		pointerEvents: 'all',
	},
};

export const NavbarItem = styled(motion.div)<{ $active?: boolean }>`
	position: relative;
	display: inline-block;
	font-family: ${theme.layout.fonts.header};
	font-size: 1.5rem;
	margin-right: 10px;
	color: ${(props) => props.theme.colors.solid.disabled};
	text-decoration: none;
	border-bottom: 2px solid transparent;
	margin: 0 20px;
	transition: color 0.2s;

	a {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	${media.lessThan('lg')`
		margin: 0 12px;
	`}

	${media.lessThan('md')`
		font-size: 1.75rem;
		margin-bottom: 1rem;
	`}

	${(props) =>
		props.$active &&
		css`
			color: ${props.theme.colors.solid.brown};
		`}

	&:hover {
		color: ${(props) => props.theme.colors.solid.brown};
	}

	&:last-child {
		margin-right: 0;
	}
`;

export const navbarItemVariant: Variants = {
	start: {
		opacity: 0,
		left: -20,
	},
	end: {
		opacity: 1,
		left: 0,
		transition: {
			duration: 0.1,
			type: 'spring',
			stiffness: 200,
			damping: 20,
		},
	},
};
