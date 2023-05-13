import { useRouter } from 'next/router';
import { FC } from 'react';

import { SvgIcon } from '@/components';
import { Container, Grid, Title } from '@/components/Layout';
import { ModalFormOrder } from '@/components/ModalFormOrder';
import { ButtonUI } from '@/components/ui';
import { useStore } from '@/hooks';
import bannerImage from '@/public/assets/img/main.jpg';
import { actionChangeModal } from '@/store/actions';

import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { Banner, BannerImage, Header, Wrapper } from './styled';
import { TopPanelBlock } from './TopPanel';

const HeaderBlock: FC = () => {
	const { state, dispatch } = useStore();
	const router = useRouter();

	return (
		<>
			<Wrapper id="header">
				<TopPanelBlock />
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

				{router.asPath === '/' ? (
					<Banner>
						<Container grid gap={40} direction="row" center>
							<Title>
								Роскошные банкетные залы <br />
								для проведения вашего мероприятия
							</Title>
							<Title color="primary">
								в самом зеленом парке Москвы
							</Title>
							<SvgIcon
								name="BarDecor2"
								color="white"
								width="450px"
							/>
						</Container>
					</Banner>
				) : null}
				<BannerImage
					src={bannerImage}
					alt="banner-image"
					fill
					quality={router.asPath === '/' ? 20 : 1}
					placeholder="blur"
					priority={router.asPath === '/'}
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
