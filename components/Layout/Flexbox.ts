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
	justify-content: ${(props) => props.justify};
	align-items: ${(props) => props.align};
	flex-direction: ${(props) => props.direction};
	gap: ${(props) => props.gap}px;
	width: ${props => props.$w100? '100%' : 'auto'};
`;

export { Flexbox };
export default Flexbox;
