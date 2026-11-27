import { SvgIcon } from '@/components/SvgIcon';
import { ButtonUI } from '@/components/ui';

import { ErrorWrapper } from './ErrorWrapper';
import { Link } from 'react-router';
import { Container } from '@/components/Layout';

export default function NotFound() {
	return (
		<Container>
			<ErrorWrapper>
				<span>404</span>
				<SvgIcon name="BarDecor" width="200" />
				Страница не найдена
				<Link to="/">
					<ButtonUI $primary>Перейти на главную</ButtonUI>
				</Link>
			</ErrorWrapper>
		</Container>
	);
}
