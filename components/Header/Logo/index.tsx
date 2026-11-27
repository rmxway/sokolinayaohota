import { FC } from 'react';

import { Grid } from '@/components/Layout';
import logoImage2x from '/assets/img/logo-2x.png';

import { LogoText, LogoWrapper } from './styled';

interface LogoTypeProps {
	href?: string;
}

const Logo: FC<LogoTypeProps> = ({ href = '/' }) => (
	<LogoWrapper to={href}>
		<Grid $align="center" $gap={12}>
			<img src={logoImage2x} alt="Logo" />
			<LogoText>
				Соколиная охота
				<span>Банкетный зал</span>
			</LogoText>
		</Grid>
	</LogoWrapper>
);

export { Logo };
export default Logo;
