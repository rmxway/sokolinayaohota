import { styled } from 'styled-components';

import { FinalText, FormStyled } from '@/components/FormOrder/styled';
import { Container, Grid, Title } from '@/components/Layout';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 80px 0;
	background-color: ${theme.colors.solid.brown}22;
	min-height: fit-content;

	${Title} {
		span {
			display: block;
			margin-top: 20px;
			text-transform: uppercase;
			font-size: 2.9rem;
			color: ${theme.colors.solid.primary};
		}
	}

	${FormStyled} {
		max-width: 400px;
	}

	${FinalText} {
		color: ${
			!FinalText.defaultProps?.$valid
				? theme.colors.solid.white
				: theme.colors.solid.danger
		};
	}

	${media.lessThan('lg')`
		padding: 40px 0;

		${Container} {
			grid-template-columns: 1fr;
		}

		${Grid} {
			grid-template-columns: 1fr;
		}

		${Title} {
			span {
				font-size: 1.8rem;
				letter-spacing: 0.5px;
			}
		}

		${FormStyled} {
			max-width: 320px;
		}
	`}
`;

export const Discount = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 145px;
	height: 145px;
	border-radius: 200px;
	margin: auto;
	background-image: ${theme.colors.gradients.brown()};

	& > div {
		font-size: 3.5rem;
		font-family: ${theme.layout.fonts.header};
		color: ${theme.colors.solid.primary};
	}

	${media.lessThan('lg')`
		width: 120px;
		height: 120px;

		& > div {
			font-size: 2.6rem;
		}
	`}
`;

export default Wrapper;
