import styled, { css } from 'styled-components';

import { media } from '@/theme';

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
	max-width: 100%;
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

	${media.greaterThan('sm')`
		max-width: 768px;
	`}

	${media.greaterThan('md')`
		max-width: 1024px;
	`}

	${media.greaterThan('lg')`
		max-width: 1280px;
	`}
`;

export { Container };
export default Container;
