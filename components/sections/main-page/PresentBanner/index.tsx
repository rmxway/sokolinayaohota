import { FC } from 'react';

import { ImageBackground } from '@/components';
import { Container } from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { useStore } from '@/hooks';
import imageBack from '@/public/assets/img/wrapper-text.jpg';
import { actionChangeModal } from '@/store/actions';

import { MainText, TextBlock, Wrapper } from './styled';

export const PresentBanner: FC = () => {
	const { dispatch } = useStore();

	return (
		<Wrapper>
			<Container>
				<TextBlock $direction="row" $gap={30} $align="center">
					<MainText>
						<div>Ресторан «Соколиная охота»</div>
						это прекрасное место для комфортного отдыха даже самых
						взыскательных гурманов в необычном и очаровательном
						интерьере.
					</MainText>
					<div>
						<strong>Уважаемые гости!</strong>
						<div>Принимаем заказы на все залы!</div>
					</div>
					<ButtonUI
						$danger
						$icon="arrow"
						onClick={() => dispatch(actionChangeModal('order'))}
					>
						Заказать зал
					</ButtonUI>
				</TextBlock>
			</Container>
			<ImageBackground image={imageBack} quality={5} />
		</Wrapper>
	);
};

export default PresentBanner;
