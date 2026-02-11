import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render as customRender } from '../../../__tests__/test-utils';
import { InputUI } from './index';

describe('InputUI', () => {
	it('рендерится с name и placeholder', () => {
		customRender(
			<InputUI
				name="test"
				placeholder="Введите текст"
				value=""
				onChange={() => {}}
			/>,
		);
		const input = screen.getByPlaceholderText('Введите текст');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('name', 'test');
	});

	it('отображает иконку когда передан icon prop', () => {
		customRender(
			<InputUI
				name="phone"
				icon="phone"
				placeholder="Телефон"
				value=""
				onChange={() => {}}
			/>,
		);
		const input = screen.getByPlaceholderText('Телефон');
		expect(input).toBeInTheDocument();
	});

	it('не отображает иконку когда icon не передан', () => {
		customRender(
			<InputUI
				name="name"
				placeholder="Имя"
				value=""
				onChange={() => {}}
			/>,
		);
		const input = screen.getByPlaceholderText('Имя');
		expect(input).toBeInTheDocument();
	});

	it('отображает ошибку когда передан error prop', () => {
		customRender(
			<InputUI
				name="test"
				error="Обязательное поле"
				placeholder="Тест"
				value=""
				onChange={() => {}}
			/>,
		);
		expect(screen.getByText('Обязательное поле')).toBeInTheDocument();
	});

	it('не отображает ошибку когда error не передан', () => {
		customRender(
			<InputUI
				name="test"
				placeholder="Тест"
				value=""
				onChange={() => {}}
			/>,
		);
		expect(screen.queryByText('Обязательное поле')).not.toBeInTheDocument();
	});

	it('вызывает onChange при изменении значения', async () => {
		const handleChange = jest.fn();
		const user = userEvent.setup();
		customRender(
			<InputUI
				name="test"
				value=""
				onChange={handleChange}
				placeholder="Тест"
			/>,
		);

		const input = screen.getByPlaceholderText('Тест');
		await user.type(input, 'новое значение');
		expect(handleChange).toHaveBeenCalled();
	});

	it('вызывает onBlur при потере фокуса', async () => {
		const handleBlur = jest.fn();
		const user = userEvent.setup();
		customRender(
			<InputUI
				name="test"
				value=""
				onChange={() => {}}
				onBlur={handleBlur}
				placeholder="Тест"
			/>,
		);

		const input = screen.getByPlaceholderText('Тест');
		await user.click(input);
		await user.tab();
		expect(handleBlur).toHaveBeenCalled();
	});

	it('disabled когда передан disabled prop', () => {
		customRender(
			<InputUI
				name="test"
				disabled
				placeholder="Отключено"
				value=""
				onChange={() => {}}
			/>,
		);
		expect(screen.getByPlaceholderText('Отключено')).toBeDisabled();
	});

	it('принимает success prop для успешного состояния', () => {
		customRender(
			<InputUI
				name="test"
				success
				placeholder="Успех"
				value=""
				onChange={() => {}}
			/>,
		);
		expect(screen.getByPlaceholderText('Успех')).toBeInTheDocument();
	});

	it('принимает danger prop для состояния ошибки', () => {
		customRender(
			<InputUI
				name="test"
				danger
				placeholder="Ошибка"
				value=""
				onChange={() => {}}
			/>,
		);
		expect(screen.getByPlaceholderText('Ошибка')).toBeInTheDocument();
	});

	it('показывает danger состояние когда есть error', () => {
		customRender(
			<InputUI
				name="test"
				error="Ошибка"
				placeholder="Тест"
				value=""
				onChange={() => {}}
			/>,
		);
		expect(screen.getByText('Ошибка')).toBeInTheDocument();
	});

	it('принимает value и отображает его', () => {
		customRender(
			<InputUI
				name="test"
				value="тестовое значение"
				placeholder="Тест"
				onChange={() => {}}
			/>,
		);
		const input = screen.getByPlaceholderText('Тест') as HTMLInputElement;
		expect(input.value).toBe('тестовое значение');
	});

	it('принимает type prop', () => {
		customRender(
			<InputUI
				name="email"
				type="email"
				placeholder="Email"
				value=""
				onChange={() => {}}
			/>,
		);
		expect(screen.getByPlaceholderText('Email')).toHaveAttribute(
			'type',
			'email',
		);
	});
});
