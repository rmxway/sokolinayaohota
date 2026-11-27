import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useLocation } from 'react-router';
import { FC, useLayoutEffect, useRef, useState } from 'react';

import { Container, Grid, Title } from '@/components/Layout';
import { ModalFormOrder } from '@/components/ModalFormOrder';
import { ButtonUI } from '@/components/ui';
import { useBreakpointChange, useStore } from '@/hooks';
import bannerImage from '/assets/img/main.jpg';
import { isMainPage } from '@/services/variable';
import { actionChangeModal } from '@/store/actions';
import { jsBreakpoints } from '@/theme';

import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { Banner, BannerImage, Header, Wrapper } from './styled';

const HeaderBlock: FC = () => {
	const [showHeader, setShowHeader] = useState(true);
	const prevScrollY = useRef<number>(0);
	const { pathname } = useLocation();
	const path = pathname || '';
	const { scrollY } = useScroll();
	const { state, dispatch } = useStore();

	const bannerRef = useRef<HTMLDivElement>(null);
	const [bannerHeight, setBannerHeight] = useState(0);

	const bp = useBreakpointChange();

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

	useLayoutEffect(() => {
		if (bannerRef.current) {
			setBannerHeight(bannerRef.current.clientHeight);
		}
	}, [bp, path]);

	return (
		<>
			<Wrapper id="header" $isMainPage={isMainPage(path)}>
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

				{isMainPage(path) ? (
					<>
						<Banner ref={bannerRef}>
							<Container $grid $gap={40} $direction="row" $center>
								<Title color="white">
									Роскошные банкетные залы <br />
									для проведения вашего мероприятия
								</Title>
								<Title color="primary">
									в самом зеленом парке Москвы
								</Title>
							</Container>
						</Banner>

						<BannerImage
							src={bannerImage}
							alt="banner-image"
							className="scroll-lock-compensate"
							$height={`${bannerHeight}px`}
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
