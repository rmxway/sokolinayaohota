export const isDev = process.env.NODE_ENV === 'development';

export const isProd = !isDev;

export const baseName = '';

export const prefixImages = baseName + '';

export const protocol = isDev ? 'http' : 'https';
