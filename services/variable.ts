import { protocol } from './constants';
import { getHost } from './domainData';
import { regexpPath } from './regexp';

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
