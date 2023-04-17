import styled from 'styled-components';

import { Title } from '@/components/Layout';
import { defaultTheme as theme } from '@/theme';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	background-image: url('assets/img/discount.jpg');
	background-size: cover;
	background-position: center;
	background-color: aquamarine;
	color: ${theme.colors.primary};
	text-align: center;
	padding: 80px 0;

	${Title} {
		span {
			display: block;
			margin-top: 20px;
			text-transform: uppercase;
			font-size: 62px;
			color: ${theme.colors.primary};
		}
	}
`;

export const Discount = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 168px;
	height: 168px;
	border-radius: 200px;
	background-color: ${theme.colors.brown};

	& > div {
		font-size: 64px;
		font-family: ${theme.layout.fonts.header};
		background-image: ${theme.colors.gradients.golden};
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

export default Wrapper;
