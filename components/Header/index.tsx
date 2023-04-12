import { FC } from 'react';

import { Icon, Navbar, SVG } from '@/components';
import { Container, Space } from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import bannerImage from '@/public/assets/img/arka.jpg';

import { Logo } from './Logo';
import { Banner, BannerImage, Header, TopPanel, Wrapper } from './styled';

const HeaderBlock: FC = () => (
	<Wrapper>
		<TopPanel>
			<Container flex center gap={8}>
				<Icon icon="location" />
				<span>
					проезд Сокольнического круга, д.11 (справа от центрального
					входа в парк Сокольники)
				</span>
				<Space />
				<Icon icon="phone" />
				<span>+7 (499) 268-68-34</span>
			</Container>
		</TopPanel>
		<Header>
			<Container flex center spaceBetween>
				<Logo />
				<Space />
				<Navbar />
				<ButtonUI danger mobile>
					Заказать
				</ButtonUI>
			</Container>
		</Header>
		<Banner>
			<Container flex gap={40} direction="column" center>
				<h1>
					Роскошные банкетные залы <br />
					для проведения вашего мероприятия
				</h1>
				<h2>в самом зеленом парке Москвы</h2>
				<SVG name="BarDecor2" color="white" width="532px" />
			</Container>
		</Banner>
		<BannerImage
			src={bannerImage.src}
			alt="banner-image"
			width={bannerImage.width}
			height={bannerImage.height}
			placeholder="blur"
			blurDataURL={bannerImage.blurDataURL}
		/>
	</Wrapper>
);

export { HeaderBlock };
export default HeaderBlock;