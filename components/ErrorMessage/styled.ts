import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';

export const Wrapper = styled.div`
	display: inline-block;
	padding: 20px;
	background-image: ${theme.colors.gradients.rubin('90deg')};
	border-radius: 20px;
	margin: 20px 0;
	box-shadow: ${theme.layout.shadow.basic};
`;

export const Message = styled.div`
	position: relative;
	color: ${theme.colors.solid.white};

	p {
		font-size: 1.75rem;
		font-family: ${theme.layout.fonts.header};
	}
`;
