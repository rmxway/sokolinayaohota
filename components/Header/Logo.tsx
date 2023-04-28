import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Grid } from '@/components/Layout';
import logo from '@/public/assets/img/logo.png';

import { LogoText } from './styled';

type LogoTypeProps = {
	href?: string;
};

const Logo: FC<LogoTypeProps> = ({ href = '/' }) => (
	<Link href={href} scroll={false}>
		<Grid align="center" gap={12}>
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
		</Grid>
	</Link>
);

export { Logo };
export default Logo;
