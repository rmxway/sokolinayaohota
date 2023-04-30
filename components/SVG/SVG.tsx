import { Meta, StoryObj } from '@storybook/react';

import { SVG } from './index';

const meta: Meta<typeof SVG> = {
	title: 'SVG',
	component: SVG,
	args: {
		name: 'BarDecor',
        color: 'brown',
	},
};

export default meta;

type Story = StoryObj<typeof SVG>;

export const BarDecor: Story = {
	args: {},
};
