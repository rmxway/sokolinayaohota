import { useReducer } from 'react';

import {
	DispatchType,
	initialState,
	InitialStateType,
	reducer,
} from '@/store/reducers';

export const useStore = (): {
	state: InitialStateType;
	dispatch: DispatchType;
} => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return { state, dispatch };
};

export default useStore;
