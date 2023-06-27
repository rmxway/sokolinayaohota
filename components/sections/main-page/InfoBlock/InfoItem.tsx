import { FC } from 'react';

import { Icon } from '@/components/Icon';
import IcofontNames from '@/public/assets/fonts/icofont/icofont.json';

import { Item } from './styled';

type InfoItemProps = {
	icon: keyof typeof IcofontNames;
	children: React.ReactNode;
	border?: boolean;
};

export const InfoItem: FC<InfoItemProps> = ({ icon, children, border }) => (
	<Item $border={border || false}>
		<Icon {...{ icon }} />
		<div>{children}</div>
	</Item>
);
export default InfoItem;
