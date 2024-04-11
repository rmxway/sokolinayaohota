import styled, { css } from 'styled-components';

import icofont from '@/public/assets/fonts/icofont/icofont.json';
import { media } from '@/theme';

interface CommonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	$w100: boolean;
	$inactive: boolean;
	$margins: boolean;
	$mobile: boolean;
	$icon: keyof typeof icofont;
	/** Style */
	$primary: boolean;
	/** Style */
	$secondary: boolean;
	/** Style */
	$brown: boolean;
	/** Style */
	$danger: boolean;
	/** Style */
	$success: boolean;
}

export type ButtonProps = Partial<CommonProps>;

const mixinButton = ($background = '#fff', $color = '#fff') => css`
	${({ theme }) => css`
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
			background: ${theme.colors.gradients.disabled()}!important;
			color: ${theme.colors.solid.disabled};
			pointer-events: none;
			cursor: default;
		}
	`}
`;

const propsMobile = css`
	height: 40px;
	font-size: 1.125rem;

	.icofont {
		font-size: 1rem;
	}
`;

const Button = styled.button<ButtonProps>`
	${({
		theme,
		$brown,
		$danger,
		$inactive,
		$margins,
		$mobile,
		$primary,
		$secondary,
		$success,
		$w100,
	}) => css`
		appearance: none;
		background: none;
		border-radius: ${theme.radius.borderRadius};

		padding: 2px 16px 0px;
		height: 52px;

		display: flex;
		justify-content: center;
		align-items: center;
		color: ${theme.colors.solid.secondary};
		font-family: ${theme.layout.fonts.header};
		font-size: 1.25rem;
		line-height: 0;
		font-weight: 400;
		text-transform: uppercase;
		font-style: normal;
		letter-spacing: 0.02em;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

		.icofont {
			margin-top: -4px;
		}

		${$margins &&
		css`
			margin-bottom: 10px;
			margin-right: 10px;
		`}

		cursor: pointer;
		transition: 0.1s all;

		${() => {
			if ($primary)
				return mixinButton(
					theme.colors.gradients.golden(),
					theme.colors.solid.brown,
				);
			if ($secondary)
				return mixinButton(
					theme.colors.gradients.black(),
					theme.colors.solid.white,
				);
			if ($brown)
				return mixinButton(
					theme.colors.solid.brown,
					theme.colors.solid.primary,
				);
			if ($success)
				return mixinButton(theme.colors.solid.success, '#fff');
			if ($danger)
				return mixinButton(theme.colors.gradients.rubin(), '#fff');
			return null;
		}}

		${() => {
			if ($w100)
				return css`
					width: 100%;
				`;
			if ($inactive)
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

		${$mobile && propsMobile}

		${media.lessThan('lg')`${propsMobile}`}
	`}
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
