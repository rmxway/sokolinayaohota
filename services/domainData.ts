/**
 * Возвращает текущий хост (hostname:port).
 * На клиенте — из window.location, на сервере — из env (VERCEL_URL или localhost:PORT).
 */
export const getHost = (): string => {
	if (typeof window !== 'undefined') {
		return window.location.host;
	}
	if (process.env.VERCEL_URL) {
		return process.env.VERCEL_URL;
	}
	return `localhost:${process.env.PORT ?? 3000}`;
};
