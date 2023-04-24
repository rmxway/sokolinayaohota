import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Flexbox } from '@/components/Layout';
import logo from '@/public/assets/img/logo.png';

import { LogoText } from './styled';

type LogoTypeProps = {
	href?: string;
};

const Logo: FC<LogoTypeProps> = ({ href = '/' }) => (
	<Link href={href} scroll={false} style={{flexShrink: 0}}>
		<Flexbox align="center" gap={12}>
			<Image
				src={logo.src}
				blurDataURL={logo.blurDataURL}
				width={logo.width}
				height={logo.height}
				alt="Logo"
			/>
			<LogoText>
				Соколиная охота
				<span>Банкетный зал</span>
			</LogoText>
		</Flexbox>
	</Link>
);

export { Logo };
export default Logo;
