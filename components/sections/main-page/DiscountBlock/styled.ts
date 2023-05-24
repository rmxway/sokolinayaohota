import styled from 'styled-components';

import { FinalText, FormStyled } from '@/components/FormOrder/styled';
import { Title } from '@/components/Layout';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	display: grid;
	grid-auto-flow: row;
	gap: 20px;
	text-align: center;
	padding: 80px 0;

	${Title} {
		font-size: 4rem;

		span {
			display: block;
			margin-top: 20px;
			text-transform: uppercase;
			font-size: 3.875rem;
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

	${media.lessThan('lg')`
		${Title} {
			font-size: 3.25rem;	

			span {
				font-size: 3rem;
				letter-spacing: 0.5px;
			}
		}
	`}

	${media.lessThan('lg')`
		${FormStyled} {
			max-width: 320px;
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
	background-color: ${theme.colors.brown};

	& > div {
		font-size: 3.5rem;
		font-family: ${theme.layout.fonts.header};
		color: ${theme.colors.primary};
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
