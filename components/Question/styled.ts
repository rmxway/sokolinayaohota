import { motion } from 'framer-motion';
import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';

export const Answer = styled(motion.div)`
	position: relative;
	font-size: 20px;
	color: ${theme.colors.disabled};
	overflow: hidden;
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
	font-size: 40px;
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
	background-color: #fff;
	border-radius: ${theme.radius.blockRadius};
	border: 1px solid ${theme.colors.gray.$3};
	text-align: left;
	gap: 20px;
	cursor: pointer;
	margin-bottom: 20px;
	transition: box-shadow 0.2s;

	.title {
		text-transform: uppercase;
		padding-top: 4px;
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
`;

export default Wrapper;
