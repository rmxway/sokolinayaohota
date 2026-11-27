import { styled } from 'styled-components';

import { defaultTheme as theme, media } from '@/theme';
import { Link } from 'react-router';

export const LogoWrapper = styled(Link)`
	position: relative;

	img {
		width: 80px;
		height: auto;
	}

	${media.lessThan('lg')`
		img {
			width: 64px;
		}
	`}
`;

export const LogoText = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	color: ${theme.colors.solid.secondary};
	font-family: ${theme.layout.fonts.old};
	font-size: 1.25rem;

	& > span {
		font-family: ${theme.layout.fonts.header};
	}

	${media.lessThan('lg')`
		font-size: 1rem;
	`}
`;
