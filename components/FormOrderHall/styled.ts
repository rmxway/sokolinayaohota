import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { Grid } from '@/components/Layout';

export const FormStyled = styled.form<{ $fetching?: boolean }>`
	position: relative;
	opacity: 1;
	width: 100%;

	${(props) =>
		props.$fetching &&
		css`
			pointer-events: none;
			opacity: 0.5;
		`}

	${Grid} {
		margin: 40px 0;
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const FinalText = styled(motion.div)<{ $valid: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 56px 0 80px;
	z-index: 0;
	font-family: ${(props) => props.theme.layout.fonts.header};
	color: ${(props) =>
		!props.$valid
			? props.theme.colors.solid.white
			: props.theme.colors.solid.danger};
	font-size: 28px;
`;

export default FinalText;
