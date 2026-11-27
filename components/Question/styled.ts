import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import { Grid, Title } from '@/components/Layout';
import { defaultTheme as theme, media } from '@/theme';

export const Answer = styled(motion.div)`
	position: relative;
	font-size: 1.125rem;
	color: ${theme.colors.solid.disabled};
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
	color: ${theme.colors.solid.disabled};
	font-family: ${theme.layout.fonts.header};
	font-size: 2rem;
	padding-top: 2px;
	align-self: center;

	&:after {
		content: '+';
		position: absolute;
	}

	${media.lessThan('lg')`
		font-size: 1.6rem;
		width: 26px;
		height: 26px;
	`};
`;

export const Wrapper = styled(motion.label)`
	position: relative;
	padding: 20px 30px 10px;
	width: 100%;
	background-color: #fff;
	border-radius: ${theme.radius.block};
	border: 1px solid ${theme.colors.gray.$3};
	text-align: left;
	cursor: pointer;
	margin-bottom: 20px;
	transition: box-shadow 0.2s;

	${Title} {
		font-size: 0.9rem;
		text-transform: uppercase;
		line-height: 30px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
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

	${media.lessThan('lg')`
		padding: 10px 20px 10px;
	`}
`;

export default Wrapper;
