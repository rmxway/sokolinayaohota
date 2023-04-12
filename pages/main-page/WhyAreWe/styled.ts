import styled from 'styled-components';

import { YanoneKaffeesatzFont, ZenKakuFont } from '@/pages/fonts';
import { defaultTheme as theme } from '@/theme';

export const Wrapper = styled.div`
	position: relative;
	min-height: 1000px;
	height: 100vh;
	display: flex;
	text-align: center;
	align-items: center;
	padding: 80px 0;
	background-image: url('assets/img/why-we-are.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	h1 {
		color: ${theme.colors.disabled};
	}
`;

export const Advantages = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	gap: 20px;
`;

export const Item = styled.div`
	width: calc(50% - 20px);
	min-height: 200px;
	background-color: #fff;
	border-radius: ${theme.radius.blockRadius};
	border: 1px solid ${theme.colors.gray.$3};
	padding: 40px 24px;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	transition: all 0.2s;

	& > div {
		font-family: ${YanoneKaffeesatzFont.style.fontFamily};
		font-size: 24px;
		font-weight: 600;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		color: ${theme.colors.brown};
	}

	& > span {
		color: ${theme.colors.disabled}bb;
		font-family: ${ZenKakuFont.style.fontFamily};
		font-size: 20px;
		line-height: 24px;
		font-weight: 400;
		text-align: left;

		p {
			display: block;
			margin-bottom: 16px;
		}

		ul {
			li {
				list-style: disc;
				margin-bottom: 16px;
			}
		}
	}

	&:hover {
		box-shadow: ${theme.layout.shadow.big};
		z-index: 2;
	}
`;

export const Icon = styled.div`
	width: 120px;
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: ${theme.colors.brown}1a;

	.icofont {
		color: ${theme.colors.brown};
		font-size: 52px;
	}
`;

export default Wrapper;
