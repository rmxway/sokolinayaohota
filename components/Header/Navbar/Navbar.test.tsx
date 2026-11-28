import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';

import { customRender } from '@/services/test-utils';
import { Navbar } from './index';

vi.mock('@/hooks', () => ({
	useScrollLock: vi.fn(),
	useLocation: vi.fn(),
}));

const renderNavbar = (path = '/') =>
	customRender(
		<MemoryRouter initialEntries={[path]}>
			<Navbar />
		</MemoryRouter>,
	);

describe('Navbar', () => {
	beforeEach(() => {
		document.body.classList.remove('scroll-locked');
	});

	it('рендерит десктопное меню', () => {
		renderNavbar('/');
		expect(
			screen.getByTestId('desktop-navbar-item-home'),
		).toBeInTheDocument();
	});

	it('рендерится с десктопной навигацией', () => {
		renderNavbar('/');
		expect(screen.getByText('Главная')).toBeInTheDocument();
		expect(screen.getByText('Залы')).toBeInTheDocument();
		expect(screen.getByText('Галерея')).toBeInTheDocument();
	});

	it('отображает бургер-кнопку', () => {
		renderNavbar('/');
		const burgerButton = screen.getByLabelText('burger button');
		expect(burgerButton).toBeInTheDocument();
	});

	it('мобильное меню скрыто по умолчанию', () => {
		renderNavbar('/');
		const mobileNav = screen.queryByTestId('mobile-nav');
		expect(mobileNav).not.toBeInTheDocument();
	});

	it('открывает мобильное меню при клике на бургер-кнопку', async () => {
		const user = userEvent.setup();
		renderNavbar('/');

		const burgerButton = screen.getByLabelText('burger button');
		await user.click(burgerButton);

		await waitFor(() => {
			expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();
		});
	});

	it('закрывает мобильное меню при повторном клике на бургер-кнопку', async () => {
		const user = userEvent.setup();
		renderNavbar('/');

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
		renderNavbar('/');

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

	it('определяет активную ссылку для главной страницы', () => {
		renderNavbar('/');
		const linkElement = screen.getByTestId('desktop-navbar-item-home');
		expect(linkElement).toBeInTheDocument();
	});

	it('определяет активную ссылку для страницы залов', () => {
		renderNavbar('/halls/big-hall');
		const hallsLink = screen.getByText('Залы');
		expect(hallsLink).toBeInTheDocument();
	});

	it('определяет активную ссылку для страницы галереи', () => {
		renderNavbar('/gallery');
		const galleryLink = screen.getByText('Галерея');
		expect(galleryLink).toBeInTheDocument();
	});

	it('отображает все пункты меню в мобильной версии', async () => {
		const user = userEvent.setup();
		renderNavbar('/');

		const burgerButton = screen.getByLabelText('burger button');
		await user.click(burgerButton);

		const mobileNav = screen.getByTestId('mobile-nav');
		const utils = within(mobileNav);

		expect(utils.getByText('Главная')).toBeInTheDocument();
		expect(utils.getByText('Залы')).toBeInTheDocument();
		expect(utils.getByText('Галерея')).toBeInTheDocument();
	});

	it('не закрывает меню при клике на сам контейнер мобильного меню', async () => {
		const user = userEvent.setup({ pointerEventsCheck: 0 });
		renderNavbar('/');

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
