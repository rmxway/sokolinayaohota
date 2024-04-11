import { Meta, StoryObj } from '@storybook/react';

import { SvgIcon } from './index';

type SvgIconType = StoryObj<typeof SvgIcon>;

const meta: Meta<typeof SvgIcon> = {
	title: 'SvgIcon',
	component: SvgIcon,
	args: {
		color: 'secondary',
		width: '400px',
		inverse: false,
	},
	tags: ['autodocs'],
};

export default meta;

export const BarDecor: SvgIconType = {
	args: {
		name: 'BarDecor',
	},
};

export const BarDecor2: SvgIconType = {
	args: {
		name: 'BarDecor2',
	},
};

export const LogoDecor: SvgIconType = {
	args: {
		name: 'LogoDecor',
	},
};
