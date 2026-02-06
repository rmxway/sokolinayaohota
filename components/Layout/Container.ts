import styled, { css } from 'styled-components';

import { media } from '@/theme/media';

interface ContainerType {
	$mt: boolean;
	$grid: boolean;
	$center: boolean;
	$noPadding: boolean;
	$spaceBetween: boolean;
	$gap: number;
	$direction: 'row' | 'column';
}

const Container = styled.div<Partial<ContainerType>>`
	${({
		$center,
		$direction,
		$gap,
		$grid,
		$mt,
		$noPadding,
		$spaceBetween,
	}) => css`
		position: relative;
		padding: 0 ${$noPadding ? '0' : '20px'};
		width: 100%;
		max-width: 1360px;
		margin: 0 auto;
		grid-auto-flow: ${$direction || 'column'};
		justify-items: center;

		${$gap &&
		css`
			gap: ${$gap}px;
		`}
		${$mt &&
		css`
			margin-top: 40px;
		`}
		${$grid &&
		css`
			display: grid;
		`}
		${$center &&
		css`
			align-items: center;
		`}
		${$spaceBetween &&
		css`
			justify-content: space-between;
		`}

		${media.lessThan('xl')`
			max-width: 1200px;
		`}

		${media.lessThan('lg')`
			max-width: 1000px;
		`}

		${media.lessThan('md')`
			max-width: 770px;
		`}
	`}
`;

export { Container };
export default Container;
