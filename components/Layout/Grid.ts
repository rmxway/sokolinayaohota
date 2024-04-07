import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

interface GridTypes {
	$justify:
		| 'start'
		| 'end'
		| 'center'
		| 'baseline'
		| 'stretch'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	$align: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
	$direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	$gap: number | string;
	$w100: boolean;
	$h100: boolean;
}

const Grid = styled(motion.div)<Partial<GridTypes>>`
	${({ $align, $direction, $gap, $justify, $w100, $h100 }) => css`
		display: grid;
		justify-content: ${$justify || 'start'};
		align-items: ${$align || 'start'};
		grid-auto-flow: ${$direction || 'column'};
		gap: ${$gap || 0}px;
		width: ${$w100 ? '100%' : 'auto'};
		height: ${$h100 ? '100%' : 'auto'};
	`}
`;

export { Grid };
export default Grid;
