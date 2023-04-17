import { motion } from 'framer-motion';
import styled from 'styled-components';

interface FlexboxTypes {
	$nowrap?: boolean;
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
	gap?: number;
}

const Flexbox = styled(motion.div)<FlexboxTypes>`
	display: flex;
	flex-wrap: ${(props) => (props.$nowrap ? 'nowrap' : 'wrap')};
	justify-content: ${(props) => props.justify};
	align-items: ${(props) => props.align};
	flex-direction: ${(props) => props.direction};
	gap: ${(props) => props.gap}px;
`;

export { Flexbox };
export default Flexbox;
