import { Meta, StoryObj } from '@storybook/react';

import { SvgIcon } from './index';

const meta: Meta<typeof SvgIcon> = {
	title: 'SvgIcon',
	component: SvgIcon,
	args: {
		color: 'brown',
		width: '400px',
		inverse: false,
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SvgIcon>;

export const BarDecor: Story = {
	args: {
		name: 'BarDecor',
	},
};

export const BarDecor2: Story = {
	args: {
		name: 'BarDecor2',
	},
};

export const LogoDecor: Story = {
	args: {
		name: 'LogoDecor',
	},
};
