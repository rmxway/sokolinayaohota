import { motion, Variants } from 'framer-motion';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

import { Container, Grid } from '@/components/Layout';
import { defaultTheme as theme, fadeIn, media } from '@/theme';

export const TopPanelSC = styled.div<{$isMainPage?: boolean}>`
	position: relative;
	background-color: rgba(255, 255, 255, 0.75);
	font-weight: 500;
	font-size: 1.125rem;
	line-height: 1.2;
	padding: 12px 0;
	z-index: 100;

	${Container} {
		height: 100%;
	}

	${Grid} {
		pointer-events: none;
	}

	a,
	& {
		color: ${theme.colors.solid.brown};
	}

	${props => props.$isMainPage && css`
		display: none;
	`}

	${media.lessThan('md')`
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: rgba(245, 245, 245, 0.95);
		display: block;

		height: auto;
		padding: 8px 0;
		font-size: 1rem;

		${Container} {
			grid-auto-columns: 1fr;
		}

		.icofont {
			cursor: pointer;
		}

		${Grid} {		
			pointer-events: all;	
			justify-content: center;
			grid-auto-flow: row;

			div {				
				display: none;
			}

			.active {			
				position: relative;
				color: ${theme.colors.gray.$7};

				&::after {
					content: '';
					position: absolute;
					left: 50%;	
					transform: translate(-50%, -22px);
					
					border: 10px solid ${rgba(theme.colors.gray.$6, 1)};
					border-bottom-color: transparent;
					border-left-color: transparent;
					border-right-color: transparent;
					
					${fadeIn}
					animation-duration: .2s;
				}
			}
		}
	`}
`;

export const InfoBlock = styled(motion.div)`
	position: relative;
	top: -16px;
	background-color: ${rgba(theme.colors.gray.$6, 1)}; // 8c - opacity ~ 55%

	& > div {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		padding: 8px 20px;
		min-height: 50px;
	}

	&,
	a {
		color: #fff;
	}

	${media.greaterThan('md')`
		display: none !important;
	`}
`;

export const contentAnimation: Variants = {
	start: {
		opacity: 0,
		height: 0,
		transition: {
			duration: 0.1,
		},
	},
	end: {
		opacity: 1,
		height: 'auto',
		transition: {
			duration: 0.1,
		},
	},
};
