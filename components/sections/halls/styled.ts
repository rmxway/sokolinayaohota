import styled from 'styled-components';

import { Grid } from '@/components/Layout';
import { defaultTheme as theme, media } from '@/theme';

export const HallsPageWrapper = styled(Grid)`
	grid-template-columns: 1fr 340px;

	${media.lessThan('lg')`	
		grid-auto-flow: row;
		grid-template-columns: 1fr;
	`}

	${media.lessThan('lg')`
		gap: 20px;
	`}
`;

export const BlockContent = styled.div`
	font-size: 1.35rem;
`;

export const HallAdvantages = styled.div`
	position: relative;
	padding: 40px;
	width: 100%;
	background-image: ${theme.colors.gradients.golden('-45deg')};
	border-radius: ${theme.radius.blockRadius};
	color: ${theme.colors.solid.brown};

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

	${media.lessThan('md')`
		padding: 20px;

		ul {
			gap: 12px;
		}
	`}
`;
