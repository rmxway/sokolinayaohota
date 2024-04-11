import styled from 'styled-components';

import { fadeIn } from '@/theme';

export const Wrapper = styled.div<{ $absolute?: boolean; $nodelay?: boolean }>`
	position: ${(props) => (props.$absolute ? 'absolute' : 'fixed')};
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #ffffffcc;
	z-index: 100;

	opacity: 0;
	${fadeIn}
	animation-delay: ${(props) => (props.$nodelay ? '0.1s' : '0.5s')};
`;

export const Ellipsis = styled.div<{ $light?: boolean }>`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
	transform: scale(0.7);

	opacity: 0;
	animation-delay: 0.25s;
	${fadeIn}

	div {
		position: absolute;
		top: 33px;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: ${({ theme, $light }) =>
			$light ? theme.colors.solid.primary : theme.colors.solid.secondary};
		animation-timing-function: cubic-bezier(0, 1, 1, 0);

		&:nth-child(1) {
			left: 8px;
			animation: lds-ellipsis1 0.6s infinite;
			animation-duration: 0.7s;
		}

		&:nth-child(2) {
			left: 8px;
			animation: lds-ellipsis2 0.6s infinite;
			animation-duration: 0.7s;
		}

		&:nth-child(3) {
			left: 32px;
			animation: lds-ellipsis2 0.6s infinite;
			animation-duration: 0.7s;
		}

		&:nth-child(4) {
			left: 56px;
			animation: lds-ellipsis3 0.6s infinite;
			animation-duration: 0.7s;
		}
	}

	@keyframes lds-ellipsis1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}

	@keyframes lds-ellipsis3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}

	@keyframes lds-ellipsis2 {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(24px, 0);
		}
	}
`;

export default Ellipsis;
