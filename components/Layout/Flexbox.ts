import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

interface FlexboxTypes {
	$noWrap?: boolean;
	$noShrink?: boolean;
	$justify?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'baseline'
		| 'stretch'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	$align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
	$direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	$gap?: number | string;
	$w100?: boolean;
	$h100?: boolean;
}

const Flexbox = styled(motion.div)<FlexboxTypes>`
	${({
		$align,
		$direction,
		$gap,
		$justify,
		$noShrink,
		$noWrap,
		$w100,
		$h100,
	}) => css`
		display: flex;
		flex-wrap: ${$noWrap ? 'nowrap' : 'wrap'};
		flex-shrink: ${$noShrink ? 0 : 1};
		justify-content: ${$justify || 'start'};
		align-items: ${$align || 'start'};
		flex-direction: ${$direction || 'row'};
		gap: ${$gap || 0}px;
		width: ${$w100 ? '100%' : 'auto'};
		height: ${$h100 ? '100%' : 'auto'};
	`}
`;

export { Flexbox };
export default Flexbox;
