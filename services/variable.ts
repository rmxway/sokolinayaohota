export const isDev = process.env.NODE_ENV;

export const isProd = !isDev;

export const apiUrl = 'http://sokolinayaohota.ru/api';

type FetchApiType = 'faqs' | 'advantages' | 'main-slides' | 'main-page-data' | 'send-user-request';

export const fetchApi = (type: FetchApiType) => `${apiUrl}/${type}`;
