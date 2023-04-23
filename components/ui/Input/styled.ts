import { motion, Variants } from 'framer-motion';
import styled, { css } from 'styled-components';

import { defaultTheme as theme } from '@/theme';

export interface InputTypes {
	$success?: boolean;
	$danger?: boolean;
	$disabled?: boolean;
}

export const InputWrapper = styled(motion.label)<InputTypes>`
	position: relative;
	padding: 0 16px;
	height: 52px;
	margin-bottom: 20px;
	display: inline-flex;
	align-items: center;
	font-size: 16px;
	cursor: text;

	.icofont {
		color: ${theme.colors.gray.$6};
		z-index: 2;
	}

	& > div {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		content: '';
		background-color: #fff;
		border-radius: ${theme.radius.borderRadius};
		border: 1px solid #aaa;
		z-index: 1;
	}

	input {
		flex-grow: 1;
		padding-right: 8px;
		color: inherit;
		font-size: 16px;
		background: none;
		z-index: 2;
	}

	input:focus + div {
		border-color: ${theme.colors.gray.$8};
		outline: none;
	}

	${(props) =>
		props.$success &&
		css`
			&,
			.icofont {
				color: ${theme.colors.success};
			}
			&input:focus > div,
			& > div {
				border-color: ${theme.colors.success};
				box-shadow: 0px 2px 12px rgba(51, 255, 0, 0.25);
			}
		`}

	${(props) =>
		props.$danger &&
		css`
			&,
			.icofont {
				color: ${theme.colors.danger};
			}
			& > input:focus > div,
			& > div {
				border-color: ${theme.colors.danger};
				box-shadow: 0px 2px 9px rgba(255, 104, 104, 0.5);
			}
		`}

	${(props) =>
		props.$disabled &&
		css`
			pointer-events: none;
			background-color: ${props.theme.colors.gray.$2};
			opacity: 0.8;
		`}
`;

export const InputError = styled(motion.div)`
	color: ${theme.colors.danger};
	font-size: 12px;
	margin: -15px 0 15px;
	text-align: left
`;

export const animateError: Variants = {
	start: { opacity: 0 },
	end: { opacity: 1 },
};

export default InputWrapper;
