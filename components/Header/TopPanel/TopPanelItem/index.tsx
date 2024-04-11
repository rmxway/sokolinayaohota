import { FC } from 'react';

import { Icon } from '@/components';
import { Grid } from '@/components/Layout';
import { useStore } from '@/hooks';
import icofont from '@/public/assets/fonts/icofont/icofont.json';

export interface TopPanelType {
	icon: keyof typeof icofont;
	content: string | React.ReactNode;
}

interface CommonType extends TopPanelType {
	onSend?: (e: TopPanelType) => void;
}

export const TopPanelItem: FC<CommonType> = ({ icon, content, onSend }) => {
	const { state } = useStore();
	const handleClick = () => {
		if (onSend) onSend({ icon, content });
	};

	return (
		<Grid $gap={8} $align="center" onClick={handleClick}>
			<Icon
				active
				as="button"
				icon={icon}
				className={state.topPanel === icon ? 'active' : ''}
			/>
			<div>{content}</div>
		</Grid>
	);
};

export default TopPanelItem;
