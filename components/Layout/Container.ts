import styled, { css } from 'styled-components';

import { media } from '@/theme/media';

type ContainerType = {
	mt?: boolean;
	flex?: boolean;
	center?: boolean;
	noPadding?: boolean;
	spaceBetween?: boolean;
	gap?: number;
	direction?: 'row' | 'column';
};

const Container = styled.div<ContainerType>`
	position: relative;
	padding: 0 ${(props) => (props.noPadding ? '0' : '20px')};
	width: 100%;
	max-width: 1360px;
	margin: 0 auto;
	gap: ${(props) => props.gap}px;

	${(props) =>
		props.mt &&
		css`
			margin-top: 20px;
		`}

	${(props) =>
		props.flex &&
		css`
			display: flex;
			justify-content: center;
		`}

	${(props) =>
		props.center &&
		css`
			align-items: center;
		`}

	${(props) =>
		props.spaceBetween &&
		css`
			justify-content: space-between;
		`}
	${(props) =>
		props.direction &&
		css`
			flex-direction: ${props.direction};
		`}

	${media.lessThan('xl')`
		max-width: 1200px;
	`}

	${media.lessThan('lg')`
		max-width: 1000px;
	`}

	${media.lessThan('md')`
		max-width: 750px;
	`}
`;

export { Container };
export default Container;
