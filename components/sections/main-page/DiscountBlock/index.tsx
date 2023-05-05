import { ImageBackground } from '@/components';
import { FormOrder } from '@/components/FormOrder';
import { Container, Flexbox, Title } from '@/components/Layout';
import imageBack from '@/public/assets/img/discount.jpg';

import { Discount, Wrapper } from './styled';

export const DiscountBlock = () => (
	<Wrapper>
		<Container grid direction="row" gap={65} center>
			<Flexbox align="center" direction="column" gap={20}>
				<Title color="white">
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
			<FormOrder name="discount-form" />
		</Container>
		<ImageBackground image={imageBack} quality={50} />
	</Wrapper>
);
export default DiscountBlock;
