import Image from 'next/image';
import styled from 'styled-components';

import { LogoText } from '@/components/Header/Logo/styled';
import { Container } from '@/components/Layout';
import { defaultTheme as theme, media } from '@/theme';

export const Wrapper = styled.div`
	flex-grow: 1;
	position: relative;
	width: 100%;
	padding: 80px 0;
	background-image: ${theme.colors.gradients.black()};
	background-color: ${theme.colors.solid.secondary};

	color: white;
	font-size: 1.25rem;
	text-align: left;

	${LogoText} {
		color: ${theme.colors.solid.primary};
	}

	.info-grid {
		grid-template-columns: 1fr 1fr 1fr;
	}

	${media.lessThan('lg')`
		padding: 40px 0;		
	`}

	${media.lessThan('md')`
		.info-grid {			
			grid-template-columns: 1fr 1fr;
			grid-auto-flow: row;
		}
		
		${Container} {
			gap: 20px;
		}}
	`}

	${media.lessThan('sm')`
		.info-grid {
			justify-items: center;
			grid-template-columns: 1fr;			
		}
	`}
`;

export const InfoBlock = styled.div`
	text-align: left;
	margin: 12px;

	& > div {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: 24px 1fr;
		gap: 12px;
		align-items: center;
		color: #fff;
		font-family: ${theme.layout.fonts.header};
		font-size: 1.4rem;
		margin-bottom: 8px;
	}

	& > span,
	a {
		color: ${theme.colors.solid.primary};
		font-size: 1.2rem;
		line-height: 1.5;
		display: block;
	}

	${media.lessThan('lg')`
		& > div {
			font-size: 1.2rem;
		}

		& > span, a {
			font-size: 1.1rem;
		};
	`}

	${media.lessThan('sm')`	
		& > div {			
			display: inline-grid;
		}	
		text-align: center;
	`}
`;

export const Copyright = styled.div`
	font-size: 1rem;
	color: ${theme.colors.solid.primary}55;

	${media.lessThan('md')`
		font-size: 1rem;
	`}
`;

export const MapWrapper = styled.div`
	position: relative;
	min-height: 500px;
	width: 100%;
	margin: 20px 0;
`;

export const Map = styled(Image)`
	object-fit: cover;
	object-position: center;
	border-radius: ${theme.radius.blockRadius};
	box-shadow:
		${theme.layout.shadow.basic}, ${theme.layout.shadow.big},
		${theme.layout.shadow.big};
`;

export default Wrapper;
