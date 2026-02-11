import { useContext, useEffect } from 'react';

import { AppContext, DispatchType, InitialStateType } from '@/store/reducers';

export const useStore = (): {
	state: InitialStateType;
	dispatch: DispatchType;
} => {
	const { state, dispatch } = useContext(AppContext);

	return { state, dispatch };
};

export const useScrollLock = (isLocked: boolean): void => {
	useEffect(() => {
		if (typeof document === 'undefined') {
			return undefined;
		}

		const { body } = document;

		if (isLocked) {
			body.classList.add('scroll-locked');
		} else {
			body.classList.remove('scroll-locked');
		}

		return () => {
			body.classList.remove('scroll-locked');
		};
	}, [isLocked]);
};

export default useStore;
