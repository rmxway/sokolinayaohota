import { createContext } from 'react';

import { CHANGE_MODAL } from './actions';

export type InitialStateType = {
	modal: string | null;
};

export type DispatchType = React.Dispatch<any>;

export const initialState = {
	modal: '',
};

export const AppContext = createContext<{
	state: InitialStateType;
	dispatch: DispatchType;
}>({
	state: initialState,
	dispatch: () => null,
});

export const reducer = (
	state: InitialStateType,
	action: { type: string; payload: string }
) => {
	switch (action.type) {
		case CHANGE_MODAL:
			return {
				...state,
				modal: action.payload,
			};
		default:
			return state;
	}
};
