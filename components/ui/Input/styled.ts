import { motion, Variants } from 'framer-motion';
import styled, { css } from 'styled-components';

import { defaultTheme as theme, media } from '@/theme';

interface InputTypes {
	$success: boolean;
	$danger: boolean;
	$disabled: boolean;
}

export const InputBlockWrapper = styled.div`
	position: relative;
	width: 100%;
	cursor: text;
`;

export const InputWrapper = styled(motion.label)<Partial<InputTypes>>`
	position: relative;
	padding: 0 16px;
	height: 52px;
	width: 100%;
	max-width: 100%;
	display: inline-flex;
	align-items: center;

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
		font-size: 1rem;
		font-weight: 500;
		padding: 0;
		margin: 0;
		background: none;
		z-index: 2;
		color: ${theme.colors.gray.$8};
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
				color: ${theme.colors.solid.success};
			}
			& > div,
			& > input:focus ~ div {
				border-color: ${theme.colors.solid.success};
			}

			& > input:focus ~ div {
				box-shadow: 0px 2px 12px rgba(36, 164, 4, 0.45);
			}
		`}

	${(props) =>
		props.$danger &&
		css`
			margin-bottom: 12px;
			&,
			.icofont {
				color: ${theme.colors.solid.danger};
			}
			& > div,
			& > input:focus ~ div {
				border-color: ${theme.colors.solid.danger};

				&:after {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: ${theme.colors.solid.danger};
					opacity: 0.1;
				}
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

	${media.lessThan('lg')`
		height: 40px;

		.icofont {
			font-size: 1.25rem;
		}
	`}
`;

export const InputError = styled(motion.div)`
	position: absolute;
	top: 90%;
	color: ${theme.colors.solid.danger};
	font-size: 0.85rem;
	text-align: left;
`;

export const animateError: Variants = {
	start: { opacity: 0 },
	end: { opacity: 1 },
};

export default InputWrapper;
