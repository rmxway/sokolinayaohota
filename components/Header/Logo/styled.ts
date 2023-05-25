import Link from 'next/link';
import styled from 'styled-components';

import { defaultTheme as theme, media } from '@/theme';

export const LogoWrapper = styled(Link)`
	position: relative;

	img {
		width: 80px;
		height: auto;
	}

	${media.lessThan('sm')`
		img {
			width: 64px;
		}
	`}
`;

export const LogoText = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	color: ${theme.colors.solid.brown};
	font-family: ${theme.layout.fonts.old};
	font-size: 1.25rem;

	& > span {
		font-family: ${theme.layout.fonts.header};
	}

	${media.lessThan('sm')`
		font-size: 1rem;
	`}
`;
