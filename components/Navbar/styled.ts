import styled, { css } from 'styled-components';

import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const BurgerButton = styled.button`
	position: relative;
	display: none;
	width: 40px;
	height: 24px;
	margin-left: 16px;
	margin-left: auto;
	order: 2;
	flex-shrink: 0;

	span {
		width: 100%;
		height: 2px;
		border-radius: 10px;
		background-color: ${theme.colors.brown};
	}

	${media.lessThan('md')`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`}
`;

export const NavContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 40px 5px 0;
	transition: left 0.2s;

	${media.lessThan('md')`
		position: fixed;		
		top: 0;
		right: 0;
		left: 100%;
		bottom: 0;		
		flex-direction: column;
		gap: 20px;
		background-image: ${theme.colors.gradients.golden};
		margin: 0;
		padding: 40px;
		box-shadow: ${theme.layout.shadow.big};			
		z-index: 10;
	`}
`;

export const Wrapper = styled.div<{ $open: boolean }>`
	margin-left: auto;
	transition: opacity 0s;

	${media.lessThan('md')`
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: #00000099;
		z-index: 10;
		opacity: 0;
		pointer-events: none;
	`}

	${(props) => {
		if (props.$open) {
			return media.lessThan('md')`				
				opacity: 1;				
				transition: opacity 0.2s;
				pointer-events: all;

				${NavContainer} {
					left: 120px;				
				}
			`;
		}

		return null;
	}}
`;

export const NavbarItem = styled.div<{ active?: boolean }>`
	position: relative;
	display: inline-block;
	font-family: ${theme.layout.fonts.header};
	font-size: 24px;
	margin-right: 10px;
	color: ${(props) => props.theme.colors.disabled};
	text-decoration: none;
	border-bottom: 2px solid transparent;
	margin: 0 20px;
	transition: color 0.2s;

	a {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	${media.lessThan('lg')`
		margin: 0 12px;
	`}

	${media.lessThan('md')`
		font-size: 32px;
	`}

	${(props) =>
		props.active &&
		css`
			color: ${props.theme.colors.brown};
		`}

	&:hover {
		color: ${(props) => props.theme.colors.brown};
	}

	&:last-child {
		margin-right: 0;
	}
`;

export default NavbarItem;
