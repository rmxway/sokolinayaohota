export const getHost = (): string => {
	const win =
		typeof globalThis !== 'undefined'
			? // eslint-disable-next-line @typescript-eslint/no-explicit-any
				(globalThis as any).window
			: undefined;

	if (win?.location?.host) {
		return win.location.host;
	}

	if (process.env.VERCEL_URL) {
		return process.env.VERCEL_URL;
	}
	return `localhost:${process.env.PORT ?? 3000}`;
};
