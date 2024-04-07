import { FC } from 'react';

import { Ellipsis } from './styled';

interface PreloaderProps {
	light?: boolean;
}

export const Preloader: FC<PreloaderProps> = ({ light }) => (
	<Ellipsis $light={light}>
		<div />
		<div />
		<div />
		<div />
	</Ellipsis>
);

export default Preloader;
