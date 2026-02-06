import { getHost } from './domainData';
import { regexpPath } from './regexp';

export const isDev = process.env.NODE_ENV === 'development';

export const isProd = !isDev;

export const prefixImages = '';

export const protocol = isDev ? 'http' : 'https';

export const isMainPage = (path: string) => path.search(regexpPath) === -1;

type FetchApiType =
	| 'main-page-data'
	| 'gallery-page-data'
	| 'hall-page-data'
	| 'send-user-request'
	| 'send-hall-request'
	| 'error-test';

export const apiUrl = (type: FetchApiType) =>
	`${protocol}://${getHost()}/api/${type}`;
