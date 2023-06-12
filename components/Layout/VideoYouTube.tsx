import { FC } from 'react';
import styled from 'styled-components';

import { defaultTheme as theme } from '@/theme';

export const VideoYouTubeWrapper = styled.div`
	position: relative;
	padding-bottom: 55%;
	margin-bottom: 20px;

	iframe {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: ${theme.colors.gray.$3};
		aspect-ratio: 16/9;
		border-radius: ${theme.radius.blockRadius};
	}
`;

type VideoYouTubeProps = {
	src: string;
};

export const VideoYouTube: FC<VideoYouTubeProps> = ({ src }) => (
	<VideoYouTubeWrapper>
		<iframe
			src={src}
			width="100%"
			height="100%"
			title="YouTube video player"
			allowFullScreen
		/>
	</VideoYouTubeWrapper>
);
export default VideoYouTube;
