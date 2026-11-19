import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	text-align: center;
	align-items: center;
	padding-top: 80px;

	.grid {
		align-items: stretch;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	img {
		min-height: 900px;
		object-position: center;
	}

	${media.lessThan('lg')`
		padding-top: 40px;

		.grid {
			grid-auto-flow: row;
			gap: 12px;
		}
	`}

	${media.lessThan('md')`
		img {
			min-height: 100%;
		}

		.grid {
			gap: 12px;
			grid-auto-flow: row;
			grid-template-columns: 1fr 1fr;
		}
	`}

	${media.lessThan('xxs')`
		.grid {
			grid-template-columns: 1fr;
		}
	`}
`;

export const ItemDescription = styled.div`
	color: ${theme.colors.solid.brown}cc;
	font-size: 1.25rem;
	line-height: 1.3;
	font-weight: 400;
	text-align: center;

	p {
		display: block;
		margin-bottom: 16px;
	}

	ul {
		li {
			list-style: disc;
			margin-bottom: 16px;
		}
	}

	${media.lessThan('md')`
		font-size: 1rem;	
	`}
`;

export const Item = styled.div`
	min-height: 200px;
	width: 100%;
	background-image: ${theme.colors.gradients.light('180deg')};
	background-color: #fff;
	border-radius: ${theme.radius.blockRadius};
	// border: 1px solid ${theme.colors.gray.$2};
	padding: 40px 24px;
	display: grid;
	justify-items: center;
	grid-auto-rows: max-content;
	gap: 32px;
	transition: box-shadow 0.2s;

	& > div:not([class]) {
		font-family: ${theme.layout.fonts.header};
		font-size: 1.5rem;
		font-weight: 600;
		height: max-content;
		line-height: 0.9;
		text-transform: uppercase;
		color: ${theme.colors.solid.brown};
	}

	&:hover {
		box-shadow: ${theme.layout.shadow.big};
		z-index: 2;
	}

	${media.lessThan('md')`
		gap: 20px;
		padding: 20px;
	`}
`;

export const IconWrapper = styled.div`
	width: 100px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: ${theme.colors.gray.$2};

	.icofont {
		color: ${theme.colors.solid.brown};
		font-size: 2.5rem;
	}

	${media.lessThan('md')`
		width: 72px;
		height: 72px;

		.icofont {
			color: ${theme.colors.solid.secondary};
			font-size: 2rem;
		}
	`}
`;

export default Wrapper;
