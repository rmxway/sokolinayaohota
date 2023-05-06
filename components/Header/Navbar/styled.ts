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
	width: 28px;
	height: 28px;
	margin-left: auto;
	padding: 0;
	cursor: pointer;

	span {
		position: relative;
		top: 0;
		width: 100%;
		height: 2px;
		border-radius: 10px;
		background-color: ${theme.colors.brown};
		transition: all 0.25s ease-in-out;
		transform-origin: 50%;
		margin: auto;
	}

	${(props) =>
		props.$open &&
		css`
			.first-line {
				top: 10px;
				transform: rotate(45deg);
				width: 110%;
			}

			.second-line {
				opacity: 0;
				width: 0;
			}

			.third-line {
				top: -10px;
				transform: rotate(-45deg);
				width: 110%;
			}
		`}

	${media.lessThan('md')`
		display: grid;
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

	background-image: ${theme.colors.gradients.golden};
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
		transition: { type: 'tween', ease: 'easeInOut', delay: 0.2 },
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

export const NavbarItem = styled.div<{ active?: boolean }>`
	position: relative;
	display: inline-block;
	font-family: ${theme.layout.fonts.header};
	font-size: 24px;
	margin-right: 10px;
	color: ${(props) => props.theme.colors.disabled};
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
		font-size: 32px;
		margin-bottom: 28px;
	`}

	${(props) =>
		props.active &&
		css`
			color: ${props.theme.colors.brown};
		`}

	&:hover {
		color: ${(props) => props.theme.colors.brown};
	}

	&:last-child {
		margin-right: 0;
	}
`;

export default NavbarItem;
