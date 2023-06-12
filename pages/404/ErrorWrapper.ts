import styled from 'styled-components';

import { defaultTheme as theme, media } from '@/theme';

export const ErrorWrapper = styled.div`
	position: relative;
	font-family: ${theme.layout.fonts.header};
	font-size: 2rem;
	display: grid;
	gap: 20px;
	grid-auto-flow: dense;
	align-content: center;
	justify-content: center;
	justify-items: center;
	height: calc(100vh - 180px);
	min-height: 200px;

	& > span {
		font-size: 10rem;
		line-height: 1;
	}

	${media.lessThan('lg')`
        font-size: 1.5rem;

        & > span {
            font-size: 7rem;
        }
    `}
`;

export default ErrorWrapper;
