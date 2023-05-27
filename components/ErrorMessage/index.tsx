import { FC } from 'react';

import { Icon } from '@/components/Icon';

import { Message, Wrapper } from './styled';

export const ErrorMessage: FC<{ message?: string }> = ({ message }) => (
	<Wrapper>
		<Message>
			<Icon icon="time" as="div" />
			<br />
			<p>{message || 'Что то пошло не так'}</p>
			<div>Уже работаем над ошибкой</div>
		</Message>
	</Wrapper>
);
export default ErrorMessage;
