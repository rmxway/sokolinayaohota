import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonUI } from '@/components/ui/Button';

//👇 This default export determines where your story goes in the story list
// const meta = {
//   component: YourComponent,
// } satisfies Meta<typeof YourComponent>;
 
// export default meta;
// type Story = StoryObj<typeof meta>;
 
// export const Basic: Story = {
//   args: {
//     //👇 The args you need here will depend on your component
//   },
// };

// type Button = StoryObj<typeof ButtonUI>;


const meta: Meta<typeof ButtonUI> = {
	title: 'Button',
	component: ButtonUI,
	args: {
		children: 'Button',
		$w100: false,
		$mobile: false,
		$inactive: false,
		$margins: false,
	},
	tags: ['autodocs'],
};

export default meta;

type Button = StoryObj<typeof meta>;

export const Primary: Button = {
	args: {
		$primary: true,
		children: 'Primary',
	},
};

export const Secondary: Button = {
	args: {
		$secondary: true,
		children: 'Secondary',
	},
};

export const Danger: Button = {
	args: {
		$danger: true,
		children: 'Danger',
	},
};

export const Success: Button = {
	args: {
		$success: true,
		children: 'Success',
	},
};

export const Brown: Button = {
	args: {
		$brown: true,
		children: 'Brown',
	},
};

export const ButtonIcon: Button = {
	args: {
		$primary: true,
		$icon: 'heart',
		children: 'Button with icon',
	},
};

export const Disable: Button = {
	args: {
		$primary: true,
		children: 'Click to order',
		disabled: true,
	},
};

export const Mobile: Button = {
	args: {
		$primary: true,
		$mobile: true,
		children: 'Click to order',
	},
};
