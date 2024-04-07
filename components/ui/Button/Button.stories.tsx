import { Meta, StoryObj } from '@storybook/react';

import { ButtonUI } from '@/components/ui/Button';

type Button = StoryObj<typeof ButtonUI>;

const meta: Meta<typeof ButtonUI> = {
	title: 'Button',
	component: ButtonUI,
	args: {
		children: 'Button',
		$w100: false,
		$mobile: false,
		$inactive: false,
		$margins: false,
	},
	tags: ['autodocs'],
};

export default meta;

export const Primary: Button = {
	args: {
		$primary: true,
		children: 'Primary',
	},
};

export const Danger: Button = {
	args: {
		$danger: true,
		children: 'Danger',
	},
};

export const Success: Button = {
	args: {
		$success: true,
		children: 'Success',
	},
};

export const Brown: Button = {
	args: {
		$brown: true,
		children: 'Brown',
	},
};

export const ButtonIcon: Button = {
	args: {
		$primary: true,
		$icon: 'heart',
		children: 'Button with icon',
	},
};

export const Disable: Button = {
	args: {
		$primary: true,
		children: 'Click to order',
		disabled: true,
	},
};

export const Mobile: Button = {
	args: {
		$primary: true,
		$mobile: true,
		children: 'Click to order',
	},
};
