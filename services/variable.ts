export const isDev = process.env.NODE_ENV;

export const isProd = !isDev;

export const apiUrl = isDev ? 'http://localhost:5243/api' : '/api';
