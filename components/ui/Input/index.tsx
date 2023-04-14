import InputMask from 'react-input-mask';

import { Icon } from '@/components';
import icofont from '@/public/assets/fonts/icofont/icofont.json';

import { animateError, InputError, InputWrapper } from './styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	success?: boolean;
	danger?: boolean;
	disabled?: boolean;
	error?: string | null;
	maskType?: 'phone';
	icon?: keyof typeof icofont;
}

/**
 *
 * @param {string} name
 * @param {string} icon
 * @param {boolean} success
 * @param {boolean} danger
 * @example <InputUI icon='phone' placeholder="Enter your phone" value="" success/>
 * @returns
 */
const InputUI = ({
	name,
	icon,
	success,
	danger,
	disabled,
	error,
	maskType,
	className,
	value,
	onChange,
	onBlur,
	...props
}: InputProps) => {
	const mask = () => {
		if (maskType === 'phone') {
			return '(999)9999999';
		}
		return '';
	};

	return (
		<>
			<InputWrapper
				className={className}
				danger={Boolean(error) || danger}
				{...{ success, disabled }}
				htmlFor={name}
				layout
			>
				<InputMask
					mask={mask()}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					id={name}
					autoComplete="off"
					{...props}
				/>
				{icon ? <Icon icon={icon} /> : null}
				<div />
			</InputWrapper>
			{error ? (
				<InputError
					variants={animateError}
					initial="start"
					animate="end"
					exit="end"
					layout
				>
					{error}
				</InputError>
			) : null}
		</>
	);
};

export { InputUI };
export default InputUI;
