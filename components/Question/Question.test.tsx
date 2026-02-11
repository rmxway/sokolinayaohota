import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render as customRender } from '../../__tests__/test-utils';
import { Question } from './index';

describe('Question', () => {
	const mockQuestion = {
		id: 1,
		question: 'Как забронировать зал?',
		answer: 'Вы можете забронировать зал через форму на сайте или позвонив нам.',
	};

	const getCheckbox = () => {
		const label = screen
			.getByText('Как забронировать зал?')
			.closest('label');

		if (!label) {
			throw new Error('Label for checkbox not found');
		}

		const checkbox = label.querySelector(
			'input[type="checkbox"]',
		) as HTMLInputElement | null;

		if (!checkbox) {
			throw new Error('Checkbox input not found');
		}

		return checkbox;
	};

	it('рендерится с вопросом', () => {
		customRender(<Question {...mockQuestion} />);
		expect(screen.getByText('Как забронировать зал?')).toBeInTheDocument();
	});

	it('рендерится с ответом', () => {
		customRender(<Question {...mockQuestion} />);
		expect(
			screen.getByText(
				'Вы можете забронировать зал через форму на сайте или позвонив нам.',
			),
		).toBeInTheDocument();
	});

	it('ответ скрыт по умолчанию', () => {
		customRender(<Question {...mockQuestion} />);
		const answer = screen.getByText(
			'Вы можете забронировать зал через форму на сайте или позвонив нам.',
		);
		expect(answer).toBeInTheDocument();
	});

	it('раскрывает ответ при клике на чекбокс', async () => {
		const user = userEvent.setup();
		customRender(<Question {...mockQuestion} />);

		const checkbox = getCheckbox();
		expect(checkbox).toBeInTheDocument();

		await user.click(checkbox);

		const answer = screen.getByText(
			'Вы можете забронировать зал через форму на сайте или позвонив нам.',
		);
		expect(answer).toBeInTheDocument();
	});

	it('сворачивает ответ при повторном клике', async () => {
		const user = userEvent.setup();
		customRender(<Question {...mockQuestion} />);

		const checkbox = getCheckbox();
		await user.click(checkbox);
		await user.click(checkbox);

		const answer = screen.getByText(
			'Вы можете забронировать зал через форму на сайте или позвонив нам.',
		);
		expect(answer).toBeInTheDocument();
	});

	it('использует id для htmlFor и id атрибутов', () => {
		customRender(<Question {...mockQuestion} />);
		const checkbox = getCheckbox();
		expect(checkbox).toHaveAttribute('id', '1');
		expect(checkbox).toHaveAttribute('name', 'questions');
	});

	it('работает с разными id', () => {
		customRender(<Question {...mockQuestion} id={5} />);
		const checkbox = getCheckbox();
		expect(checkbox).toHaveAttribute('id', '5');
	});

	it('переключает состояние checked при клике', async () => {
		const user = userEvent.setup();
		customRender(<Question {...mockQuestion} />);

		const checkbox = getCheckbox();
		expect(checkbox.checked).toBe(false);

		await user.click(checkbox);
		expect(checkbox.checked).toBe(true);

		await user.click(checkbox);
		expect(checkbox.checked).toBe(false);
	});
});
