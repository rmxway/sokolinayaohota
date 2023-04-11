import { FC } from 'react';

import { SVG } from '@/components';
import { Container } from '@/components/Layout';
import { ButtonUI } from '@/components/ui';

import { MainText, Wrapper } from './styled';

const PresentBanner: FC = () => (
	<Wrapper>
		<Container flex direction="column" center gap={40}>
			<MainText>
				<div>Ресторан «Соколиная охота»</div>
				это прекрасное место для комфортного отдыха даже самых
				взыскательных гурманов в необычном и очаровательном интерьере.
			</MainText>
			<div>
				<strong>Уважаемые гости!</strong>

				<p>Открытие Большого банкетного зала 20 мая 2023 года.</p>
				<p>
					Малый банкетный зал и зал Русская Усадьба функционирует в
					прежнем режиме.
				</p>
				<p>Принимаем заказы на все залы!</p>
			</div>
			<SVG name="BarDecor" color='golden' width="280px" />
			<ButtonUI danger icon="arrow">
				Заказать зал
			</ButtonUI>
		</Container>
	</Wrapper>
);

export { PresentBanner };
export default PresentBanner;
