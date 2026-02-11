import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render as customRender } from '../../__tests__/test-utils';
import { Modal } from './index';

describe('Modal', () => {
	beforeEach(() => {
		document.body.classList.remove('scroll-locked');
	});

	it('не рендерится когда show=false', () => {
		customRender(
			<Modal show={false} onClose={jest.fn()}>
				<div>Контент</div>
			</Modal>,
		);
		expect(screen.queryByText('Контент')).not.toBeInTheDocument();
	});

	it('рендерится когда show=true', () => {
		customRender(
			<Modal show onClose={jest.fn()}>
				<div>Контент модального окна</div>
			</Modal>,
		);
		expect(screen.getByText('Контент модального окна')).toBeInTheDocument();
	});

	it('отображает заголовок когда передан header', () => {
		customRender(
			<Modal show header="Заголовок модального окна" onClose={jest.fn()}>
				<div>Контент</div>
			</Modal>,
		);
		expect(
			screen.getByText('Заголовок модального окна'),
		).toBeInTheDocument();
	});

	it('не отображает заголовок когда header не передан', () => {
		customRender(
			<Modal show onClose={jest.fn()}>
				<div>Контент</div>
			</Modal>,
		);
		expect(
			screen.queryByText('Заголовок модального окна'),
		).not.toBeInTheDocument();
	});

	it('вызывает onClose при клике на overlay', async () => {
		const handleClose = jest.fn();
		const user = userEvent.setup();
		customRender(
			<Modal show onClose={handleClose}>
				<div>Контент</div>
			</Modal>,
		);

		const wrapper = screen.getByTestId('modal-wrapper');
		await user.click(wrapper);
		expect(handleClose).toHaveBeenCalledTimes(1);
	});

	it('вызывает onClose при клике на кнопку закрытия', async () => {
		const handleClose = jest.fn();
		const user = userEvent.setup();
		customRender(
			<Modal show onClose={handleClose}>
				<div>Контент</div>
			</Modal>,
		);

		const closeButton = screen.getByTestId('modal-close-button');
		await user.click(closeButton);
		expect(handleClose).toHaveBeenCalledTimes(1);
	});

	it('не вызывает onClose при клике на содержимое модального окна', async () => {
		const handleClose = jest.fn();
		const user = userEvent.setup();
		customRender(
			<Modal show onClose={handleClose}>
				<div data-testid="content">Контент модального окна</div>
			</Modal>,
		);

		const content = screen.getByTestId('content');
		await user.click(content);
		expect(handleClose).not.toHaveBeenCalled();
	});

	it('добавляет класс scroll-locked к body когда show=true', () => {
		customRender(
			<Modal show onClose={jest.fn()}>
				<div>Контент</div>
			</Modal>,
		);
		expect(document.body.classList.contains('scroll-locked')).toBe(true);
	});

	it('удаляет класс scroll-locked когда show=false', () => {
		const { rerender } = customRender(
			<Modal show onClose={jest.fn()}>
				<div>Контент</div>
			</Modal>,
		);
		expect(document.body.classList.contains('scroll-locked')).toBe(true);

		rerender(
			<Modal show={false} onClose={jest.fn()}>
				<div>Контент</div>
			</Modal>,
		);
		expect(document.body.classList.contains('scroll-locked')).toBe(false);
	});

	it('удаляет класс scroll-locked при размонтировании', () => {
		const { unmount } = customRender(
			<Modal show onClose={jest.fn()}>
				<div>Контент</div>
			</Modal>,
		);
		expect(document.body.classList.contains('scroll-locked')).toBe(true);

		unmount();
		expect(document.body.classList.contains('scroll-locked')).toBe(false);
	});

	it('отображает children корректно', () => {
		customRender(
			<Modal show onClose={jest.fn()}>
				<div>
					<h1>Заголовок</h1>
					<p>Текст контента</p>
				</div>
			</Modal>,
		);
		expect(screen.getByText('Заголовок')).toBeInTheDocument();
		expect(screen.getByText('Текст контента')).toBeInTheDocument();
	});

	it('работает без onClose', () => {
		customRender(
			<Modal show>
				<div>Контент</div>
			</Modal>,
		);
		expect(screen.getByText('Контент')).toBeInTheDocument();
	});
});
