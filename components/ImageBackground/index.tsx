import Image, { StaticImageData } from 'next/image';

import styles from './styles.module.scss';

type ImageBackgroundType = {
	image: StaticImageData;
	quality?: number;
};

export const ImageBackground = ({
	image,
	quality = 70,
	...props
}: ImageBackgroundType) => (
	<Image
		src={image.src}
		width={1000}
		height={1000}
		alt="image background"
		quality={quality}
		placeholder="blur"
		blurDataURL={image.blurDataURL}
		className={styles.imageBackground}
		{...props}
	/>
);
export default ImageBackground;
