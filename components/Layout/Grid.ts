import { motion } from 'framer-motion';
import styled from 'styled-components';

interface GridTypes {
	justify?:
		| 'start'
		| 'end'
		| 'center'
		| 'baseline'
		| 'stretch'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	gap?: number | string;
	$w100?: boolean;
}

const Grid = styled(motion.div)<GridTypes>`
	display: grid;
	justify-content: ${(props) => props.justify || 'start'};
	align-items: ${(props) => props.align || 'start'};
	grid-auto-flow: ${(props) => props.direction || 'column'};
	gap: ${(props) => props.gap || 0}px;
	width: ${(props) => (props.$w100 ? '100%' : 'auto')};
`;

export { Grid };
export default Grid;
