import 'styled-components';

type Gradient = (deg?: string) => string;

type Solid =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'disabled'
	| 'brown'
	| 'white'
	| 'base';
type Gray = '$1' | '$2' | '$3' | '$4' | '$5' | '$6' | '$7' | '$8' | '$9';
type Gradients =
	'golden' | 'brown' | 'rubin' | 'disabled' | 'black' | 'black2' | 'light';
type Fonts = 'header' | 'inter' | 'old' | 'body';
type Shadows = 'basic' | 'big' | 'gallery';
type Radiuses = 'border' | 'block';

interface Colors {
	solid: Record<Solid, string>;
	gray: Record<Gray, string>;
	gradients: Record<Gradients, Gradient>;
}

interface Layout {
	fonts: Record<Fonts, string>;
	containerWidth: string;
	shadow: Record<Shadows, string>;
}

type Radius = Record<Radiuses, string>;

declare module 'styled-components' {
	export interface DefaultTheme {
		name: string;
		colors: Colors;
		layout: Layout;
		radius: Radius;
	}
}
