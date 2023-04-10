import 'styled-components';

interface Colors {
	primary: string;
	success: string;
    danger: string;
	disabled: string;
    brown: string;
	gray: {
		$1: string;
		$2: string;
		$3: string;
		$4: string;
		$5: string;
		$6: string;
		$7: string;
		$8: string;
		$9: string;
	};
	gradients: {
		golden: string;
		brown: string;
		rubin: string;
		disabled: string;
	};
}

interface Layout {
	containerWidth: string;
    shadow: string;
}

interface Radius {
	borderRadius: string;
	blockRadius: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		name: string;
		colors: Colors;
		layout: Layout;
		radius: Radius;
	}
}