import Image from 'next/image';
import { FC } from 'react';

import { Grid } from '@/components/Layout';
import logoImage2x from '@/public/assets/img/logo-2x.png';

import { LogoText, LogoWrapper } from './styled';

type LogoTypeProps = {
	href?: string;
};

const Logo: FC<LogoTypeProps> = ({ href = '/' }) => (
	<LogoWrapper href={href} scroll={false}>
		<Grid align="center" gap={12}>
			<Image
				src={logoImage2x.src}
				blurDataURL={logoImage2x.blurDataURL}
				placeholder="empty"
				width={logoImage2x.width}
				height={logoImage2x.height}
				quality={70}
				priority
				alt="Logo"
			/>
			<LogoText>
				Соколиная охота
				<span>Банкетный зал</span>
			</LogoText>
		</Grid>
	</LogoWrapper>
);

export { Logo };
export default Logo;
