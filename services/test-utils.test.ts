import { customRender } from '@/services/test-utils';

describe('test-utils', () => {
	it('экспортирует custom render', () => {
		expect(typeof customRender).toBe('function');
	});
});
