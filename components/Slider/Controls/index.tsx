import { FC } from 'react';

import { Icon } from '@/components';

import { Wrapper } from './styled';

type ControlsType = {
	name?: string;
};

export const Controls: FC<ControlsType> = ({ name }) => (
	<Wrapper slot="wrapper-end">
		<Icon
			icon="arrow-simple"
			as="button"
			className={`btn ${name ? `btn-${name}` : ''} btn-prev`}
			active
			size={20}
		/>
		<Icon
			icon="arrow-simple"
			as="button"
			className={`btn ${name ? `btn-${name}` : ''} btn-next`}
			active
			size={20}
		/>
	</Wrapper>
);
export default Controls;
