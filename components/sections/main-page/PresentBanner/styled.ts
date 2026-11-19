import styled from 'styled-components';

import { Grid } from '@/components/Layout';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;

	font-family: ${theme.layout.fonts.old};

	color: ${theme.colors.solid.primary};
	text-align: center;
	padding: 180px 0;
	background-color: ${theme.colors.solid.brown}cc;

	& > div {
		font-size: 1.5rem;
		line-height: 1.75;
	}

	${media.lessThan('lg')`
		min-height: auto;
		padding: 40px 0;
		
		& > div {
			font-size: 1.25em;
		}
	`}
`;

export const TextBlock = styled(Grid)`
	width: 100%;
	height: 100%;
	justify-items: center;

	${media.lessThan('lg')`
		padding: 40px 20px;
	`}
`;

export const MainText = styled.div`
	font-size: 2rem;
	line-height: 1.3;

	div {
		font-size: 2.7rem;
	}

	${media.lessThan('lg')`
		font-size: 1.8rem;

		div {
			font-size: 2.2rem;
		}
	`}
`;

export default Wrapper;
