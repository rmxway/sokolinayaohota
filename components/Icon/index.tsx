import { ElementType, FC } from 'react';

import icofont from '@/public/assets/fonts/icofont/icofont.json';

interface IconType {
	/** Select tag of component */
	as?: ElementType;
	active?: boolean;
	/** Select icon */
	icon: keyof typeof icofont;
	size?: number;
	className?: string;
}

const Icon: FC<IconType> = ({
	as: Tag = 'i',
	active,
	icon,
	size,
	className,
}) => (
	<Tag
		className={`icofont icofont-${icon} ${className}`}
		style={{
			pointerEvents: active ? 'all' : 'none',
			fontSize: size,
		}}
	/>
);
export { Icon };
export default Icon;
