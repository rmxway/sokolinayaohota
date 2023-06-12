import styled from 'styled-components';

import { defaultTheme as theme, media } from '@/theme';

export const WrapperErrorMessage = styled.div<{ $flat?: boolean }>`
	display: flex;
	padding: 20px 40px;
	background-image: ${(props) =>
		props.$flat ? 'none' : theme.colors.gradients.rubin('90deg')};
	border-radius: 20px;
	margin: 20px;
	flex-shrink: 0;
	justify-content: center;
	box-shadow: ${(props) =>
		props.$flat ? 'none' : theme.layout.shadow.basic};
	margin: 20px auto;
	color: ${(props) =>
		props.$flat ? theme.colors.solid.danger : theme.colors.solid.white};

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

	p {
		font-size: 1.75em;
		font-family: ${theme.layout.fonts.header};
	}
`;
