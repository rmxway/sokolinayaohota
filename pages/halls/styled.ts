import styled from 'styled-components';

import { Title } from '@/components/Layout';
import { defaultTheme as theme } from '@/theme';

export const Sidebar = styled.div`
	position: relative;
	min-width: 200px;
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
`;

export const FormBlock = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: 80px 0;
	background-image: ${theme.colors.gradients.brown('180deg')};
	color: ${theme.colors.solid.primary};
	margin-top: 40px;
	min-height: 60vh;

	${Title} {
		margin-bottom: 20px;
	}

	span {
		display: block;
		font-size: 1.5rem;
		text-align: left;
	}
`;

export default Sidebar;
