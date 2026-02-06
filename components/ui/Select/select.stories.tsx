import type { Meta, StoryObj } from '@storybook/react';
import { Formik } from 'formik';

import { SelectUI } from '@/components/ui/Select';

const meta: Meta<typeof SelectUI> = {
	title: 'Select',
	component: SelectUI,
	args: {
		name: 'default',
		values: ['Moscow', 'St. Petersburg', 'Voronezh'],
	},
	tags: ['autodocs'],
};

export default meta;

type Select = StoryObj<typeof SelectUI>;

export const Default: Select = {
	args: {
		placeholder: 'Placeholder',
	},
	decorators: [
		(Story) => (
			<div style={{ height: '150px' }}>
				<Story />
			</div>
		),
	],
	render: () => (
		<Formik initialValues={{ event: '' }} onSubmit={() => undefined}>
			<SelectUI
				type="text"
				id="event"
				name="event"
				values={['Свадьба', 'День рождения', 'Вечеринка']}
				placeholder="Событие *"
			/>
		</Formik>
	),
};
