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

const getBaseUrl = () => {
	if (typeof window !== 'undefined') {
		return '';
	}
	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}
	return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const apiUrl = (type: FetchApiType) =>
	`${getBaseUrl()}/api/${type}`;
