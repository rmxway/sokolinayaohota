import { renderHook } from '@testing-library/react';

import { useScrollLock } from './hooks';

describe('useScrollLock', () => {
	beforeEach(() => {
		document.body.classList.remove('scroll-locked');
	});

	it('добавляет класс scroll-locked к body когда isLocked=true', () => {
		renderHook(() => useScrollLock(true));
		expect(document.body.classList.contains('scroll-locked')).toBe(true);
	});

	it('удаляет класс scroll-locked когда isLocked=false', () => {
		const { rerender } = renderHook(
			({ isLocked }) => useScrollLock(isLocked),
			{
				initialProps: { isLocked: true },
			},
		);
		expect(document.body.classList.contains('scroll-locked')).toBe(true);

		rerender({ isLocked: false });
		expect(document.body.classList.contains('scroll-locked')).toBe(false);
	});

	it('удаляет класс scroll-locked при размонтировании компонента', () => {
		const { unmount } = renderHook(() => useScrollLock(true));
		expect(document.body.classList.contains('scroll-locked')).toBe(true);

		unmount();
		expect(document.body.classList.contains('scroll-locked')).toBe(false);
	});

	it('обновляет класс при изменении isLocked', () => {
		const { rerender } = renderHook(
			({ isLocked }) => useScrollLock(isLocked),
			{
				initialProps: { isLocked: false },
			},
		);
		expect(document.body.classList.contains('scroll-locked')).toBe(false);

		rerender({ isLocked: true });
		expect(document.body.classList.contains('scroll-locked')).toBe(true);

		rerender({ isLocked: false });
		expect(document.body.classList.contains('scroll-locked')).toBe(false);
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

	it('не добавляет класс несколько раз при повторных вызовах с isLocked=true', () => {
		const { rerender } = renderHook(
			({ isLocked }) => useScrollLock(isLocked),
			{
				initialProps: { isLocked: true },
			},
		);
		expect(document.body.classList.contains('scroll-locked')).toBe(true);

		rerender({ isLocked: true });
		expect(document.body.classList.contains('scroll-locked')).toBe(true);
		expect(
			Array.from(document.body.classList).filter(
				(c) => c === 'scroll-locked',
			).length,
		).toBe(1);
	});
});
