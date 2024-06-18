import { regexpPath } from './regexp';

export const isDev = process.env.NODE_ENV === 'development';

export const isProd = !isDev;

export const prefixImages = '';

export const isMainPage = (path: string) => path.search(regexpPath) === -1;

type FetchApiType =
	| 'main-page-data'
	| 'gallery-page-data'
	| 'hall-page-data'
	| 'send-user-request'
	| 'send-hall-request'
	| 'error-test';

export const apiUrl = (type: FetchApiType) => `http://localhost:3000/api/${type}`;
