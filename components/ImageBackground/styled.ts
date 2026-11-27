import { styled } from 'styled-components';

export const ImageStyled = styled.img`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	background-repeat: no-repeat;
	z-index: -1;
`;
