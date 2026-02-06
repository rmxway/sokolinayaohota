import Image from 'next/image';
import styled from 'styled-components';

export const ImageStyled = styled(Image)`
	object-fit: cover;
	object-position: center;
	background-repeat: no-repeat;
	z-index: -1;
`;
