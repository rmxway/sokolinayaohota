import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FinalText = styled(motion.div)`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: center;
	padding: 56px 0 80px;
	z-index: -1;
	font-family: ${(props) => props.theme.layout.fonts.header};
	color: ${(props) => props.theme.colors.success};
	font-size: 28px;
`;

export default FinalText;
