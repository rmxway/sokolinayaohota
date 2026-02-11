import styled from 'styled-components';

import { FinalText, FormStyled } from '@/components/FormOrder/styled';
import { Container, Grid , Title } from '@/components/Layout';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 80px 0;
	background-color: ${theme.colors.solid.base}55;
	min-height: fit-content;

	${Title} {
		font-size: 4rem;

		span {
			display: block;
			margin-top: 20px;
			text-transform: uppercase;
			font-size: 3.875rem;
			color: ${theme.colors.solid.primary};
		}
	}

	${FormStyled} {
		max-width: 400px;
	}

	${FinalText} {
		color: ${!FinalText.defaultProps?.$valid
			? theme.colors.solid.white
			: theme.colors.solid.danger};
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
			font-size: 3.25rem;	

			span {
				font-size: 3rem;
				letter-spacing: 0.5px;
			}
		}

		${FormStyled} {
			max-width: 320px;
		}
	`}

	${media.lessThan('md')`
		${FormStyled} {
			max-width: 100%;
			width: 100%;
		}
	`}
`;

export const Discount = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 128px;
	height: 128px;
	border-radius: 200px;
	margin: auto;
	background-image: ${theme.colors.gradients.disabled()};

	& > div {
		font-size: 3.5rem;
		font-family: ${theme.layout.fonts.header};
		color: ${theme.colors.solid.disabled};
	}

	${media.lessThan('lg')`
		width: 100px;
		height: 100px;

		& > div {
			font-size: 3rem;
		}
	`}
`;

export default Wrapper;
