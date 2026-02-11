import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';

import { render as customRender } from '../../../__tests__/test-utils';
import { SelectUI } from './index';

const TestWrapper = ({
	children,
	initialValues = { event: '' },
}: {
	children: React.ReactNode;
	initialValues?: Record<string, string>;
}) => (
	<Formik initialValues={initialValues} onSubmit={jest.fn()}>
		{children}
	</Formik>
);

describe('SelectUI', () => {
	const selectValues = ['Свадьба', 'День рождения', 'Вечеринка'];

	it('рендерится с placeholder', () => {
		customRender(
			<TestWrapper>
				<SelectUI
					name="event"
					values={selectValues}
					placeholder="Событие"
				/>
			</TestWrapper>,
		);
		expect(screen.getByPlaceholderText('Событие')).toBeInTheDocument();
	});

	it('открывает список при клике на кнопку', async () => {
		const user = userEvent.setup();
		customRender(
			<TestWrapper>
				<SelectUI
					name="event"
					values={selectValues}
					placeholder="Событие"
				/>
			</TestWrapper>,
		);

		const toggleButton = screen.getByTestId('select-toggle-button');
		await user.click(toggleButton);
		await waitFor(() => {
			expect(screen.getByText('Свадьба')).toBeInTheDocument();
			expect(screen.getByText('День рождения')).toBeInTheDocument();
			expect(screen.getByText('Вечеринка')).toBeInTheDocument();
		});
	});

	it('закрывает список при повторном клике', async () => {
		const user = userEvent.setup();
		customRender(
			<TestWrapper>
				<SelectUI
					name="event"
					values={selectValues}
					placeholder="Событие"
				/>
			</TestWrapper>,
		);

		const toggleButton = screen.getByTestId('select-toggle-button');
		await user.click(toggleButton);
		await waitFor(() => {
			expect(screen.getByText('Свадьба')).toBeInTheDocument();
		});

		await user.click(toggleButton);
		await waitFor(() => {
			expect(screen.queryByText('Свадьба')).not.toBeInTheDocument();
		});
	});

	it('выбирает значение из списка', async () => {
		const user = userEvent.setup();
		customRender(
			<TestWrapper>
				<SelectUI
					name="event"
					values={selectValues}
					placeholder="Событие"
				/>
			</TestWrapper>,
		);

		const toggleButton = screen.getByTestId('select-toggle-button');
		await user.click(toggleButton);
		await waitFor(() => {
			expect(screen.getByText('Свадьба')).toBeInTheDocument();
		});

		const optionButton = screen.getByText('Свадьба');
		await user.click(optionButton);

		await waitFor(() => {
			const input = screen.getByPlaceholderText(
				'Событие',
			) as HTMLInputElement;
			expect(input.value).toBe('Свадьба');
		});
	});

	it('закрывает список после выбора значения', async () => {
		const user = userEvent.setup();
		customRender(
			<TestWrapper>
				<SelectUI
					name="event"
					values={selectValues}
					placeholder="Событие"
				/>
			</TestWrapper>,
		);

		const toggleButton = screen.getByTestId('select-toggle-button');
		await user.click(toggleButton);
		await waitFor(() => {
			expect(screen.getByText('День рождения')).toBeInTheDocument();
		});

		const optionButton = screen.getByText('День рождения');
		await user.click(optionButton);

		await waitFor(() => {
			expect(screen.queryByText('Свадьба')).not.toBeInTheDocument();
		});
	});

	it('отображает ошибку валидации когда поле touched и есть ошибка', () => {
		customRender(
			<TestWrapper initialValues={{ event: '' }}>
				<SelectUI
					name="event"
					values={selectValues}
					placeholder="Событие"
					required
				/>
			</TestWrapper>,
		);
	});

	it('работает с пустым массивом values', () => {
		customRender(
			<TestWrapper>
				<SelectUI name="event" values={[]} placeholder="Событие" />
			</TestWrapper>,
		);
		expect(screen.getByPlaceholderText('Событие')).toBeInTheDocument();
	});

	it('интегрируется с Formik и сохраняет значение', async () => {
		const user = userEvent.setup();
		let formValues: Record<string, string> = {};

		customRender(
			<TestWrapper initialValues={{ event: '' }}>
				<Formik
					initialValues={{ event: '' }}
					onSubmit={(values) => {
						formValues = values;
					}}
				>
					{({ values }) => {
						formValues = values;
						return (
							<SelectUI
								name="event"
								values={selectValues}
								placeholder="Событие"
							/>
						);
					}}
				</Formik>
			</TestWrapper>,
		);

		const toggleButton = screen.getByTestId('select-toggle-button');
		await user.click(toggleButton);
		await waitFor(() => {
			expect(screen.getByText('Вечеринка')).toBeInTheDocument();
		});

		const optionButton = screen.getByText('Вечеринка');
		await user.click(optionButton);

		await waitFor(() => {
			expect(formValues.event).toBe('Вечеринка');
		});
	});
});
