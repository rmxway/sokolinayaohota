import { Meta, StoryObj } from '@storybook/react';

import { InputUI } from '@/components/ui/Input';

type Input = StoryObj<typeof InputUI>;

const meta: Meta<typeof InputUI> = {
	title: 'Input',
	component: InputUI,
	args: {
		name: 'default',
	},
	tags: ['autodocs'],
};

export default meta;

export const Default: Input = {
	args: {
		placeholder: 'Placeholder',
	},
};

export const Simple: Input = {
	args: {
		...Default.args,
		name: 'simple',
		value: 'John Smith',
	},
};

export const Success: Input = {
	args: {
		...Simple.args,
		name: 'success',
		success: true,
		icon: 'success',
	},
};

export const DangerWithError: Input = {
	args: {
		...Simple.args,
		name: 'danger',
		danger: true,
		error: 'Something went wrong',
		icon: 'error',
	},
};

export const WithIconDisabled: Input = {
	args: {
		...Simple.args,
		name: 'disabled',
		icon: 'secure',
		disabled: true,
	},
};
