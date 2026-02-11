import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render as customRender } from '../../__tests__/test-utils';
import { FormOrder } from './index';

global.fetch = jest.fn();

describe('FormOrder', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('рендерится с полями формы', async () => {
		customRender(<FormOrder name="test-form" />);
		await waitFor(() => {
			expect(screen.getByPlaceholderText('Имя *')).toBeInTheDocument();
		});
		expect(screen.getByPlaceholderText('Телефон *')).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText('Электронная почта'),
		).toBeInTheDocument();
		expect(screen.getByText('Отправить')).toBeInTheDocument();
	});

	it('кнопка отправки disabled при невалидных данных', async () => {
		customRender(<FormOrder name="test-form" />);
		const submitButton = screen.getByRole('button', { name: /отправить/i });
		await waitFor(() => {
			expect(submitButton).toBeDisabled();
		});
	});

	it('показывает ошибку валидации для имени при пустом поле', async () => {
		const user = userEvent.setup();
		customRender(<FormOrder name="test-form" />);

		const nameInput = screen.getByPlaceholderText('Имя *');
		await user.click(nameInput);
		await user.tab();

		await waitFor(() => {
			expect(
				screen.getByText('Обязательно для заполнения'),
			).toBeInTheDocument();
		});
	});

	it('показывает ошибку валидации для слишком короткого имени', async () => {
		const user = userEvent.setup();
		customRender(<FormOrder name="test-form" />);

		const nameInput = screen.getByPlaceholderText('Имя *');
		await user.type(nameInput, 'Аб');
		await user.tab();

		await waitFor(() => {
			expect(screen.getByText('Очень короткое имя')).toBeInTheDocument();
		});
	});

	it('показывает ошибку валидации для имени с цифрами', async () => {
		const user = userEvent.setup();
		customRender(<FormOrder name="test-form" />);

		const nameInput = screen.getByPlaceholderText('Имя *');
		await user.type(nameInput, 'Иван123');
		await user.tab();

		await waitFor(() => {
			expect(
				screen.getByText('Не используйте цифры'),
			).toBeInTheDocument();
		});
	});

	it('показывает ошибку валидации для телефона при пустом поле', async () => {
		const user = userEvent.setup();
		customRender(<FormOrder name="test-form" />);

		const phoneInput = screen.getByPlaceholderText('Телефон *');
		await user.click(phoneInput);
		await user.tab();

		await waitFor(() => {
			expect(
				screen.getByText('Обязательно для заполнения'),
			).toBeInTheDocument();
		});
	});

	it('показывает ошибку валидации для неправильного формата телефона', async () => {
		const user = userEvent.setup();
		customRender(<FormOrder name="test-form" />);

		const phoneInput = screen.getByPlaceholderText('Телефон *');
		await user.type(phoneInput, 'abc');
		await user.tab();

		await waitFor(() => {
			expect(
				screen.getByText('Неправильный номер телефона'),
			).toBeInTheDocument();
		});
	});

	it('показывает ошибку валидации для неправильного email', async () => {
		const user = userEvent.setup();
		customRender(<FormOrder name="test-form" />);

		const emailInput = screen.getByPlaceholderText('Электронная почта');
		await user.type(emailInput, 'неправильный-email');
		await user.tab();

		await waitFor(() => {
			expect(screen.getByText('Неправильный email')).toBeInTheDocument();
		});
	});

	it('кнопка отправки enabled при валидных данных', async () => {
		const user = userEvent.setup();
		customRender(<FormOrder name="test-form" />);

		await user.type(screen.getByPlaceholderText('Имя *'), 'Иван');
		await user.type(screen.getByPlaceholderText('Телефон *'), '1234567890');
		await user.type(
			screen.getByPlaceholderText('Электронная почта'),
			'test@example.com',
		);

		await waitFor(() => {
			const submitButton = screen.getByRole('button', {
				name: /отправить/i,
			});
			expect(submitButton).not.toBeDisabled();
		});
	});

	it('отправляет форму с очищенным номером телефона', async () => {
		const user = userEvent.setup();
		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: async () => ({}),
		});

		customRender(<FormOrder name="test-form" fetchUrl="/api/test" />);

		await user.type(screen.getByPlaceholderText('Имя *'), 'Иван');
		await user.type(
			screen.getByPlaceholderText('Телефон *'),
			'+7 (999) 123-45-67',
		);
		await user.type(
			screen.getByPlaceholderText('Электронная почта'),
			'test@example.com',
		);

		const submitButton = screen.getByRole('button', { name: /отправить/i });
		await user.click(submitButton);

		await waitFor(() => {
			expect(global.fetch).toHaveBeenCalledWith('/api/test', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: expect.stringContaining('"phone":"79991234567"'),
			});
		});
	});

	it('показывает сообщение об успехе после успешной отправки', async () => {
		const user = userEvent.setup();
		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: async () => ({}),
		});

		customRender(<FormOrder name="test-form" fetchUrl="/api/test" />);

		await user.type(screen.getByPlaceholderText('Имя *'), 'Иван');
		await user.type(screen.getByPlaceholderText('Телефон *'), '1234567890');
		await user.type(
			screen.getByPlaceholderText('Электронная почта'),
			'test@example.com',
		);

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

		customRender(<FormOrder name="test-form" fetchUrl="/api/test" />);

		await user.type(screen.getByPlaceholderText('Имя *'), 'Иван');
		await user.type(screen.getByPlaceholderText('Телефон *'), '1234567890');
		await user.type(
			screen.getByPlaceholderText('Электронная почта'),
			'test@example.com',
		);

		const submitButton = screen.getByRole('button', { name: /отправить/i });
		await user.click(submitButton);

		await waitFor(() => {
			expect(screen.getByText(errorMessage)).toBeInTheDocument();
		});
	});

	it('не отправляет форму если fetchUrl не передан', async () => {
		const user = userEvent.setup();
		customRender(<FormOrder name="test-form" />);

		await user.type(screen.getByPlaceholderText('Имя *'), 'Иван');
		await user.type(screen.getByPlaceholderText('Телефон *'), '1234567890');
		await user.type(
			screen.getByPlaceholderText('Электронная почта'),
			'test@example.com',
		);

		const submitButton = screen.getByRole('button', { name: /отправить/i });
		await user.click(submitButton);

		await waitFor(() => {
			expect(global.fetch).not.toHaveBeenCalled();
			expect(screen.getByText(/спасибо/i)).toBeInTheDocument();
		});
	});
});
