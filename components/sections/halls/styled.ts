import styled, { css } from 'styled-components';

import { Container, Flexbox } from '@/components/Layout';
import { SliderStyle, SliderWrapper } from '@/components/Slider/styled';
import { defaultTheme as theme, media } from '@/theme';

export const MainBlock = styled(Container)`
	padding-top: 80px;
	padding-bottom: 80px;
	min-height: 50vh;
	align-items: start;

	${media.lessThan('lg')`
		padding-top: 40px;
		padding-bottom: 40px;
		min-height: auto;
	`}

	${media.lessThan('md')`
		grid-auto-flow: row;
	`}
`;

export const Sidebar = styled.div`
	position: sticky;
	top: 20px;
	bottom: 20px;
	height: auto;

	p {
		font-size: 1.25rem;
	}

	a {
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
		color: ${theme.colors.solid.disabled};
		cursor: pointer;

		&:hover,
		&.active {
			color: ${theme.colors.solid.secondary};
		}
	}

	${media.lessThan('lg')`
		a {
			font-size: 1.25rem;
		}
	`}

	${media.lessThan('md')`
		position: relative;
		top: 0;	
		width: 100%;
	`}
`;

export const FormBlock = styled.div`
	position: relative;
	min-height: 40vh;
	padding: 80px 0;
	background-image: ${theme.colors.gradients.black('-160deg')};
	color: ${theme.colors.solid.primary};

	${Container} {
		grid-template-columns: 1fr 1.5fr;
	}

	.info {
		display: block;
		font-size: 1.35rem;
		text-align: left;
		color: ${theme.colors.solid.primary};
	}

	${media.lessThan('lg')`
		padding: 40px 0 80px;
		min-height: auto;
		
		${Container} {		
			grid-auto-flow: row;
			grid-template-columns: 1fr;
		}

		.info {
			font-size: 1.15rem;
		}
	`}
`;

export const HallsPageWrapper = styled(Flexbox)`
	position: relative;
	flex-wrap: nowrap;
	min-width: 1px;
	border-left: 1px solid silver;
	padding-left: 40px;

	${SliderWrapper} {
		${SliderStyle}, .error-message {
			height: 50dvw;
			max-height: 400px;
		}
	}

	${media.lessThan('xl')`	
		flex-direction: column;
		gap: 20px;
	`}

	${media.lessThan('md')`
		border-left: none;		
		border-top: 1px solid silver;
		padding-left: 0;
		padding-top: 40px;

		${SliderWrapper} {
			min-height: auto;
		}	
	`}
`;

export const BlockContent = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	min-width: 1%;
	font-size: 1.285rem;

	${media.lessThan('lg')`
		font-size: 1.15rem;
	`}
`;

export const RightBlock = styled.div`
	position: sticky;
	top: 20px;
	bottom: 20px;
	width: 500px;

	${media.lessThan('xl')`
		position: relative;		
		width: 100%;
		top: 0;
		bottom: 0;
	`}
`;

const CommonStyles = css`
	${media.lessThan('lg')`
		ul {
			gap: 12px;
		}
	`}

	& > .icofont {
		position: absolute;
		left: 40%;
		top: 8px;
		opacity: 0.1;
		pointer-events: none;
		font-size: 300px;
	}

	${media.lessThan('xl')`
		.icofont {
			font-size: 350px;
		}
	`}
`;

export const HallAdvantages = styled.div`
	position: relative;
	padding: 40px;
	width: 100%;
	background-image: ${theme.colors.gradients.golden('-45deg')};
	border-radius: ${theme.radius.blockRadius};
	color: ${theme.colors.solid.secondary};
	overflow: hidden;

	${CommonStyles}

	ul {
		list-style: none;
		text-transform: uppercase;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 20px;

		font-family: ${theme.layout.fonts.header};
		font-size: 1.5rem;
		line-height: 1.2;

		li {
			display: grid;
			grid-auto-flow: column;
			grid-template-columns: 20px 1fr;
			gap: 12px;
		}
	}

	${media.lessThan('lg')`
		ul {
			font-size: 1.25rem;
			line-height: 1;

			gap: 16px;
		}
	`}
`;

export const PhoneBlock = styled.div`
	position: relative;
	padding: 40px;
	margin-top: 20px;
	border-radius: ${theme.radius.blockRadius};
	background-image: ${theme.colors.gradients.black('180deg')};
	color: #fff;
	overflow: hidden;

	${CommonStyles}

	div {
		font-family: ${theme.layout.fonts.header};
		font-size: 1.5rem;
		text-transform: uppercase;
		line-height: 1.2;
		margin-bottom: 8px;
	}

	p {
		font-size: 1.2rem;
	}

	a {
		display: block;
		font-size: 1.4rem;
		font-weight: 500;
		margin: 0 8px 4px 0;
		color: #fff;
	}

	${media.lessThan('lg')`
		div {
			font-size: 1.25rem;
		}

		p {
			font-size: 1rem;
		}
	
		a {
			font-size: 1rem;
			line-height: 1;
			margin: 0 4px 4px 0;
		}
	`}
`;
