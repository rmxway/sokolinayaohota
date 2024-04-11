import Image from 'next/image';
import styled from 'styled-components';

import { LogoText } from '@/components/Header/Logo/styled';
import { defaultTheme as theme, media } from '@/theme';

export const Wrapper = styled.div`
	position: relative;
	padding: 80px 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	text-align: center;
	background-image: ${theme.colors.gradients.black()};
	background-color: ${theme.colors.solid.secondary};

	color: white;
	font-size: 1.25rem;
	text-align: left;

	${LogoText} {
		color: ${theme.colors.solid.primary};
	}

	${media.lessThan('lg')`
		padding: 40px 0 80px;
	`}

	${media.lessThan('md')`
		.info-grid {			
			grid-template-column: 1fr 1fr;
			grid-template-rows: auto auto;			
		}
	`}

	${media.lessThan('sm')`
		.info-grid {		
			justify-content: center;	
			grid-auto-flow: row;
			grid-template-column: 1fr;			
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
		font-size: 1.5rem;
		margin-bottom: 8px;
	}

	& > span,
	a {
		color: ${theme.colors.solid.primary};
		font-size: 1.25rem;
		line-height: 1.5;
		display: block;
	}

	${media.lessThan('md')`
		& > div {
			font-size: 1.25rem;
		}

		& > span, a {
			font-size: 1.125rem;
		};
	`}
`;

export const Copyright = styled.div`
	font-size: 1rem;
	color: ${theme.colors.solid.disabled};

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
	box-shadow: ${theme.layout.shadow.basic}, ${theme.layout.shadow.big},
		${theme.layout.shadow.big};
`;

export default Wrapper;
