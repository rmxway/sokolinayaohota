import type { ArgTypes, Meta, StoryObj } from '@storybook/react';

import { Flexbox } from '@/components/Layout/Flexbox';
import icons from '@/public/assets/fonts/icofont/icofont.json';

import { Icon } from '.';

type IconStoryType = StoryObj<typeof Icon>;

const meta: Meta<typeof Icon> = {
	title: 'Icon',
	component: Icon,
	args: {
		icon: 'heart',
		as: 'i',
		color: 'base',
	},
	tags: ['autodocs'],
};

const typedIcons = Object.keys(icons) as Array<keyof typeof icons>;

export const AllIcons = (args: ArgTypes) => (
	<Flexbox $gap={30}>
		{typedIcons.map((icon) => (
			<Icon key={icon} {...args} size={30} {...{ icon }} />
		))}
	</Flexbox>
);

export const OneIcon: IconStoryType = {
	args: {
		size: 58,
	},
};

export default meta;
