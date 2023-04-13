import { FC } from 'react';

import icofont from '@/public/assets/fonts/icofont/icofont.json';

type IconType = {
	icon: keyof typeof icofont;
	size?: number;
};

const Icon: FC<IconType> = ({ icon, size }) => (
	<i
		className={`icofont icofont-${icon}`}
		style={{ pointerEvents: 'none', fontSize: size }}
	/>
);

export { Icon };
export default Icon;
