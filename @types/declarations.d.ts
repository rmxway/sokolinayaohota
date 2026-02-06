declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}

declare module '*.jpg' {
	import type { StaticImageData } from 'next/image';

	const content: StaticImageData;
	export default content;
}

declare module '*.png' {
	import type { StaticImageData } from 'next/image';

	const content: StaticImageData;
	export default content;
}

declare module '*.webp' {
	import type { StaticImageData } from 'next/image';

	const content: StaticImageData;
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
