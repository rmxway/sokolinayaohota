import styled, { css } from 'styled-components';

import { defaultTheme as theme, media } from '@/theme';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 40px 5px;
	font-family: ${theme.layout.fonts.header};
	font-size: 24px;
`;

export const NavbarItem = styled.div<{ active?: boolean }>`
	position: relative;
	display: inline-block;
	margin-right: 10px;
	color: ${(props) => props.theme.colors.disabled};
	text-decoration: none;
	border-bottom: 2px solid transparent;
	margin: 0 20px;
	transition: all 0.2s;

	a {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	/* ${media.greaterThan('xs')`
		font-size: 20px;
		margin-right: 20px;
	`} */
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
