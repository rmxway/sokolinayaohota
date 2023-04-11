import Image from 'next/image';
import { FC } from 'react';

import logo from '@/public/assets/img/logo.png';

const Logo: FC = () => (
	<Image
		src={logo.src}
		blurDataURL={logo.blurDataURL}
		width={logo.width}
		height={logo.height}
		alt="Logo"
	/>
);

export { Logo };
export default Logo;
