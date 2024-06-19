import { ImageBackground } from '@/components';
import { FormOrder } from '@/components/FormOrder';
import { Container, Grid, Title } from '@/components/Layout';
import imageBack from '@/public/assets/img/discount-2.webp';
import { apiUrl } from '@/services/variable';

import { Discount, Wrapper } from './styled';

export const DiscountBlock = () => (
	<Wrapper>
		<Container $grid $direction="row" $gap={30} $center>
			<Grid $align="center" $justify="center" $direction="row" $gap={20}>
				<Title color="white">
					Оставьте заявку
					<br />
					и получите
					<br />
					<span>дополнительную скидку</span>
				</Title>
				<Discount>
					<div>-10%</div>
				</Discount>
			</Grid>
			<FormOrder
				name="discount-form"
				fetchUrl={apiUrl('send-user-request')}
			/>
		</Container>
		<ImageBackground image={imageBack} quality={50} />
	</Wrapper>
);
export default DiscountBlock;
