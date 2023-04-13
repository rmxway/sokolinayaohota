// import Image from 'next/image';
import { FC, memo } from 'react';

import BarDecor from '@/public/assets/svg/bardecor-line.svg';
import BarDecor2 from '@/public/assets/svg/bardecor-line-2.svg';
import LogoDecor from '@/public/assets/svg/logo-decor.svg';
import { defaultTheme } from '@/theme';

type SVGType = {
	name: 'BarDecor' | 'BarDecor2' | 'LogoDecor';
	color?: 'white' | 'golden';
	width?: string;
};

const SVG: FC<SVGType> = memo(({ name, color, width }) => {
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
		width,
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
});

export { SVG };
export default SVG;
