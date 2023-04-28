import { motion } from 'framer-motion';
import styled from 'styled-components';

interface FlexboxTypes {
	$noWrap?: boolean;
	$noShrink?: boolean;
	justify?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'baseline'
		| 'stretch'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	gap?: number | string;
	$w100?: boolean;
}

const Flexbox = styled(motion.div)<FlexboxTypes>`
	display: flex;
	flex-wrap: ${(props) => (props.$noWrap ? 'nowrap' : 'wrap')};
	flex-shrink: ${(props) => (props.$noShrink ? 0 : 1)};
	justify-content: ${(props) => props.justify || 'start'};
	align-items: ${(props) => props.align || 'start'};
	flex-direction: ${(props) => props.direction || 'row'};
	gap: ${(props) => props.gap || 0}px;
	width: ${(props) => (props.$w100 ? '100%' : 'auto')};
`;

export { Flexbox };
export default Flexbox;
