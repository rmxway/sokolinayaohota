import { ElementType, FC } from 'react';

import icofont from '@/public/assets/fonts/icofont/icofont.json';
import { defaultTheme as theme } from '@/theme';

interface IconType {
	/** Select tag of component */
	as?: ElementType;
	active?: boolean;
	/** Select icon */
	icon: keyof typeof icofont;
	/** Select color */
	color?: keyof typeof theme.colors.solid;
	/** Size icon in pixels */
	size?: number;
	className?: string;
}

const Icon: FC<IconType> = ({
	as: Tag = 'i',
	active,
	icon,
	color,
	size,
	className,
}) => (
	<Tag
		className={`icofont icofont-${icon} ${className}`}
		style={{
			pointerEvents: active ? 'all' : 'none',
			fontSize: size,
			color: color ? theme.colors.solid[color] : undefined,
		}}
	/>
);
export { Icon };
export default Icon;
