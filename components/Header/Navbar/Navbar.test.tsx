import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as nextNavigation from 'next/navigation';

import { render as customRender } from '../../../__tests__/test-utils';
import { Navbar } from './index';

const mockUsePathname = nextNavigation.usePathname as jest.MockedFunction<
	typeof nextNavigation.usePathname
>;

describe('Navbar', () => {
	beforeEach(() => {
		mockUsePathname.mockReturnValue('/');
		document.body.classList.remove('scroll-locked');
	});

	it('рендерится с десктопной навигацией', () => {
		customRender(<Navbar />);
		expect(screen.getByText('Главная')).toBeInTheDocument();
		expect(screen.getByText('Залы')).toBeInTheDocument();
		expect(screen.getByText('Галерея')).toBeInTheDocument();
		expect(screen.getByText('Контакты')).toBeInTheDocument();
	});

	it('отображает бургер-кнопку', () => {
		customRender(<Navbar />);
		const burgerButton = screen.getByLabelText('burger button');
		expect(burgerButton).toBeInTheDocument();
	});

	it('мобильное меню скрыто по умолчанию', () => {
		customRender(<Navbar />);
		const mobileNav = screen.queryByTestId('mobile-nav');
		expect(mobileNav).not.toBeInTheDocument();
	});

	it('открывает мобильное меню при клике на бургер-кнопку', async () => {
		const user = userEvent.setup();
		customRender(<Navbar />);

		const burgerButton = screen.getByLabelText('burger button');
		await user.click(burgerButton);

		await waitFor(() => {
			expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();
		});
	});

	it('закрывает мобильное меню при повторном клике на бургер-кнопку', async () => {
		const user = userEvent.setup();
		customRender(<Navbar />);

		const burgerButton = screen.getByLabelText('burger button');
		await user.click(burgerButton);

		await waitFor(() => {
			expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();
		});

		await user.click(burgerButton);

		await waitFor(() => {
			expect(screen.queryByTestId('mobile-nav')).not.toBeInTheDocument();
		});
	});

	it('закрывает мобильное меню при клике на overlay', async () => {
		const user = userEvent.setup({ pointerEventsCheck: 0 });
		customRender(<Navbar />);

		const burgerButton = screen.getByLabelText('burger button');
		await user.click(burgerButton);

		await waitFor(() => {
			expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();
		});

		const wrapper = screen.getByTestId('navbar-overlay');
		await user.click(wrapper);

		await waitFor(() => {
			expect(screen.queryByTestId('mobile-nav')).not.toBeInTheDocument();
		});
	});

	it('добавляет класс scroll-locked когда мобильное меню открыто', async () => {
		const user = userEvent.setup();
		customRender(<Navbar />);

		const burgerButton = screen.getByLabelText('burger button');
		await user.click(burgerButton);

		await waitFor(() => {
			expect(document.body.classList.contains('scroll-locked')).toBe(
				true,
			);
		});
	});

	it('удаляет класс scroll-locked когда мобильное меню закрыто', async () => {
		const user = userEvent.setup();
		customRender(<Navbar />);

		const burgerButton = screen.getByLabelText('burger button');
		await user.click(burgerButton);

		await waitFor(() => {
			expect(document.body.classList.contains('scroll-locked')).toBe(
				true,
			);
		});

		await user.click(burgerButton);

		await waitFor(() => {
			expect(document.body.classList.contains('scroll-locked')).toBe(
				false,
			);
		});
	});

	it('определяет активную ссылку для главной страницы', () => {
		mockUsePathname.mockReturnValue('/');
		customRender(<Navbar />);
		const linkElement = screen.getByTestId('navbar-item-главная');
		expect(linkElement).toBeInTheDocument();
	});

	it('определяет активную ссылку для страницы залов', () => {
		mockUsePathname.mockReturnValue('/halls/big-hall');
		customRender(<Navbar />);
		const hallsLink = screen.getByText('Залы');
		expect(hallsLink).toBeInTheDocument();
	});

	it('определяет активную ссылку для страницы галереи', () => {
		mockUsePathname.mockReturnValue('/gallery');
		customRender(<Navbar />);
		const galleryLink = screen.getByText('Галерея');
		expect(galleryLink).toBeInTheDocument();
	});

	it('определяет активную ссылку для страницы контактов', () => {
		mockUsePathname.mockReturnValue('/contacts');
		customRender(<Navbar />);
		const contactsLink = screen.getByText('Контакты');
		expect(contactsLink).toBeInTheDocument();
	});

	it('отображает все пункты меню в мобильной версии', async () => {
		const user = userEvent.setup();
		customRender(<Navbar />);

		const burgerButton = screen.getByLabelText('burger button');
		await user.click(burgerButton);

		const mobileNav = screen.getByTestId('mobile-nav');
		const utils = within(mobileNav);

		expect(utils.getByText('Главная')).toBeInTheDocument();
		expect(utils.getByText('Залы')).toBeInTheDocument();
		expect(utils.getByText('Галерея')).toBeInTheDocument();
		expect(utils.getByText('Контакты')).toBeInTheDocument();
	});

	it('не закрывает меню при клике на сам контейнер мобильного меню', async () => {
		const user = userEvent.setup({ pointerEventsCheck: 0 });
		customRender(<Navbar />);

		const burgerButton = screen.getByLabelText('burger button');
		await user.click(burgerButton);

		await waitFor(() => {
			expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();
		});

		const mobileNav = screen.getByTestId('mobile-nav');
		await user.click(mobileNav);

		await waitFor(() => {
			expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();
		});
	});
});
