import type { Meta, StoryObj } from '@storybook/react';

import { ButtonUI } from '@/components/ui';

const meta: Meta<typeof ButtonUI> = {
	title: 'Button',
	component: ButtonUI,
	args: {
		children: 'Button',
		w100: false,
		mobile: false,
		inactive: false,
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonUI>;

export const Primary: Story = {
	args: {
		primary: true,
		children: 'Primary',
	},
};

export const Danger: Story = {
	args: {
		danger: true,
		children: 'Danger',
	},
};

export const Success: Story = {
	args: {
		success: true,
		children: 'Success',
	},
};

export const Brown: Story = {
	args: {
		brown: true,
		children: 'Brown',
	},
};

export const ButtonIcon: Story = {
	args: {
		primary: true,
		icon: 'heart',
		children: 'Кнопка с иконкой',
	},
};
