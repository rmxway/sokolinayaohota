import { motion, MotionProps } from 'framer-motion';
import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

interface TitleType extends MotionProps {
	color?: keyof typeof theme.colors;
	size?: string;
}

/**
 * @param {string} color}
 * @param {string} size}
 */
export const Title = styled(motion.div)<TitleType>`
	font-family: ${theme.layout.fonts.header};
	font-weight: 600;
	line-height: 1;
	font-size: ${(props) => props.size || '72px'};
	color: ${(props) => props.color !== undefined && theme.colors[props.color]};

	${(props) => media.lessThan('md')`
			font-size: ${props.size || '52px'};
		`}
`;

export default Title;
