import styled from 'styled-components';

import { GalleryImage } from '@/components/sections/main-page/GalleryBlock/styled';
import { defaultTheme as theme, media } from '@/theme';

export const WrapperGalleryPage = styled.div`
	padding-bottom: 40px;
	.gallery-grid {
		grid-template-columns: repeat(3, 1fr);
		width: 100%;

		${GalleryImage} {
			height: 240px;
			width: 100%;
		}

		${media.lessThan('lg')`
			${GalleryImage} {
				height: 200px;			
			}
		`}

		${media.lessThan('md')`
			${GalleryImage} {
				height: 140px;			
			}
		`}

		${media.lessThan('sm')`
            grid-template-columns: repeat(2, 1fr);
			gap: 12px;
        `}
	}
`;

export const CategoryButton = styled.button<{ $active: boolean }>`
	font-size: 1.25rem;
	color: ${(props) =>
		!props.$active
			? theme.colors.solid.disabled
			: theme.colors.solid.secondary};
	cursor: pointer;
	transition: all 0.2s;
`;

export default WrapperGalleryPage;
