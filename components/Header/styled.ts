import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	display: block;
	display: flex;
	flex-direction: column;
`;

export const TopPanel = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	color: ${(props) => props.theme.colors.brown};
	background-color: rgba(255, 255, 255, 0.75);
	font-weight: medium;
	font-size: 18px;
	line-height: 1;

	span {
		height: 24px;
	}
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
`;

export const BannerImage = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: bottom;
	z-index: -1;
`;

export const Banner = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	justify-content: center;
	text-align: center;
	gap: 40px;
	flex-wrap: nowrap;
	min-height: 800px;

	h1,
	h2 {
		margin: 0;
	}

	h1 {
		color: #fff;
	}

	h2 {
		font-size: 72px;
		color: ${(props) => props.theme.colors.primary};
	}
`;

export default Wrapper;
