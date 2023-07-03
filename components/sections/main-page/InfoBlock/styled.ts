import styled, { css } from 'styled-components';

import { Container } from '@/components/Layout';
import { defaultTheme as theme, media } from '@/theme';

export const InfoBlockWrapper = styled.div`
	position: relative;
	padding: 80px 0;
	border-top: 20px solid ${theme.colors.solid.brown}15;
	overflow: hidden;

	background: linear-gradient(
		180deg,
		#f1f1f1aa 0%,
		#fff8f5 45.71%,
		#f8f1e8 50.04%,
		#ffffff 100%
	);

	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		border-bottom: 20px solid ${theme.colors.solid.primary}55;
	}

	img {
		opacity: 1;
		transform: scale(-1, 1);
	}

	${Container} {
		grid-template-columns: 1fr 1fr 1fr;
	}

	${media.lessThan('sm')`
        ${Container} {
            grid-auto-flow: row;
			justify-content: center;
            grid-template-columns: auto;
			gap: 40px;
        }
    `}
`;

export const Item = styled.div<{ $border: boolean }>`
	display: grid;
	justify-items: center;
	align-items: start;
	grid-template-rows: max-content;
	gap: 20px;
	white-space: break-spaces;
	text-align: center;
	font-size: 1.285rem;
	width: 100%;

	&,
	* {
		color: ${theme.colors.solid.brown};
	}

	${(props) =>
		props.$border &&
		css`
			border-left: 2px solid ${theme.colors.solid.brown}22;
			border-right: 2px solid ${theme.colors.solid.brown}22;

			${media.lessThan('sm')`
					border: none;
					padding: 40px 0;
					border-top: 2px solid ${theme.colors.solid.brown}22;
					border-bottom: 2px solid ${theme.colors.solid.brown}22;
				`}
		`}

	a {
		display: block;
	}

	.icofont {
		font-size: 2rem;
	}

	${media.lessThan('lg')`
        font-size: 1.15rem;
    `}

	${media.lessThan('sm')`
        font-size: 1.15rem;
    `}
`;
