import styled from 'styled-components';

import { Container } from '@/components/Layout';
import { defaultTheme as theme, media } from '@/theme';

export const MainBlock = styled(Container)`
	padding-top: 80px;
	padding-bottom: 80px;
	min-height: 50vh;

	${media.lessThan('lg')`
		padding-top: 40px;
		padding-bottom: 40px;
		min-height: auto;
	`}

	${media.lessThan('md')`
		grid-auto-flow: row;
	`}
`;

export const Sidebar = styled.div`
	position: relative;
	border-right: 1px solid silver;
	padding-right: 40px;

	p {
		font-size: 1.25rem;
	}

	button {
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
		color: ${theme.colors.solid.disabled};
		cursor: pointer;

		&:hover,
		&.active {
			color: ${theme.colors.solid.brown};
		}
	}

	${media.lessThan('md')`
		width: 100%;
		border-right: none;		
		border-bottom: 1px solid silver;
		padding-right: 0;
		padding-bottom: 40px;
	`}
`;

export const FormBlock = styled.div`
	position: relative;
	min-height: 40vh;
	padding: 80px 0;
	background-image: ${theme.colors.gradients.black('-160deg')};
	color: ${theme.colors.solid.primary};

	${Container} {
		grid-template-columns: 1fr 1.5fr;
	}

	.info {
		display: block;
		font-size: 1.35rem;
		text-align: left;
		color: ${theme.colors.solid.primary};
	}

	${media.lessThan('lg')`
		padding: 40px 0 80px;
		min-height: auto;
		
		${Container} {		
			grid-auto-flow: row;
			grid-template-columns: 1fr;
		}	
	`}
`;

export default Sidebar;
