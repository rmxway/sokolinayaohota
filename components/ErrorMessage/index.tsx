import { Icon } from '@/components/Icon';
import { Grid } from '@/components/Layout';

import { Message, Wrapper } from './styled';

export const ErrorMessage = () => (
	<Wrapper>
		<Grid align="center" justify="center" direction="row" gap={20}>
			<Message>
				<Icon icon="time" as="div" />
				<br />
				<p>Что то пошло не так ...</p>
				<div>Уже работаем над ошибкой</div>
			</Message>
		</Grid>
	</Wrapper>
);
export default ErrorMessage;
