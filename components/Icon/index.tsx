import { FC } from 'react';

import icofont from '@/public/assets/fonts/icofont/icofont.json';

type IconType = {
	icon: keyof typeof icofont;
};

const Icon: FC<IconType> = ({ icon }) => (
	<i className={`icofont icofont-${icon}`} />
);

export { Icon };
export default Icon;
