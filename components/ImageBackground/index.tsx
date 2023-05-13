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
		src={image}
		quality={quality}
		placeholder="blur"
		alt="image background"
		className={styles.imageBackground}
		fill
		{...props}
	/>
);
export default ImageBackground;
