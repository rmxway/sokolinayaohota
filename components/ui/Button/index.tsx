import { forwardRef } from 'react';

import { Icon } from '@/components';

import { Button, ButtonProps } from './styled';

/**
 * @prop {boolean} $w100 - на всю ширину
 * @prop {boolean} $inactive - запретить клик
 * @prop {boolean} $mobile - уменьшенная версия
 * @prop {keyof typeof icon} icon - выбор иконки
 * @prop {boolean} $primary, danger, success, brown

 * @example <ButtonUI mobile icon="phone">Телефон</ButtonUI>
 */
const ButtonUI = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, $icon, ...props }, ref) => {
		const itemIcon = $icon ? <Icon icon={$icon} /> : null;

		return (
			<Button {...props} {...{ ref }}>
				<span>{children}</span>
				{itemIcon}
			</Button>
		);
	},
);

ButtonUI.displayName = 'ButtonUI';

export { ButtonUI };
export default ButtonUI;
