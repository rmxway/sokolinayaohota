import { Icon } from '@/components';
import { Logo } from '@/components/Header/Logo';
import { Container, Grid, Title } from '@/components/Layout';
import { useStore } from '@/hooks';
import map from '@/public/assets/img/map.jpg';

import { Copyright, InfoBlock, Map, MapWrapper, Wrapper } from './styled';

type ContactsProps = {
	additionalLayer?: React.ReactNode;
};

/**
 *
 * @param additionalLayer - добавить любой контент или компонент в область под заголовком
 * @returns
 */
export const ContactsBlock = ({ additionalLayer }: ContactsProps) => {
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
					<Map
						src={map}
						placeholder="blur"
						fill
						alt="map"
						quality={50}
					/>
				</MapWrapper>

				<Logo />
				<Copyright>{state?.year}</Copyright>
			</Container>
		</Wrapper>
	);
};

export default ContactsBlock;
