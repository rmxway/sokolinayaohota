import styled from 'styled-components';

import { media } from '@/theme';

const StyledNavbar = styled.div`
	position: fixed;
	top: 0;
	z-index: 100;
	width: 100%;
	height: 70px;
	background-color: ${(props) => props.theme.colors.primary};
	text-align: center;
	display: flex;
	align-items: center;
`;

const NavbarItem = styled.div`
	position: relative;
	display: inline-block;
	margin-right: 10px;
	font-size: 1rem;
	color: #222;
	text-decoration: none;
	border-bottom: 2px solid transparent;

	a {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	${media.greaterThan('xs')`
            font-size: 20px;
            margin-right: 20px;
        `}

	&:hover {
		color: #444;
	}

	&:last-child {
		margin-right: 0;
	}
`;

export { NavbarItem, StyledNavbar };
