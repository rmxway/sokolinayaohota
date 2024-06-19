'use client';

import {
	createContext,
	FC,
	PropsWithChildren,
	useMemo,
	useReducer,
} from 'react';

import { CHANGE_MODAL, CHANGE_TOP_PANEL } from './actions';

export type InitialStateType = {
	modal: string | null;
	topPanel: string;
	year: number;
};

export type DispatchType = React.Dispatch<{ type: string; payload: string }>;

export const initialState = {
	modal: '',
	topPanel: '',
	year: new Date().getFullYear(),
};

type InitialContextType = {
	state: InitialStateType;
	dispatch: DispatchType;
};

export const AppContext = createContext<InitialContextType>({
	state: initialState,
	dispatch: () => null,
});

export const reducer = (
	state: InitialStateType,
	action: { type: string; payload: string },
) => {
	switch (action.type) {
		case CHANGE_MODAL:
			return {
				...state,
				modal: action.payload,
			};
		case CHANGE_TOP_PANEL:
			return {
				...state,
				topPanel: action.payload,
			};
		default:
			return state;
	}
};

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
