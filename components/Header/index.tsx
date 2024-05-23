import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, useRef, useState } from 'react';

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
	const [showHeader, setShowHeader] = useState(true);
	const prevScrollY = useRef<number>(0);
	const router = useRouter();
	const { scrollY } = useScroll();
	const { state, dispatch } = useStore();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (
			prevScrollY.current > 300 &&
			window?.outerWidth <= Number(jsBreakpoints.md)
		) {
			setShowHeader(prevScrollY.current > latest);
		} else {
			setShowHeader(true);
		}

		prevScrollY.current = latest;
	});

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
					<Container $grid $center $spaceBetween>
						<Logo />
						<Grid $align="center" $justify="space-between" $w100>
							<Navbar />
							<ButtonUI
								$danger
								$mobile
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
							<Container $grid $gap={40} $direction="row" $center>
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
							quality={20}
							placeholder="blur"
							blurDataURL={bannerImage.blurDataURL}
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
