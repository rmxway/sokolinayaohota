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
	$h100vh?: boolean;
}

const getHeight = ($h100?: boolean, $h100vh?: boolean) => {
	if ($h100vh) return '100vh';
	if ($h100) return '100%';
	return 'auto';
};

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
		$h100vh,
	}) => css`
		display: flex;
		flex-wrap: ${$noWrap ? 'nowrap' : 'wrap'};
		flex-shrink: ${$noShrink ? 0 : 1};
		justify-content: ${$justify || 'start'};
		align-items: ${$align || 'start'};
		flex-direction: ${$direction || 'row'};
		gap: ${$gap || 0}px;
		width: ${$w100 ? '100%' : 'auto'};
		height: ${getHeight($h100, $h100vh)};
	`}
`;

export { Flexbox };
export default Flexbox;
