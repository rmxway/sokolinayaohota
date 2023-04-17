import {
	createContext,
	FC,
	PropsWithChildren,
	useMemo,
	useReducer,
} from 'react';

import { CHANGE_MODAL } from './actions';

export type InitialStateType = {
	modal: string | null;
};

export type DispatchType = React.Dispatch<{ type: string; payload: string }>;

export const initialState = {
	modal: '',
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

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
