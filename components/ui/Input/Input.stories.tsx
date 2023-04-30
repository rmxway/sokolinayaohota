import { StoryObj } from '@storybook/react';

import { InputUI } from '@/components/ui/Input';

export default {
	title: 'Input',
	component: InputUI,
	args: {
		name: 'default',
	},
	tags: ['autodocs'],
};

type Story = StoryObj<typeof InputUI>;

export const Default: Story = {
	args: {
		placeholder: 'Placeholder',
	},
};

export const Simple: Story = {
	args: {
		...Default.args,
		name: 'simple',
		value: 'John Smith',
	},
};

export const Success: Story = {
	args: {
		...Simple.args,
		name: 'success',
		success: true,
		icon: 'success',
	},
};

export const DangerWithError: Story = {
	args: {
		...Simple.args,
		name: 'danger',
		danger: true,
		error: 'Something went wrong',
		icon: 'error',
	},
};

export const WithIconDisabled: Story = {
	args: {
		...Simple.args,
		name: 'disabled',
		icon: 'secure',
		disabled: true,
	},
};
