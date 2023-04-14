import { ElementType } from 'react';

import icofont from '@/public/assets/fonts/icofont/icofont.json';

interface IconType {
	as?: ElementType;
	active?: boolean;
	icon: keyof typeof icofont | string;
	size?: number;
	className?: string;
}

const Icon = ({ as: Tag = 'i', active, icon, size, className }: IconType) => (
	<Tag
		className={`${className} icofont icofont-${icon}`}
		style={{ pointerEvents: active ? 'all' : 'none', fontSize: size }}
	/>
);
export { Icon };
export default Icon;
