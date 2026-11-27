import { ImageStyled } from './styled';

type ImageBackgroundType = {
	image: string;
	quality?: number;
};

export const ImageBackground = ({ image, ...props }: ImageBackgroundType) => (
	<ImageStyled src={image} alt="image background" {...props} />
);
export default ImageBackground;
