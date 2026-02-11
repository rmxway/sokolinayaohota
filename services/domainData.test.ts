import { getHost } from './domainData';

describe('domainData', () => {
	describe('getHost', () => {
		it('возвращает host из window.location.host в клиентской среде (jsdom)', () => {
			expect(getHost()).toBe(window.location.host);
		});
	});
});
