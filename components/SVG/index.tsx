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

export const SVG = ({
	name,
	color,
	width,
	inverse,
	...propsComponent
}: SVGType) => {
	const props = {
		fill: theme.colors[color || 'disabled'],
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
			return <div>Nothing</div>;
	}
};

export default SVG;
