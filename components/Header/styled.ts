import Image from 'next/image';
import styled from 'styled-components';

import { Button } from '@/components/ui/Button/styled';
import { defaultTheme as theme, media } from '@/theme';

export const Wrapper = styled.div`
	position: relative;
	display: block;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	${media.lessThan('md')`
		padding-top: 88px;
	`}
`;

export const Header = styled.header`
	position: relative;
	padding: 12px 0;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0.99) 0%,
		#fff 42.71%,
		rgba(255, 255, 255, 0.9) 76.04%,
		rgba(255, 255, 255, 0.94) 82.29%
	);

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	z-index: 100;

	${media.lessThan('md')`
		position: fixed;
		top: 0;	
		width: 100%;
		box-shadow: ${theme.layout.shadow.big};

		${Button} {
			display: none;
		}
	`}
`;

export const BannerImage = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: bottom;
	z-index: 0;
	filter: blur(2px);
`;

export const Banner = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	justify-content: center;
	text-align: center;
	gap: 40px;
	flex-wrap: nowrap;
	min-height: 500px;
	z-index: 1;
	padding: 40px 0;

	${media.lessThan('lg')`
		min-height: auto;
	`}

	h1,
	h2 {
		margin: 0;
	}

	h2 {
		font-size: 72px;
	}
`;

export default Wrapper;
