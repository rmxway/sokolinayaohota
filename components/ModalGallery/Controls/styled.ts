import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';

export const Wrapper = styled.span`
	position: absolute;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	top: 0;
	left: 20px;
	right: 20px;
	bottom: 0;

	.btn {
		z-index: 1;
		cursor: pointer;
		width: 48px;
		height: 48px;
		border-radius: 100%;
		background-color: #ffffffbb;
		transition: all 0.3s;

		&:hover {
			box-shadow: ${theme.layout.shadow.basic};
			background-color: #ffffffee;
		}

		&:disabled {
			opacity: 0;
			visibility: hidden;
			cursor: default;
			pointer-events: none;
		}
	}

	.btn-prev {
		transform: scale(-1, 1);
	}
`;

export default Wrapper;
