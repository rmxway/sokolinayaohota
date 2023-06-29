import { Container } from '@/components/Layout';

import { InfoItem } from './InfoItem';
import { InfoBlockWrapper } from './styled';

export const InfoBlock = () => (
	<InfoBlockWrapper>
		<Container grid>
			<InfoItem icon="location">
				пр-д Сокольнического круга, <br />
				д. 11
			</InfoItem>
			<InfoItem icon="phone" border>
				<span>+7 (499) 269-38-33</span> <span>+7 (499) 268-23-59</span>{' '}
				<br />
				<span>+7 (499) 268-68-34</span> <span>+7 (926) 163-63-04</span>{' '}
				<br />
				<span>+7 (926) 159-55-58</span>
			</InfoItem>
			<InfoItem icon="time">
				Часы работы: <br />
				пн-вс с 10 до 22
			</InfoItem>
		</Container>
	</InfoBlockWrapper>
);
export default InfoBlock;
