'use client';

import Image, { ImageProps } from 'next/image';
import { FC, UIEvent, useState } from 'react';
import styled from 'styled-components';

import { Preloader } from '@/components/ui/Preloader';
import { Ellipsis } from '@/components/ui/Preloader/styled';

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

	display: block;

	&.loaded {
		opacity: 1;
	}
`;

export const FetchedImage: FC<ImageProps & { light?: boolean }> = ({
	className,
	light,
	...props
}) => {
	const [loaded, setLoaded] = useState(false);

	const eventLoaded = (e: UIEvent<HTMLImageElement>) => {
		const image = e.currentTarget;

		image.classList.add('loaded');
		setLoaded((prev) => !prev);
	};

	return (
		<WrapperFetchedImage {...{ className }}>
			{!loaded && <Preloader {...{ light }} />}
			<ImageStyled {...props} onLoad={eventLoaded} />
		</WrapperFetchedImage>
	);
};

export default FetchedImage;
