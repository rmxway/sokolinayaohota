import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Grid, Title } from '@/components/Layout';
import { defaultTheme as theme, media } from '@/theme';

export const Answer = styled(motion.div)`
	position: relative;
	font-size: 1.125rem;
	color: ${theme.colors.disabled};
	overflow: hidden;

	${media.lessThan('md')`
		font-size: 1rem;
	`}
`;

export const PlusMinus = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	pointer-events: none;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 2px solid ${theme.colors.gray.$3};
	color: ${theme.colors.disabled};
	font-family: ${theme.layout.fonts.header};
	font-size: 2.5rem;
	padding-top: 2px;
	align-self: center;

	&:after {
		content: '+';
		position: absolute;
	}
`;

export const Wrapper = styled(motion.label)`
	position: relative;
	padding: 20px;
	width: 100%;
	background-color: #fff;
	border-radius: ${theme.radius.blockRadius};
	border: 1px solid ${theme.colors.gray.$3};
	text-align: left;
	gap: 20px;
	cursor: pointer;
	margin-bottom: 20px;
	transition: box-shadow 0.2s;

	${Title} {
		font-size: 1.5rem;
		text-transform: uppercase;
		padding-top: 4px;
	}

	${Grid} {
		grid-template-columns: 1fr 25px;
	}

	&:hover {
		z-index: 1;
		box-shadow: ${theme.layout.shadow.big};
	}
	input {
		display: none;
	}

	input:checked + div ${PlusMinus} {
		&:after {
			content: '-';
			position: absolute;
		}
	}

	${media.lessThan('md')`
		${Title} {
			padding-top: 8px;
			font-size: 1.25rem;
		}
	`}
`;

export default Wrapper;
