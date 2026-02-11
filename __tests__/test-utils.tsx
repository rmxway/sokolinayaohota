import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@/theme';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
	<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

describe('test-utils', () => {
	it('экспортирует custom render', () => {
		expect(typeof customRender).toBe('function');
	});
});
