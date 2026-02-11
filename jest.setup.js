import '@testing-library/jest-dom';

import React from 'react';

let mockPathname = '/';
const usePathnameMock = jest.fn(() => mockPathname);

jest.mock('next/navigation', () => ({
	useRouter() {
		return {
			push: jest.fn(),
			replace: jest.fn(),
			prefetch: jest.fn(),
			back: jest.fn(),
		};
	},
	usePathname: usePathnameMock,
	useSearchParams() {
		return new URLSearchParams();
	},
}));

export const setMockPathname = (pathname) => {
	mockPathname = pathname;
	usePathnameMock.mockReturnValue(pathname);
};

jest.mock('next/image', () => ({
	__esModule: true,
	default: (props) => (
		// eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
		<img {...props} />
	),
}));

jest.mock('next/link', () => ({
	__esModule: true,
	default: ({ children, href, ...props }) => (
		<a href={href} {...props}>
			{children}
		</a>
	),
}));

jest.mock('framer-motion', () => ({
	AnimatePresence: ({ children }) => children,
	motion: new Proxy(
		{},
		{
			get:
				(_target, prop) =>
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				({ _layout, ...rest }) => {
					const tag =
						typeof prop === 'string' && prop.length > 0
							? prop
							: 'div';
					// отбрасываем layout, чтобы не прокидывать его в DOM
					return React.createElement(tag, rest);
				},
		},
	),
	useAnimation: () => ({
		start: jest.fn(),
		stop: jest.fn(),
	}),
}));
