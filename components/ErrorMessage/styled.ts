import styled from 'styled-components';

import { defaultTheme as theme, media } from '@/theme';

export const Wrapper = styled.div`
	display: inline-flex;
	padding: 20px 40px;
	background-image: ${theme.colors.gradients.rubin('90deg')};
	border-radius: 20px;
	margin: 20px 0;
	flex-shrink: 0;
	justify-content: center;
	box-shadow: ${theme.layout.shadow.basic};
	margin: 20px auto;

	${media.lessThan('md')`
		font-size: .75rem;
	`}
`;

export const Message = styled.div`
	position: relative;
	display: grid;
	align-items: center;
	text-align: center;
	grid-template-columns: auto;
	color: ${theme.colors.solid.white};

	p {
		font-size: 1.75em;
		font-family: ${theme.layout.fonts.header};
	}
`;
