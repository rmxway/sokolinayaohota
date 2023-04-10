import styled, { css } from 'styled-components';

export interface InputTypes {
	success?: boolean;
	danger?: boolean;
}

const InputWrapper = styled.div<InputTypes>`
	padding: 0 16px;
	height: 52px;
	background-color: #fff;
	border-radius: ${(props) => props.theme.radius.borderRadius};
	border: 1px solid #aaa;
	background-color: #f9f9f9;
	margin-bottom: 20px;
	margin-right: 20px;
	font-size: 16px;
	display: inline-flex;
	align-items: center;

	.icofont {
		color: ${(props) => props.theme.colors.gray.$6};
	}

	${(props) => {
		if (props.success) {
			return css`
				&,
				.icofont {
					color: ${props.theme.colors.success};
				}
				border-color: ${props.theme.colors.success};
				box-shadow: 0px 2px 12px rgba(51, 255, 0, 0.25);
			`;
		}

		if (props.danger) {
			return css`
				&,
				.icofont {
					color: ${props.theme.colors.danger};
				}
				border-color: ${props.theme.colors.danger};
				box-shadow: 0px 2px 9px rgba(255, 104, 104, 0.5);
			`;
		}

		return null;
	}}

	&:active,
	&:focus {
		border-color: ${(props) => props.theme.colors.success};
		outline: none;
	}

	&:disabled {
		background-color: ${(props) => props.theme.colors.gray.$3};
		opacity: 0.8;
	}

	input {
		flex-grow: 1;
		padding-right: 8px;
		color: inherit;
	}
`;

export { InputWrapper };
export default InputWrapper;
