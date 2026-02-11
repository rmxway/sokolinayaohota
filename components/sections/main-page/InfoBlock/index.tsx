import { Container } from '@/components/Layout';

import { InfoItem } from './InfoItem';
import { InfoBlockWrapper } from './styled';

export const InfoBlock = () => (
	<InfoBlockWrapper>
		<Container $grid>
			<InfoItem icon="location">
				пр-д Сокольнического круга, <br />
				д. 11
			</InfoItem>
			<InfoItem icon="phone" border>
				<a href="tel:+74992686834">+7 (499) 268-68-34</a>
			</InfoItem>
			<InfoItem icon="time">
				Часы работы: <br />
				пн-вс с 10 до 22
			</InfoItem>
		</Container>
	</InfoBlockWrapper>
);
export default InfoBlock;
