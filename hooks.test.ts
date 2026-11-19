import { renderHook } from '@testing-library/react';

import { useScrollLock } from './hooks';

describe('useScrollLock', () => {
	beforeEach(() => {
		document.body.classList.remove('scroll-lock');
	});

	it('добавляет класс scroll-lock к body когда locked=true', () => {
		renderHook(() => useScrollLock(true));
		expect(document.body.classList.contains('scroll-lock')).toBe(true);
	});

	it('удаляет класс scroll-lock когда locked=false', () => {
		const { rerender } = renderHook(
			({ locked }) => useScrollLock(locked),
			{
				initialProps: { locked: true },
			},
		);
		expect(document.body.classList.contains('scroll-lock')).toBe(true);

		rerender({ locked: false });
		expect(document.body.classList.contains('scroll-lock')).toBe(false);
	});

	it('удаляет класс scroll-lock при размонтировании компонента', () => {
		const { unmount } = renderHook(() => useScrollLock(true));
		expect(document.body.classList.contains('scroll-lock')).toBe(true);

		unmount();
		expect(document.body.classList.contains('scroll-lock')).toBe(false);
	});

	it('обновляет класс при изменении locked', () => {
		const { rerender } = renderHook(
			({ locked }) => useScrollLock(locked),
			{
				initialProps: { locked: false },
			},
		);
		expect(document.body.classList.contains('scroll-lock')).toBe(false);

		rerender({ locked: true });
		expect(document.body.classList.contains('scroll-lock')).toBe(true);

		rerender({ locked: false });
		expect(document.body.classList.contains('scroll-lock')).toBe(false);
	});

	it('не падает когда document undefined (SSR)', () => {
		const originalDocument = global.document;
		// @ts-expect-error - временно удаляем document для теста SSR
		delete global.document;

		expect(() => {
			renderHook(() => useScrollLock(true));
		}).not.toThrow();

		global.document = originalDocument;
	});

	it('не добавляет класс несколько раз при повторных вызовах с locked=true', () => {
		const { rerender } = renderHook(
			({ locked }) => useScrollLock(locked),
			{
				initialProps: { locked: true },
			},
		);
		expect(document.body.classList.contains('scroll-lock')).toBe(true);

		rerender({ locked: true });
		expect(document.body.classList.contains('scroll-lock')).toBe(true);
		expect(
			Array.from(document.body.classList).filter(
				(c) => c === 'scroll-lock',
			).length,
		).toBe(1);
	});
});
