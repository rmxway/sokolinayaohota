import styled from 'styled-components';

import { defaultTheme as theme, media } from '@/theme';

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
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		width: 48px;
		height: 48px;
		border-radius: 100%;
		background-color: #f1f1f1bb;
		transition: all 0.3s;
		z-index: 1;

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

	${media.lessThan('sm')`
		left: 8px;
		right: 8px;

		.btn {
			width: 40px;
			height: 40px;
		}
	`}
`;

export default Wrapper;
