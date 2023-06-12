export const isDev = process.env.NODE_ENV === 'development';

export const isProd = !isDev;

export const prefixImages = 'http://sokolinayaohota.ru/resources';

export const apiUrl = 'http://sokolinayaohota.ru/api';

type FetchApiType =
	| 'main-page-data'
	| 'gallery-page-data'
	| 'hall-page-data'
	| 'send-user-request'
	| 'send-hall-request'
	| 'error-test';

export const fetchApi = (type: FetchApiType) => `${apiUrl}/${type}`;
