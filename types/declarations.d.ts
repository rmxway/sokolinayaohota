/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}

declare module '*.json' {
	const content: string;
	export default content;
}

declare module '*.svg' {
	import { FC, SVGProps } from 'react';

	const ReactComponent: FC<SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}
