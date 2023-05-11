import styled from 'styled-components';

import { Grid } from '@/components/Layout';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	text-align: center;
	align-items: center;
	padding-top: 80px;

	${Grid} {
		align-items: stretch;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	img {
		min-height: 900px;
		object-position: center;
	}

	${media.lessThan('lg')`
		${Grid} {
			grid-auto-flow: row;
			grid-template-columns: 1fr 1fr;
		}
	`}

	${media.lessThan('md')`
		img {
			min-height: 100%;
		}

		${Grid} {
			gap: 12px
		}
	`}

	${media.lessThan('xs')`
		${Grid} {
			grid-template-columns: 1fr;
		}
	`}
`;

export const Item = styled.div`
	min-height: 200px;
	background-color: #fff;
	border-radius: ${theme.radius.blockRadius};
	border: 1px solid ${theme.colors.gray.$3};
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
		line-height: 1;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		color: ${theme.colors.brown};
	}

	& > span {
		color: ${theme.colors.disabled}bb;
		font-size: 1.125rem;
		line-height: 1.2;
		font-weight: 400;
		text-align: left;

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
	}

	&:hover {
		box-shadow: ${theme.layout.shadow.big};
		z-index: 2;
	}

	${media.lessThan('md')`
		gap: 20px;
		
		& > span {
			font-size: 1rem;
		}
	`}
`;

export const IconWrapper = styled.div`
	width: 120px;
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: ${theme.colors.brown}1a;

	.icofont {
		color: ${theme.colors.brown};
		font-size: 2.75rem;
	}

	${media.lessThan('md')`
		width: 100px;
		height: 100px;

		.icofont {
			color: ${theme.colors.brown};
			font-size: 2rem;
		}
	`}
`;

export default Wrapper;
