import { Icon } from '@/components';
import { Logo } from '@/components/Header/Logo';
import { Container, Grid, Title } from '@/components/Layout';
import { useStore } from '@/hooks';

import { Copyright, InfoBlock, MapWrapper, Wrapper } from './styled';

type ContactsProps = {
	additionalLayer?: React.ReactNode;
};

/**
 *
 * @param additionalLayer - добавить любой контент или компонент в область под заголовком
 * @returns
 */
export const FooterBlock = ({ additionalLayer }: ContactsProps) => {
	const { state } = useStore();

	return (
		<Wrapper>
			<Container $grid $gap={40} $direction="row" $center>
				<Title color="primary">
					Как с нами <span>связаться ?</span>
				</Title>
				{additionalLayer}
				<Grid
					$justify="space-between"
					$w100
					$gap={20}
					$direction="column"
					className="info-grid"
				>
					<InfoBlock>
						<div>
							<Icon icon="mail" /> E-mail:
						</div>
						<span>sokolinayaohota.ru@yandex.ru</span>
					</InfoBlock>
					<InfoBlock>
						<div>
							<Icon icon="phone" /> Телефон:
						</div>
						<span>
							<a href="tel:+74992686834">+7 (499) 268-68-34</a>
						</span>
					</InfoBlock>
					<InfoBlock>
						<div>
							<Icon icon="location" /> Адрес:
						</div>
						<span>пр-д Сокольнического круга, д. 11</span>
					</InfoBlock>
				</Grid>

				<MapWrapper>
					<iframe
						src="https://yandex.ru/map-widget/v1/?indoorLevel=2&ll=37.678340%2C55.793123&mode=poi&oid=1005873256&ol=biz&z=17.47"
						width="100%"
						height="500"
						title="yandexMaps"
						allowFullScreen
						style={{ position: 'relative', borderRadius: '20px' }}
					/>
				</MapWrapper>

				<Logo />
				<Copyright>sokolinayaohota | {state?.year}</Copyright>
			</Container>
		</Wrapper>
	);
};
