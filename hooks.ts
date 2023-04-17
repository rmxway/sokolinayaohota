import { useContext } from 'react';

import { AppContext, DispatchType, InitialStateType } from '@/store/reducers';

export const useStore = (): {
	state: InitialStateType;
	dispatch: DispatchType;
} => {
	const { state, dispatch } = useContext(AppContext);

	return { state, dispatch };
};

export default useStore;
