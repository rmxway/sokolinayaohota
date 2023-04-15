import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	min-height: 900px;
	background-image: url('assets/img/wrapper-text.jpg');
	background-size: cover;
	background-position: center;
	background-color: aquamarine;
	color: ${theme.colors.primary};
	text-align: center;
	padding: 80px 0;

	& > div {
		font-size: 24px;
		line-height: 1.75;
	}

	&:before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${theme.colors.brown};
		opacity: 0.83;
	}
`;

export const MainText = styled.div`
	font-family: ${theme.layout.fonts.old};
	font-size: 36px;
	line-height: 1.3;

	div {
		font-size: 48px;
	}
`;

export default Wrapper;
