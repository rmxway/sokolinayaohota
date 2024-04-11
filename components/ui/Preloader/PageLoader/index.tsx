import { FC } from 'react';

import { Preloader } from '@/components/ui/Preloader';

import { Wrapper } from '../styled';

type PageLoaderProps = {
	absolute?: boolean;
	noDelay?: boolean;
};

export const PageLoader: FC<PageLoaderProps> = ({ absolute, noDelay }) => (
	<Wrapper $absolute={absolute} $nodelay={noDelay}>
		<Preloader />
	</Wrapper>
);
export default PageLoader;
