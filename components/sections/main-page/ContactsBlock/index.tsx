import { Icon, SvgIcon } from '@/components';
import { Logo } from '@/components/Header/Logo';
import { Container, Grid, Title } from '@/components/Layout';
import map from '@/public/assets/img/map.jpg';

import { Copyright, InfoBlock, Map, Wrapper } from './styled';

export const ContactsBlock = () => (
	<Wrapper>
		<Container grid gap={40} direction="row" center>
			<SvgIcon name="BarDecor" color="primary" width="150px" inverse />
			<Title color="primary">
				Как с нами <span>связаться ?</span>
			</Title>
			<Grid justify="space-between" $w100 gap={20}>
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
						<a href="tel:+74992693833">+7 (499) 269-38-33</a>
						<a href="tel:+74992682359">+7 (499) 268-23-59</a>
						<a href="tel:+74992686834">+7 (499) 268-68-34</a>
						<a href="tel:+79261636304">+7 (926) 163-63-04</a>
						<a href="tel:+79261595558">+7 (926) 159-55-58</a>
					</span>
				</InfoBlock>
				<InfoBlock>
					<div>
						<Icon icon="location" /> Адрес:
					</div>
					<span>пр-д Сокольнического круга, д. 11</span>
				</InfoBlock>
			</Grid>
			<Map src={map.src} width={1500} height={1500} alt="map" />
			<Logo href="/#header" />
			<Copyright>sokolinayaohota.ru ® 2023</Copyright>
		</Container>
	</Wrapper>
);
export default ContactsBlock;
