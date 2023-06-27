import styled, { css } from 'styled-components';

import { Container } from '@/components/Layout';
import { defaultTheme as theme, media } from '@/theme';

export const InfoBlockWrapper = styled.div`
	position: relative;
	padding: 80px 0;
	border-bottom: 20px solid ${theme.colors.solid.primary}55;

	${Container} {
		grid-template-columns: 1fr 1fr 1fr;
	}

	${media.lessThan('lg')`
        padding: 40px 0;
    `}

	${media.lessThan('sm')`
        ${Container} {
            gap: 40px;
            grid-auto-flow: row;
			justify-content: center;
            grid-template-columns: auto;
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
	padding: 0 8px;

	&,
	* {
		color: ${theme.colors.solid.brown};
	}

	${(props) =>
		props.$border &&
		css`
			border-left: 2px solid ${theme.colors.gray.$3};
			border-right: 2px solid ${theme.colors.gray.$3};

			${media.lessThan('sm')`
					border: none;
					padding: 20px 0;
					border-top: 2px solid ${theme.colors.gray.$3};
					border-bottom: 2px solid ${theme.colors.gray.$3};
				`}
		`}

	span {
		display: inline-block;
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
