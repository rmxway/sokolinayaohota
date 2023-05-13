import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

import { Container, Grid } from '@/components/Layout';
import { defaultTheme as theme, fadeIn, media } from '@/theme';

export const TopPanelSC = styled.div`
	background-color: rgba(255, 255, 255, 0.75);
	font-weight: 500;
	font-size: 1.125rem;
	line-height: 1.2;
	padding: 12px 0;
	z-index: 1;

	${Container} {
		height: 100%;
	}

	${Grid} {
		pointer-events: none;
	}

	a,
	& {
		color: ${theme.colors.brown};
	}

	${media.lessThan('sm')`
		height: auto;
		padding: 16px 0;
		font-size: 1rem;

		${Container} {
			grid-auto-columns: 1fr;
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

				&:after {
					position: absolute;
					bottom: -1px;
					left: 50%;	
					transform: translate(-50%, 15px);
					content: '';
					height: 2px;
					width: 10px;
					border: 8px solid ${theme.colors.brown}7e;
					border-top-color: transparent;
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
	top: 16px;
	background-color: ${theme.colors.brown}8c; // 8c - opacity ~ 55%

	& > div {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		padding: 12px 20px;
		min-height: 65px;
	}

	&,
	a {
		color: #fff;
	}

	${media.greaterThan('sm')`
		display: none !important;
	`}
`;

export const contentAnimation: Variants = {
	start: {
		opacity: 0,
		height: 0,
	},
	end: {
		opacity: 1,
		height: 'auto',
	},
};
