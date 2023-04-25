import { FC } from 'react';

import BarDecor from '@/public/assets/svg/bardecor-line.svg';
import BarDecor2 from '@/public/assets/svg/bardecor-line-2.svg';
import LogoDecor from '@/public/assets/svg/logo-decor.svg';
import { defaultTheme as theme } from '@/theme';

interface SVGType {
	name: 'BarDecor' | 'BarDecor2' | 'LogoDecor';
	color?: keyof typeof theme.colors;
	width?: string;
	inverse?: boolean;
}

export const SVG: FC<SVGType> = ({
	name,
	color,
	width,
	inverse,
	...propsComponent
}) => {
	const props = {
		fill: theme.colors[color || 'gray'],
		style: {
			maxWidth: width,
			transform: `rotate(${inverse ? '180deg' : '0deg'})`,
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
			return null;
	}
};

export default SVG;
