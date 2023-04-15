import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logo from '@/public/assets/img/logo.png';

const Logo: FC = () => (
	<Link href="/">
		<Image
			src={logo.src}
			blurDataURL={logo.blurDataURL}
			width={logo.width}
			height={logo.height}
			alt="Logo"
		/>
	</Link>
);

export { Logo };
export default Logo;
