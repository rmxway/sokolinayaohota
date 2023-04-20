import { memo, PropsWithChildren } from 'react';

import { Icon } from '@/components';

import { Button, ButtonProps } from './styled';

/**
 * @prop {boolean} w100 - на всю ширину
 * @prop {boolean} inactive - запретить клик
 * @prop {boolean} mobile - уменьшенная версия
 * @prop {keyof typeof icon} icon - выбор иконки
 * @prop {boolean} primary, danger, success, brown

 * @example <ButtonUI mobile icon="phone">Телефон</ButtonUI>
 */
const ButtonUI = memo(
	({ children, icon, ...props }: PropsWithChildren<ButtonProps>) => {
		const itemIcon = icon ? <Icon icon={icon} /> : null;

		return (
			<Button {...props}>
				{children}
				{itemIcon}
			</Button>
		);
	}
);

ButtonUI.displayName = 'ButtonUI';

export { ButtonUI };
export default ButtonUI;
