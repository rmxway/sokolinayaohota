import { FC } from 'react';

import { Icon, Navbar, SVG } from '@/components';
import { Container, Flexbox, Title } from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { useStore } from '@/hooks';
import bannerImage from '@/public/assets/img/arka.jpg';
import { actionChangeModal } from '@/store/actions';

import { Logo } from './Logo';
import { Banner, BannerImage, Header, TopPanel, Wrapper } from './styled';

const HeaderBlock: FC = () => {
	const { dispatch } = useStore();

	return (
		<Wrapper id="header">
			<TopPanel>
				<Container flex gap={8} spaceBetween center>
					<Flexbox gap={8} align="center" $noWrap>
						<Icon icon="location" />
						<div>
							проезд Сокольнического круга, д.11 (справа от
							центрального входа в парк Сокольники)
						</div>
					</Flexbox>
					<Flexbox gap={8} align="center" $noWrap $noShrink>
						<Icon icon="phone" />
						<div>+7 (499) 268-68-34</div>
					</Flexbox>
				</Container>
			</TopPanel>
			<Header>
				<Container flex center spaceBetween>
					<Logo />
					<Flexbox align="center" justify="space-between" $w100>
						<Navbar />
						<ButtonUI
							danger
							mobile
							onClick={() => dispatch(actionChangeModal('order'))}
						>
							Заказать
						</ButtonUI>
					</Flexbox>
				</Container>
			</Header>
			<Banner>
				<Container flex gap={40} direction="column" center>
					<Title>
						Роскошные банкетные залы <br />
						для проведения вашего мероприятия
					</Title>
					<Title color="primary">в самом зеленом парке Москвы</Title>
					<SVG name="BarDecor2" color="white" width="50%" />
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
};

export { HeaderBlock };
export default HeaderBlock;
