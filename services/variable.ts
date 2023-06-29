import { NextRouter } from 'next/router';

import { regexpPath } from './regexp';

export const isDev = process.env.NODE_ENV === 'development';

export const isProd = !isDev;

export const prefixImages = 'http://sokolinayaohota.ru/resources';

export const isMainPage = (router: NextRouter) =>
	router.asPath.search(regexpPath) === -1;

export const apiUrl = 'http://sokolinayaohota.ru/api';

type FetchApiType =
	| 'main-page-data'
	| 'gallery-page-data'
	| 'hall-page-data'
	| 'send-user-request'
	| 'send-hall-request'
	| 'error-test';

export const fetchApi = (type: FetchApiType) => `${apiUrl}/${type}`;
