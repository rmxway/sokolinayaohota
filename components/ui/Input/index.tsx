import { FC } from 'react';

import icofont from '@/public/assets/fonts/icofont/icofont.json';

import { InputWrapper } from './styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	success?: boolean;
	danger?: boolean;
	icon?: keyof typeof icofont;
}

const InputUI: FC<InputProps> = ({
	name,
	icon,
	success,
	danger,
	className,
	...props
}) => (
	<InputWrapper className={className} {...{ success, danger }}>
		<input {...props} id={name} type="text" autoComplete="off" />
		{icon ? <i className={`icofont icofont-${icon}`} /> : null}
	</InputWrapper>
);

export { InputUI };
export default InputUI;
