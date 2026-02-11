import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render as customRender } from '../../__tests__/test-utils';
import { FormOrderHall } from './index';

global.fetch = jest.fn();

describe('FormOrderHall', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('рендерится со всеми полями формы', async () => {
		customRender(<FormOrderHall name="big-hall" />);
		await waitFor(() => {
			expect(screen.getByPlaceholderText('Имя *')).toBeInTheDocument();
		});
		expect(screen.getByPlaceholderText('Телефон *')).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText('Электронная почта'),
		).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Событие *')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Дата *')).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText('Кол-во гостей *'),
		).toBeInTheDocument();
		expect(screen.getByText('Отправить')).toBeInTheDocument();
	});

	it('кнопка отправки disabled при невалидных данных', async () => {
		customRender(<FormOrderHall name="big-hall" />);
		const submitButton = screen.getByRole('button', { name: /отправить/i });
		await waitFor(() => {
			expect(submitButton).toBeDisabled();
		});
	});

	it('валидирует поле имени', async () => {
		const user = userEvent.setup();
		customRender(<FormOrderHall name="big-hall" />);

		const nameInput = screen.getByPlaceholderText('Имя *');
		await user.click(nameInput);
		await user.tab();

		await waitFor(() => {
			expect(
				screen.getByText('Обязательно для заполнения'),
			).toBeInTheDocument();
		});
	});

	it('валидирует поле телефона', async () => {
		const user = userEvent.setup();
		customRender(<FormOrderHall name="big-hall" />);

		const phoneInput = screen.getByPlaceholderText('Телефон *');
		await user.click(phoneInput);
		await user.tab();

		await waitFor(() => {
			expect(
				screen.getByText('Обязательно для заполнения'),
			).toBeInTheDocument();
		});
	});

	it('валидирует поле события', async () => {
		const user = userEvent.setup();
		customRender(<FormOrderHall name="big-hall" />);

		const eventInput = screen.getByPlaceholderText('Событие *');
		await user.click(eventInput);
		await user.tab();

		await waitFor(() => {
			expect(
				screen.getByText('Обязательно для заполнения'),
			).toBeInTheDocument();
		});
	});

	it('валидирует поле даты', async () => {
		const user = userEvent.setup();
		customRender(<FormOrderHall name="big-hall" />);

		const dateInput = screen.getByPlaceholderText('Дата *');
		await user.click(dateInput);
		await user.tab();

		await waitFor(() => {
			expect(
				screen.getByText('Обязательно для заполнения'),
			).toBeInTheDocument();
		});
	});

	it('валидирует поле количества гостей', async () => {
		const user = userEvent.setup();
		customRender(<FormOrderHall name="big-hall" />);

		const countPeopleInput = screen.getByPlaceholderText('Кол-во гостей *');
		await user.click(countPeopleInput);
		await user.tab();

		await waitFor(() => {
			expect(
				screen.getByText('Обязательно для заполнения'),
			).toBeInTheDocument();
		});
	});

	it('позволяет выбрать событие из Select', async () => {
		const user = userEvent.setup();
		customRender(<FormOrderHall name="big-hall" />);

		const toggleButton = screen.getByTestId('select-toggle-button');
		await user.click(toggleButton);
		await waitFor(() => {
			expect(screen.getByText('Свадьба')).toBeInTheDocument();
		});

		await user.click(screen.getByText('Свадьба'));

		await waitFor(() => {
			const input = screen.getByPlaceholderText(
				'Событие *',
			) as HTMLInputElement;
			expect(input.value).toBe('Свадьба');
		});
	});

	it('кнопка отправки enabled при всех валидных данных', async () => {
		const user = userEvent.setup();
		customRender(<FormOrderHall name="big-hall" />);

		await user.type(screen.getByPlaceholderText('Имя *'), 'Иван');
		await user.type(screen.getByPlaceholderText('Телефон *'), '1234567890');
		await user.type(
			screen.getByPlaceholderText('Электронная почта'),
			'test@example.com',
		);

		const toggleButton = screen.getByTestId('select-toggle-button');
		await user.click(toggleButton);
		await waitFor(() => {
			expect(screen.getByText('Свадьба')).toBeInTheDocument();
		});
		await user.click(screen.getByText('Свадьба'));

		await user.type(screen.getByPlaceholderText('Дата *'), '2024-12-31');
		await user.type(screen.getByPlaceholderText('Кол-во гостей *'), '50');

		await waitFor(() => {
			const submitButton = screen.getByRole('button', {
				name: /отправить/i,
			});
			expect(submitButton).not.toBeDisabled();
		});
	});

	it('отправляет форму с данными зала', async () => {
		const user = userEvent.setup();
		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: async () => ({}),
		});

		customRender(
			<FormOrderHall name="big-hall" fetchUrl="/api/send-hall-request" />,
		);

		await user.type(screen.getByPlaceholderText('Имя *'), 'Иван');
		await user.type(
			screen.getByPlaceholderText('Телефон *'),
			'+7 (999) 123-45-67',
		);
		await user.type(
			screen.getByPlaceholderText('Электронная почта'),
			'test@example.com',
		);

		const toggleButton = screen.getByTestId('select-toggle-button');
		await user.click(toggleButton);
		await waitFor(() => {
			expect(screen.getByText(/день рождения/i)).toBeInTheDocument();
		});
		await user.click(screen.getByText(/день рождения/i));

		await user.type(screen.getByPlaceholderText('Дата *'), '2024-12-31');
		await user.type(screen.getByPlaceholderText('Кол-во гостей *'), '30');

		const submitButton = screen.getByRole('button', { name: /отправить/i });
		await user.click(submitButton);

		await waitFor(() => {
			expect(global.fetch).toHaveBeenCalledWith(
				'/api/send-hall-request',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: expect.stringContaining('"phone":"79991234567"'),
				},
			);
		});
	});

	it('показывает сообщение об успехе после успешной отправки', async () => {
		const user = userEvent.setup();
		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: async () => ({}),
		});

		customRender(<FormOrderHall name="big-hall" fetchUrl="/api/test" />);

		await user.type(screen.getByPlaceholderText('Имя *'), 'Иван');
		await user.type(screen.getByPlaceholderText('Телефон *'), '1234567890');
		await user.type(
			screen.getByPlaceholderText('Электронная почта'),
			'test@example.com',
		);

		const toggleButton = screen.getByTestId('select-toggle-button');
		await user.click(toggleButton);
		await waitFor(() => {
			expect(screen.getByText('Свадьба')).toBeInTheDocument();
		});
		await user.click(screen.getByText('Свадьба'));

		await user.type(screen.getByPlaceholderText('Дата *'), '2024-12-31');
		await user.type(screen.getByPlaceholderText('Кол-во гостей *'), '50');

		const submitButton = screen.getByRole('button', { name: /отправить/i });
		await user.click(submitButton);

		await waitFor(() => {
			expect(screen.getByText(/спасибо/i)).toBeInTheDocument();
		});
	});

	it('показывает сообщение об ошибке при неудачной отправке', async () => {
		const user = userEvent.setup();
		const errorMessage = 'Ошибка сети';
		(global.fetch as jest.Mock).mockRejectedValueOnce(
			new Error(errorMessage),
		);

		customRender(<FormOrderHall name="big-hall" fetchUrl="/api/test" />);

		await user.type(screen.getByPlaceholderText('Имя *'), 'Иван');
		await user.type(screen.getByPlaceholderText('Телефон *'), '1234567890');
		await user.type(
			screen.getByPlaceholderText('Электронная почта'),
			'test@example.com',
		);

		const toggleButton = screen.getByTestId('select-toggle-button');
		await user.click(toggleButton);
		await waitFor(() => {
			expect(screen.getByText('Свадьба')).toBeInTheDocument();
		});
		await user.click(screen.getByText('Свадьба'));

		await user.type(screen.getByPlaceholderText('Дата *'), '2024-12-31');
		await user.type(screen.getByPlaceholderText('Кол-во гостей *'), '50');

		const submitButton = screen.getByRole('button', { name: /отправить/i });
		await user.click(submitButton);

		await waitFor(
			() => {
				expect(screen.getByText(/ошибка сети/i)).toBeInTheDocument();
			},
			{ timeout: 3000 },
		);
	});

	it('показывает ошибку при статусе ответа не ok', async () => {
		const user = userEvent.setup();
		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: false,
			statusText: 'Bad Request',
		});

		customRender(<FormOrderHall name="big-hall" fetchUrl="/api/test" />);

		await user.type(screen.getByPlaceholderText('Имя *'), 'Иван');
		await user.type(screen.getByPlaceholderText('Телефон *'), '1234567890');
		await user.type(
			screen.getByPlaceholderText('Электронная почта'),
			'test@example.com',
		);

		const toggleButton = screen.getByTestId('select-toggle-button');
		await user.click(toggleButton);
		await waitFor(() => {
			expect(screen.getByText('Свадьба')).toBeInTheDocument();
		});
		await user.click(screen.getByText('Свадьба'));

		await user.type(screen.getByPlaceholderText('Дата *'), '2024-12-31');
		await user.type(screen.getByPlaceholderText('Кол-во гостей *'), '50');

		const submitButton = screen.getByRole('button', { name: /отправить/i });
		await user.click(submitButton);

		await waitFor(
			() => {
				expect(screen.getByText(/bad request/i)).toBeInTheDocument();
			},
			{ timeout: 3000 },
		);
	});
});
