import styled from 'styled-components';

import { Grid } from '@/components/Layout';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;

	background-size: cover;
	background-position: center;
	color: ${theme.colors.solid.white};
	text-align: center;
	padding: 80px 0;

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
	background-image: ${theme.colors.gradients.black('190deg')};
	filter: opacity(0.95);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border-radius: ${theme.radius.blockRadius};
	padding: 40px;
	justify-items: center;

	${media.lessThan('lg')`
		padding: 40px 20px;
	`}
`;

export const MainText = styled.div`
	font-family: ${theme.layout.fonts.header};
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
