// import Image from 'next/image';
import { FC } from 'react';

import BarDecor from '@/public/assets/svg/bardecor-line.svg';
import BarDecor2 from '@/public/assets/svg/bardecor-line-2.svg';
import { defaultTheme } from '@/theme';

type SVGType = {
	name: 'BarDecor' | 'BarDecor2';
	color?: 'white' | 'golden';
	width?: string;
};

const SVG: FC<SVGType> = ({ name, color, width }) => {
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
	if (name === 'BarDecor')
		return <BarDecor fill={codeColor()} stroke="" width={width} />;
	if (name === 'BarDecor2')
		return <BarDecor2 fill={codeColor()} stroke="" width={width} />;

	return null;
};

export { SVG };
export default SVG;
