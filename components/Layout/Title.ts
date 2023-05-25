import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

type TitleType = {
	color?: keyof typeof theme.colors.solid;
	size?: string;
};

/**
 * @param {string} color}
 * @param {string} size}
 */
export const Title = styled.div<TitleType>`
	font-family: ${theme.layout.fonts.header};
	font-weight: 600;
	line-height: 1;
	font-size: ${(props) => props.size || '3.5rem'};
	color: ${(props) => theme.colors.solid[props.color || 'white']};

	span {
		display: inline-block;
	}

	${(props) => media.lessThan('lg')`
		font-size: ${props.size || '2.5rem'};
	`}
`;

export default Title;
