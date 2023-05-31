import styled from 'styled-components';

import { defaultTheme as theme, media } from '@/theme';

export const WrapperGalleryPage = styled.div`
	padding-bottom: 40px;
	.gallery-grid {
		grid-template-columns: repeat(3, 1fr);

		${media.lessThan('sm')`
            grid-template-columns: repeat(2, 1fr);
        `}
	}
`;

export const CategoryButton = styled.button<{ $active: boolean }>`
	font-size: 1.25rem;
	color: ${(props) =>
		!props.$active
			? theme.colors.solid.disabled
			: theme.colors.solid.brown};
	cursor: pointer;
	transition: all 0.2s;
`;

export default WrapperGalleryPage;
