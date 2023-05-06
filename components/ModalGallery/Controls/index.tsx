import { Icon } from '@/components';

import { Wrapper } from './styled';

export const Controls = () => (
	<Wrapper slot="wrapper-end">
		<Icon
			icon="arrow-simple"
			as="button"
			className="btn btn-prev"
			active
			size={20}
		/>
		<Icon
			icon="arrow-simple"
			as="button"
			className="btn btn-next"
			active
			size={20}
		/>
	</Wrapper>
);
export default Controls;
