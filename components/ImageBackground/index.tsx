import { StaticImageData } from 'next/image';

import { ImageStyled } from './styled';

type ImageBackgroundType = {
	image: StaticImageData | string;
	quality?: number;
};

export const ImageBackground = ({
	image,
	quality = 70,
	...props
}: ImageBackgroundType) => (
	<ImageStyled
		src={image}
		quality={quality}
		placeholder="blur"
		alt="image background"
		fill
		{...props}
	/>
);
export default ImageBackground;
