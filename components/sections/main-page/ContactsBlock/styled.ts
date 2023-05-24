import Image from 'next/image';
import { desaturate } from 'polished';
import styled from 'styled-components';

import { LogoText } from '@/components/Header/Logo/styled';
import { defaultTheme as theme } from '@/theme';
import { media } from '@/theme/media';

export const Wrapper = styled.div`
	position: relative;
	padding: 80px 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	text-align: center;
	background-image: linear-gradient(
		0deg,
		${desaturate(0.35, theme.colors.brown)} 0%,
		#1c1c1c 95%
	);
	background-color: ${theme.colors.brown};

	${LogoText} {
		color: ${theme.colors.primary};
	}

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
		color: ${theme.colors.primary};
		font-size: 1.25rem;
		font-weight: 400;
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
	color: ${theme.colors.disabled};

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
