import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './index';

const meta: Meta<typeof Icon> = {
	title: 'Icon',
	component: Icon,
	args: {
		size: 58,
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const IconArrow: Story = {
	args: {
		icon: 'arrow',
	},
};

export const IconArrowSimple: Story = {
	args: {
		icon: 'arrow-simple',
	},
};

export const IconClose: Story = {
	args: {
		icon: 'close',
	},
};

export const IconError: Story = {
	args: {
		icon: 'error',
	},
};

export const IconHeart: Story = {
	args: {
		icon: 'heart',
	},
};

export const IconLocation: Story = {
	args: {
		icon: 'location',
	},
};

export const IconMail: Story = {
	args: {
		icon: 'mail',
	},
};

export const IconPhone: Story = {
	args: {
		icon: 'phone',
	},
};

export const IcoSecurity: Story = {
	args: {
		icon: 'secure',
	},
};
