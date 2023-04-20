import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	text-align: center;
	align-items: center;
	padding: 80px 0;

	&:before {
		position: absolute;
		content: '';
        top: 0;
		left: 0;
		width: 100%;
		min-height: 950px;
		background-image: url('assets/img/why-we-are.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
`;

export const Advantages = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: stretch;
	gap: 20px;
`;

export const Item = styled.div`
	width: calc(25% - 20px);
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
		font-family: ${theme.layout.fonts.header};
		font-size: 24px;
		font-weight: 600;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		color: ${theme.colors.brown};
	}

	& > span {
		color: ${theme.colors.disabled}bb;
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

export const IconWrapper = styled.div`
	width: 120px;
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: ${theme.colors.brown}1a;

	.icofont {
		color: ${theme.colors.brown};
	}
`;

export default Wrapper;
