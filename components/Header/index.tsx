import { FC } from 'react';

import { Icon, Navbar, SVG } from '@/components';
import { Container, Grid, Title } from '@/components/Layout';
import { ModalFormOrder } from '@/components/ModalFormOrder';
import { ButtonUI } from '@/components/ui';
import { useStore } from '@/hooks';
import bannerImage from '@/public/assets/img/arka.jpg';
import { actionChangeModal } from '@/store/actions';

import { Logo } from './Logo';
import { Banner, BannerImage, Header, TopPanel, Wrapper } from './styled';

const HeaderBlock: FC = () => {
	const { state, dispatch } = useStore();

	return (
		<>
			<Wrapper id="header">
				<TopPanel>
					<Container grid gap={8} spaceBetween center>
						<Grid gap={8} align="center">
							<Icon icon="location" />
							<div>
								проезд Сокольнического круга, д.11 (справа от
								центрального входа в парк Сокольники)
							</div>
						</Grid>
						<Grid gap={8} align="center">
							<Icon icon="phone" />
							<a href="tel:+74992686834">+7 (499) 268-68-34</a>
						</Grid>
					</Container>
				</TopPanel>
				<Header>
					<Container grid center spaceBetween>
						<Logo />
						<Grid align="center" justify="space-between" $w100>
							<Navbar />
							<ButtonUI
								danger
								mobile
								onClick={() =>
									dispatch(actionChangeModal('order'))
								}
							>
								Заказать
							</ButtonUI>
						</Grid>
					</Container>
				</Header>
				<Banner>
					<Container grid gap={40} direction="row" center>
						<Title>
							Роскошные банкетные залы <br />
							для проведения вашего мероприятия
						</Title>
						<Title color="primary">
							в самом зеленом парке Москвы
						</Title>
						<SVG name="BarDecor2" color="white" width="450px" />
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
			<ModalFormOrder
				show={state.modal === 'order'}
				onClose={() => dispatch(actionChangeModal(''))}
			/>
		</>
	);
};

export { HeaderBlock };
export default HeaderBlock;
