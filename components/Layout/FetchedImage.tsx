import Image, { ImageProps } from 'next/image';
import { FC, useState } from 'react';
import styled from 'styled-components';

import { Preloader } from '@/components/Layout/Preloader';
import { Ellipsis } from '@/components/Layout/Preloader/styled';

export const WrapperFetchedImage = styled.div`
	position: relative;

	${Ellipsis} {
		position: absolute;
		top: calc(50% - 38px);
		left: calc(50% - 38px);
		z-index: 1;
	}
`;

const ImageStyled = styled(Image)`
	opacity: 0;
	transition: all 0.4s;
	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 100%;

	&.loaded {
		opacity: 1;
	}
`;

export const FetchedImage: FC<ImageProps> = ({ className, ...props }) => {
	const [loaded, setLoaded] = useState(false);

	const eventLoaded = (event: HTMLImageElement) => {
		event.classList.add('loaded');
		setLoaded((prev) => !prev);
	};

	return (
		<WrapperFetchedImage {...{ className }}>
			{!loaded && <Preloader />}
			<ImageStyled {...props} onLoadingComplete={eventLoaded} />
		</WrapperFetchedImage>
	);
};

export default FetchedImage;
