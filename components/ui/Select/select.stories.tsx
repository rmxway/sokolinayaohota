import { StoryObj } from '@storybook/react';

import { SelectUI } from '@/components/ui/Select';

export default {
	title: 'Select',
	component: SelectUI,
	args: {
		name: 'default',
        values: ['Moscow', 'St. Petersburg', 'Voronezh'],
	},
	tags: ['autodocs'],
};

type Story = StoryObj<typeof SelectUI>;

export const Default: Story = {
	args: {
		placeholder: 'Placeholder',
	},
};
