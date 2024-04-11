import { StoryObj } from '@storybook/react';

import { Preloader } from '@/components/ui/Preloader';
import { defaultTheme as theme } from '@/theme';

export default {
	title: 'Preloader',
	component: Preloader,
	args: {
		light: false,
	},
	tags: ['autodocs'],
};

type Story = StoryObj<typeof Preloader>;

export const Default: Story = {
	args: {
		light: false,
	},
	parameters: {
		backgrounds: {
			default: 'silver',
			values: [{ name: 'silver', value: theme.colors.solid.disabled }],
		},
	},
};
