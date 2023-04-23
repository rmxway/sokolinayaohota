import { Icon, SVG } from '@/components';
import { Logo } from '@/components/Header/Logo';
import { Container, Flexbox, Title } from '@/components/Layout';
import map from '@/public/assets/img/map.jpg';

import { Copyright, InfoBlock, Map, Wrapper } from './styled';

export const ContactsBlock = () => (
	<Wrapper>
		<Container flex gap={40} direction="column" center>
			<SVG name="BarDecor" color="golden" width="160px" inverse />
			<Title color="primary">Как с нами связаться ?</Title>
			<Flexbox justify="space-between" $w100 gap={20}>
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
						+7 (499) 269-38-33 <br />
						+7 (499) 268-23-59 <br />
						+7 (499) 268-68-34 <br />
						+7 (926) 163-63-04 <br />
						+7 (926) 159-55-58
					</span>
				</InfoBlock>
				<InfoBlock>
					<div>
						<Icon icon="location" /> Адрес:
					</div>
					<span>пр-д Сокольнического круга, д. 11</span>
				</InfoBlock>
			</Flexbox>
			<Map src={map.src} width={1500} height={1500} alt="map" />
			<Logo href="/#header" />
			<Copyright>sokolinayaohota.ru ® 2023</Copyright>
		</Container>
	</Wrapper>
);
export default ContactsBlock;
