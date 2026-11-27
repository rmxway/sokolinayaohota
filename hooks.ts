import { useContext, useEffect, useState } from 'react';

import { AppContext, DispatchType, InitialStateType } from '@/store/reducers';

import { BreakpointName, jsBreakpoints } from './theme';

export const useStore = (): {
	state: InitialStateType;
	dispatch: DispatchType;
} => {
	const { state, dispatch } = useContext(AppContext);

	return { state, dispatch };
};

let scrollbarWidthSet = false;

const getScrollbarWidth = (): number => {
	const el = document.createElement('div');
	el.style.cssText =
		'visibility:hidden;overflow:scroll;position:absolute;width:100px;height:100px';
	document.body.appendChild(el);
	const width = el.offsetWidth - el.clientWidth;
	el.remove();
	return width;
};

/**
 * Блокирует скролл страницы без скачка (компенсирует ширину скроллбара через padding-right)
 * @param locked - true для блокировки, false для разблокировки
 */
export const useScrollLock = (locked: boolean) => {
	useEffect(() => {
		if (typeof document === 'undefined') return;

		// Устанавливаем CSS-переменную один раз (измерение через элемент со скроллом)
		if (!scrollbarWidthSet) {
			const scrollbarWidth = getScrollbarWidth();
			document.documentElement.style.setProperty(
				'--scrollbar-width',
				`${scrollbarWidth}px`,
			);
			scrollbarWidthSet = true;
		}

		// Переключаем класс
		if (locked) {
			document.documentElement.classList.add('scroll-lock');
			document.body.classList.add('scroll-lock');
		} else {
			document.documentElement.classList.remove('scroll-lock');
			document.body.classList.remove('scroll-lock');
		}

		return () => {
			document.body.classList.remove('scroll-lock');
		};
	}, [locked]);
};

export const useBreakpointChange = () => {
	const [breakpoint, setBreakpoint] = useState<BreakpointName>('lg');
	useEffect(() => {
		const resize = () => {
			const width = window.innerWidth;
			Object.entries(jsBreakpoints).forEach(([key, val]) => {
				if (+val >= width) {
					setBreakpoint(key as BreakpointName);
				}
			});
		};
		window.addEventListener('resize', resize);

		return () => window.removeEventListener('resize', resize);
	}, []);
	return breakpoint;
};
