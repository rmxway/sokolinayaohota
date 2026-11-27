import { FC } from 'react';

import BarDecor from '@/src/assets/svg/bardecor-line.svg?react';
import BarDecor2 from '@/src/assets/svg/bardecor-line-2.svg?react';
import LogoDecor from '@/src/assets/svg/logo-decor.svg?react';
import { defaultTheme as theme } from '@/theme';

interface SVGType {
	/** Select Icon */
	name: 'BarDecor' | 'BarDecor2' | 'LogoDecor';
	color?: keyof typeof theme.colors.solid;
	width?: string;
	inverse?: boolean;
}

export const SvgIcon: FC<SVGType> = ({
	name,
	color,
	width,
	inverse,
	...propsComponent
}) => {
	const transform = `${inverse ? 'rotate(180deg)' : 'none'}`;
	const props = {
		fill: theme.colors.solid[color || 'disabled'],
		style: {
			maxWidth: width,
			transform,
		},
		...propsComponent,
	};

	switch (name) {
		case 'BarDecor':
			return <BarDecor {...props} />;
		case 'BarDecor2':
			return <BarDecor2 {...props} />;
		case 'LogoDecor':
			return <LogoDecor {...props} />;
		default:
			return <div>Nothing</div>;
	}
};

export default SvgIcon;
