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
				src={logoImage2x}
				quality={70}
				alt="Logo"
				priority
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
