import styled from 'styled-components';

import { YanoneKaffeesatzFont } from '@/pages/fonts';
import { defaultTheme as theme } from '@/theme';

type TitleType = {
	color?: keyof typeof theme.colors;
	size?: string;
};

export const Title = styled.div<TitleType>`
	font-family: ${YanoneKaffeesatzFont.style.fontFamily};
	font-weight: 600;
	line-height: 1;
	font-size: ${(props) => props.size || '72px'};
	color: ${(props) => props.color !== undefined && theme.colors[props.color]};
`;

export default Title;
