import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	
	background-size: cover;
	background-position: center;
	color: ${theme.colors.solid.white};
	text-align: center;
	padding: 80px 0;

	&:before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: ${theme.colors.gradients.black('130deg')};
		opacity: .93;
	}

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

export const MainText = styled.div`
	font-family: ${theme.layout.fonts.old};
	font-size: 2.25rem;
	line-height: 1.3;

	div {
		font-size: 3rem;
	}

	${media.lessThan('lg')`
		font-size: 1.5rem;

		div {
			font-size: 2rem;
		}
	`}
`;

export default Wrapper;
