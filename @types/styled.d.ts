import 'styled-components';

interface Colors {
	solid: {
		primary: string;
		success: string;
		danger: string;
		disabled: string;
		brown: string;
		white: string;
		base: string;
	};
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
		golden: (deg?: string) => string;
		brown: (deg?: string) => string;
		rubin: (deg?: string) => string;
		disabled: (deg?: string) => string;
		black: (deg?: string) => string;
	};
}

interface Layout {
	fonts: {
		header: string;
		old: string;
		body: string;
	};
	containerWidth: string;
	shadow: {
		basic: string;
		big: string;
		gallery: string;
	};
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
