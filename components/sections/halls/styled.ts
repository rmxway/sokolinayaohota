import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';

export const BlockContent = styled.div`
	font-size: 1.35rem;
	width: 100%;
`;

export const HallAdvantages = styled.div`
	position: relative;
	width: 350px;
	padding: 40px;
	background-image: ${theme.colors.gradients.golden('-45deg')};
	border-radius: ${theme.radius.blockRadius};
	color: ${theme.colors.solid.brown};
	box-shadow: ${theme.layout.shadow.big};

	ul {
		list-style: none;
		text-transform: uppercase;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 20px;

		font-family: ${theme.layout.fonts.header};
		font-size: 1.5rem;
		line-height: 1.2;

		li {
			display: grid;
			grid-auto-flow: column;
			grid-template-columns: 20px 1fr;
			gap: 12px;
		}
	}
`;
