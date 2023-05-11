import { motion, Variants } from 'framer-motion';
import styled, { css } from 'styled-components';

import { defaultTheme as theme, media } from '@/theme';

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
	width: 100%;
	max-width: 100%;
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
		transition: border-color box-shadow 0.2s;
	}

	input {
		width: 100%;
		color: inherit;
		font-size: 16px;
		padding: 0;
		margin: 0;
		background: none;
		z-index: 2;
	}

	& > input:focus ~ div {
		border-color: ${theme.colors.gray.$6};
		box-shadow: 0px 2px 10px rgba(74, 74, 74, 0.25);
		outline: none;
	}

	${(props) =>
		props.$success &&
		css`
			&,
			.icofont {
				color: ${theme.colors.success};
			}
			& > div,
			& > input:focus ~ div {
				border-color: ${theme.colors.success};
			}

			& > input:focus ~ div {
				box-shadow: 0px 2px 12px rgba(36, 164, 4, 0.45);
			}
		`}

	${(props) =>
		props.$danger &&
		css`
			&,
			.icofont {
				color: ${theme.colors.danger};
			}
			& > div,
			& > input:focus ~ div {
				border-color: ${theme.colors.danger};
			}

			& > input:focus ~ div {
				box-shadow: 0px 2px 9px rgba(255, 104, 104, 0.5);
			}
		`}

	${(props) =>
		props.$disabled &&
		css`
			&,
			& > div {
				pointer-events: none;
				opacity: 0.6;
			}

			& > div {
				background-color: ${props.theme.colors.gray.$3};
			}
		`}

	${media.lessThan('md')`
		height: 40px;

		.icofont {
			font-size: 1.25rem;
		}
	`}
`;

export const InputError = styled(motion.div)`
	color: ${theme.colors.danger};
	font-size: 12px;
	margin: -15px 0 15px;
	text-align: left;
`;

export const animateError: Variants = {
	start: { opacity: 0 },
	end: { opacity: 1 },
};

export default InputWrapper;
