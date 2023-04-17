import { FormOrder } from '@/components/FormOrder';
import { Container, Flexbox, Title } from '@/components/Layout';

import { Discount, Wrapper } from './styled';

export const DiscountBlock = () => (
	<Wrapper>
		<Container flex direction="column" gap={65} center>
			<Flexbox align="center" direction="column" gap={20}>
				<Title size="64px" color="white">
					Оставьте заявку
					<br />
					прямо сейчас и получите
					<br />
					<span>дополнительную скидку</span>
				</Title>
				<Discount>
					<div>-10%</div>
				</Discount>
			</Flexbox>
			<FormOrder />
		</Container>
	</Wrapper>
);
export default DiscountBlock;
