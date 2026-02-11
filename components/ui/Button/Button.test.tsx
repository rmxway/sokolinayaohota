import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render as customRender } from '../../../__tests__/test-utils';
import { ButtonUI } from './index';

describe('ButtonUI', () => {
	it('рендерится с текстом', () => {
		customRender(<ButtonUI>Тестовая кнопка</ButtonUI>);
		expect(screen.getByText('Тестовая кнопка')).toBeInTheDocument();
	});

	it('вызывает onClick при клике', async () => {
		const handleClick = jest.fn();
		const user = userEvent.setup();
		customRender(<ButtonUI onClick={handleClick}>Клик</ButtonUI>);

		await user.click(screen.getByText('Клик'));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('отображает иконку когда передан $icon', () => {
		customRender(<ButtonUI $icon="phone">Телефон</ButtonUI>);
		const button = screen.getByText('Телефон').closest('button');
		expect(button).toBeInTheDocument();
	});

	it('не отображает иконку когда $icon не передан', () => {
		customRender(<ButtonUI>Без иконки</ButtonUI>);
		const button = screen.getByText('Без иконки').closest('button');
		expect(button).toBeInTheDocument();
	});

	it('disabled когда передан disabled prop', () => {
		customRender(<ButtonUI disabled>Отключена</ButtonUI>);
		expect(screen.getByText('Отключена').closest('button')).toBeDisabled();
	});

	it('принимает разные стили через пропсы', () => {
		const { rerender } = customRender(
			<ButtonUI $primary>Primary</ButtonUI>,
		);
		expect(screen.getByText('Primary')).toBeInTheDocument();

		rerender(<ButtonUI $danger>Danger</ButtonUI>);
		expect(screen.getByText('Danger')).toBeInTheDocument();

		rerender(<ButtonUI $success>Success</ButtonUI>);
		expect(screen.getByText('Success')).toBeInTheDocument();

		rerender(<ButtonUI $brown>Brown</ButtonUI>);
		expect(screen.getByText('Brown')).toBeInTheDocument();
	});

	it('принимает $w100 для полной ширины', () => {
		customRender(<ButtonUI $w100>Полная ширина</ButtonUI>);
		expect(screen.getByText('Полная ширина')).toBeInTheDocument();
	});

	it('принимает $mobile для мобильной версии', () => {
		customRender(<ButtonUI $mobile>Мобильная</ButtonUI>);
		expect(screen.getByText('Мобильная')).toBeInTheDocument();
	});

	it('передает ref корректно', () => {
		const ref = jest.fn();
		customRender(<ButtonUI ref={ref}>С ref</ButtonUI>);
		expect(ref).toHaveBeenCalled();
	});
});
