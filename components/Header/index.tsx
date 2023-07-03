import { useScroll } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { SvgIcon } from '@/components';
import { Container, Grid, Title } from '@/components/Layout';
import { ModalFormOrder } from '@/components/ModalFormOrder';
import { ButtonUI } from '@/components/ui';
import { useStore } from '@/hooks';
import bannerImage from '@/public/assets/img/main.jpg';
import { isMainPage } from '@/services/variable';
import { actionChangeModal } from '@/store/actions';
import { jsBreakpoints } from '@/theme';

import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { Banner, BannerImage, Header, Wrapper } from './styled';
import { TopPanelBlock } from './TopPanel';

const HeaderBlock: FC = () => {
	const { state, dispatch } = useStore();
	const router = useRouter();
	const { scrollY } = useScroll();
	const [showHeader, setShowHeader] = useState(true);
	const [prevScrollY, setPrevScrollY] = useState(0);

	useEffect(() => {
		const documentScrollY = () => {
			const current = Number(scrollY.get());
			setPrevScrollY(Number(scrollY.get()));

			if (
				prevScrollY > 300 &&
				window?.outerWidth <= Number(jsBreakpoints.md)
			) {
				setShowHeader(prevScrollY > current);
			} else {
				setShowHeader(true);
			}
		};
		document.addEventListener('scroll', documentScrollY);

		return () => {
			document.removeEventListener('scroll', documentScrollY);
		};
	}, [scrollY, prevScrollY]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowHeader(true);
			clearTimeout(timer);
		}, 0);
	}, [router]);

	return (
		<>
			<Wrapper id="header" $isMainPage={isMainPage(router)}>
				<TopPanelBlock show={showHeader} />
				<Header
					initial={{ top: 0 }}
					animate={{
						top: showHeader ? 0 : '-200px',
						transition: {
							type: 'tween',
							delay: 0.2,
							duration: 0.5,
						},
					}}
				>
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

				{isMainPage(router) ? (
					<>
						<Banner>
							<Container grid gap={40} direction="row" center>
								<Title color="white">
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
						<BannerImage
							src={bannerImage}
							alt="banner-image"
							fill
							quality={isMainPage(router) ? 20 : 1}
							placeholder="blur"
							priority={isMainPage(router)}
						/>
					</>
				) : null}
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
