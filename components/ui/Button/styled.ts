import styled, { css } from 'styled-components';

import icofont from '@/public/assets/fonts/icofont/icofont.json';
import { defaultTheme as theme } from '@/theme';

interface CommonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	w100?: boolean;
	inactive?: boolean;
	margins?: boolean;
	mobile?: boolean;
	icon?: keyof typeof icofont;
	/** Style */
	primary?: boolean;
	/** Style */
	brown?: boolean;
	/** Style */
	danger?: boolean;
	/** Style */
	success?: boolean;
}

interface PrimaryButton extends CommonProps {
	primary?: boolean;
	brown?: never;
	danger?: never;
	success?: never;
}

interface BrownButton extends CommonProps {
	primary?: never;
	brown?: boolean;
	danger?: never;
	success?: never;
}

interface DangerButton extends CommonProps {
	primary?: never;
	brown?: never;
	danger?: boolean;
	success?: never;
}

interface SuccessButton extends CommonProps {
	primary?: never;
	brown?: never;
	danger?: never;
	success?: boolean;
}

export type ButtonProps =
	| PrimaryButton
	| BrownButton
	| DangerButton
	| SuccessButton;

const mixinButton = ($background = '#fff', $color = '#fff') => css`
	border-color: transparent;
	background: ${$background};
	color: ${$color};

	&:hover {
		opacity: 0.9;
	}

	&:active {
		opacity: 0.8;
	}

	&:disabled,
	&:disabled:hover {
		background: ${theme.colors.gradients.disabled}!important;
		color: ${theme.colors.disabled};
		pointer-events: none;
		cursor: default;
	}
`;

const Button = styled.button<ButtonProps>`
	appearance: none;
	background: none;
	border-radius: ${theme.radius.borderRadius};
	padding: ${(props) => (props.mobile ? '8px 16px 8px' : '16px 16px 13px')};
	height: ${(props) => (props.mobile ? '40px' : '52px')};
	display: flex;
	justify-content: center;
	align-items: flex-end;
	color: ${theme.colors.brown};
	font-family: ${theme.layout.fonts.header};
	font-size: 20px;
	line-height: 1;
	font-weight: 400;
	text-transform: uppercase;
	font-style: normal;
	letter-spacing: 0.02em;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	${(props) =>
		props.margins &&
		css`
			margin-bottom: 10px;
			margin-right: 10px;
		`}

	cursor: pointer;
	transition: 0.1s all;

	${(props) => {
		if (props?.primary)
			return mixinButton(
				theme.colors.gradients.golden,
				theme.colors.brown
			);
		if (props?.brown)
			return mixinButton(theme.colors.brown, theme.colors.primary);
		if (props?.success) return mixinButton(theme.colors.success, '#fff');
		if (props?.danger)
			return mixinButton(theme.colors.gradients.rubin, '#fff');
		return null;
	}}

	${(props) => {
		if (props?.w100)
			return css`
				width: 100%;
			`;
		if (props?.inactive)
			return css`
				pointer-events: none;
			`;
		return null;
	}}

	.icofont {
		font-size: 20px;
		margin-left: 8px;
		line-height: 24px;
	}
`;

const textVar = {
	hidden: {},
	visible: {
		transition: {
			duration: 0.1,
			staggerChildren: 0.1,
			when: 'afterChildren',
		},
	},
};

const itemVar = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

export { Button, itemVar, textVar };
export default Button;
