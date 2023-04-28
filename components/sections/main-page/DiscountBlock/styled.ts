import styled from 'styled-components';

import { FinalText, FormStyled } from '@/components/FormOrder/styled';
import { Title } from '@/components/Layout';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	background-image: url('assets/img/discount.jpg');
	background-size: cover;
	background-position: center;
	background-color: aquamarine;
	text-align: center;
	padding: 80px 0;

	${Title} {
		font-size: 64px;

		span {
			display: block;
			margin-top: 20px;
			text-transform: uppercase;
			font-size: 62px;
			color: ${theme.colors.primary};
		}
	}

	${FormStyled} {
		max-width: 400px;
	}

	${FinalText} {
		color: ${!FinalText.defaultProps?.$valid
			? theme.colors.white
			: theme.colors.danger};
	}

	${media.lessThan('md')`
		${Title} {
			font-size: 52px;	

			span {
				font-size: 48px;
				letter-spacing: 0.5px;
			}
		}
	`}

	${media.lessThan('md')`
		${FormStyled} {
			max-width: 320px;
		}
	`}
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
		color: ${theme.colors.primary};
	}

	${media.lessThan('md')`
		transform: scale(.8);
	`}
`;

export default Wrapper;
