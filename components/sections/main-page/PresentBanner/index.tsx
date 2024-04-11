import { FC } from 'react';

import { ImageBackground, SvgIcon } from '@/components';
import { Container } from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { useStore } from '@/hooks';
import imageBack from '@/public/assets/img/wrapper-text.jpg';
import { actionChangeModal } from '@/store/actions';

import { MainText, Wrapper } from './styled';

export const PresentBanner: FC = () => {
	const { dispatch } = useStore();

	return (
		<Wrapper>
			<Container $grid $direction="row" $center $gap={40}>
				<MainText>
					<div>Ресторан «Соколиная охота»</div>
					это прекрасное место для комфортного отдыха даже самых
					взыскательных гурманов в необычном и очаровательном
					интерьере.
				</MainText>
				<div>
					<strong>Уважаемые гости!</strong>

					<p>Открытие Большого банкетного зала 20 мая 2023 года.</p>
					<p>
						Малый банкетный зал и зал Русская Усадьба функционирует
						в прежнем режиме.
					</p>
					<p>Принимаем заказы на все залы!</p>
				</div>
				<SvgIcon name="BarDecor" color="disabled" width="150px" />
				<ButtonUI
					$danger
					$icon="arrow"
					onClick={() => dispatch(actionChangeModal('order'))}
				>
					Заказать зал
				</ButtonUI>
			</Container>
			<ImageBackground image={imageBack} quality={5} />
		</Wrapper>
	);
};

export default PresentBanner;
