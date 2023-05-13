export const CHANGE_MODAL = 'CHANGE_MODAL';
export const CHANGE_TOP_PANEL = 'CHANGE_TOP_PANEL';

export const actionChangeModal = (payload: string) => ({
	type: CHANGE_MODAL,
	payload,
});

export const actionChangeTopPanel = (payload: string) => ({
	type: CHANGE_TOP_PANEL,
	payload,
});
