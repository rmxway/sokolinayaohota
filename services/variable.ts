export const isDev = process.env.NODE_ENV;

export const isProd = !isDev;

export const apiUrl = isDev ? 'http://localhost/api' : 'api';

type FetchApiType = 'faqs' | 'advantages' | 'main-slides' | 'send-user-request';

export const fetchApi = (type: FetchApiType) => `${apiUrl}/${type}`;
