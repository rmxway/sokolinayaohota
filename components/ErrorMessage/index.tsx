import { FC } from 'react';

import { Icon } from '@/components/Icon';

import { Message, WrapperErrorMessage } from './styled';

type ErrorMessageProps = {
	message?: string;
	flat?: boolean;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({ message, flat }) => (
	<WrapperErrorMessage $flat={flat}>
		<Message>
			<Icon icon="time" as="div" />
			<br />
			<p>{message || 'Что то пошло не так'}</p>
			<div>Уже работаем над ошибкой</div>
		</Message>
	</WrapperErrorMessage>
);
export default ErrorMessage;
