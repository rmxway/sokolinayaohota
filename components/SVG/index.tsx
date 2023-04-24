import { FC } from 'react';

import BarDecor from '@/public/assets/svg/bardecor-line.svg';
import BarDecor2 from '@/public/assets/svg/bardecor-line-2.svg';
import LogoDecor from '@/public/assets/svg/logo-decor.svg';
import { defaultTheme } from '@/theme';

interface SVGType {
	name: 'BarDecor' | 'BarDecor2' | 'LogoDecor';
	color?: 'white' | 'golden';
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
	const codeColor = () => {
		switch (color) {
			case 'white':
				return '#fff';
			case 'golden':
				return defaultTheme.colors.primary;
			default:
				return '#444';
		}
	};

	const props = {
		fill: codeColor(),
		style: { maxWidth: width, transform: `rotate(${inverse ? '180deg' : '0deg'})` },
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
