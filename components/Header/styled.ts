import Image from 'next/image';
import styled from 'styled-components';

import { Container, Flexbox } from '@/components/Layout';
import { Button } from '@/components/ui/Button/styled';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	display: block;
	display: flex;
	flex-direction: column;
`;

export const TopPanel = styled.div`
	background-color: rgba(255, 255, 255, 0.75);
	font-weight: 500;
	font-size: 18px;
	line-height: 1.2;
	padding: 12px 0;
	z-index: 1;

	${Container} {
		height: 100%;
	}

	${Flexbox} {
		flex-direction: row;
		justify-content: flex-start;
		text-align: inherit;
	}

	a,
	& {
		color: ${theme.colors.brown};
	}

	${media.lessThan('sm')`
		height: auto;
		padding: 20px 0;

		${Container} {
			align-items: start;
			grid-auto-flow: row;
			justify-items: start;
			gap: 20px;
		}
	`}
`;

export const Header = styled.header`
	position: relative;
	height: 100px;
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
	z-index: 1;

	${media.lessThan('md')`
		height: auto;
		padding: 20px 0;

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

export const LogoText = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	color: ${theme.colors.brown};
	font-family: ${theme.layout.fonts.old};
	font-size: 20px;

	& > span {
		font-family: ${theme.layout.fonts.header};
	}
`;

export const Banner = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	justify-content: center;
	text-align: center;
	gap: 40px;
	flex-wrap: nowrap;
	min-height: 600px;
	height: 80vh;
	z-index: 1;

	h1,
	h2 {
		margin: 0;
	}

	h1 {
		color: #fff;
	}

	h2 {
		font-size: 72px;
		color: ${theme.colors.primary};
	}
`;

export default Wrapper;
