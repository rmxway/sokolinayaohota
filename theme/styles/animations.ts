import { css } from 'styled-components';

export const fadeIn = css`
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	animation: fadeIn 0.5s;
	animation-fill-mode: forwards;
`;

export default fadeIn;
