import {
	regexpEmail,
	regexpFilterNumber,
	regexpNumber,
	regexpPath,
	regexpWords,
} from './regexp';

describe('regexp utilities', () => {
	describe('regexpEmail', () => {
		it('валидирует правильный email', () => {
			expect(regexpEmail.test('test@example.com')).toBe(true);
			expect(regexpEmail.test('user123@domain.co.uk')).toBe(true);
			expect(regexpEmail.test('name.surname@company.org')).toBe(true);
		});

		it('отклоняет неправильный email', () => {
			expect(regexpEmail.test('неправильный-email')).toBe(false);
			expect(regexpEmail.test('test@')).toBe(false);
			expect(regexpEmail.test('@example.com')).toBe(false);
			expect(regexpEmail.test('test.example.com')).toBe(false);
			expect(regexpEmail.test('test@example')).toBe(false);
		});
	});

	describe('regexpWords', () => {
		it('валидирует строки начинающиеся с буквы', () => {
			expect(regexpWords.test('Иван')).toBe(true);
			expect(regexpWords.test('Ivan')).toBe(true);
			expect(regexpWords.test('Александр')).toBe(true);
			expect(regexpWords.test('John')).toBe(true);
		});

		it('отклоняет строки начинающиеся с цифры', () => {
			expect(regexpWords.test('123Иван')).toBe(false);
			expect(regexpWords.test('1Ivan')).toBe(false);
		});

		it('отклоняет строки начинающиеся с пробела', () => {
			expect(regexpWords.test(' Иван')).toBe(false);
		});

		it('отклоняет пустую строку', () => {
			expect(regexpWords.test('')).toBe(false);
		});
	});

	describe('regexpNumber', () => {
		it('валидирует номера телефонов с цифрами, пробелами, скобками и дефисами', () => {
			expect(regexpNumber.test('1234567890')).toBe(true);
			expect(regexpNumber.test('+7 (999) 123-45-67')).toBe(true);
			expect(regexpNumber.test('(999) 123-45-67')).toBe(true);
			expect(regexpNumber.test('999 123 45 67')).toBe(true);
			expect(regexpNumber.test('999-123-45-67')).toBe(true);
		});

		it('отклоняет номера с буквами', () => {
			expect(regexpNumber.test('abc123')).toBe(false);
			expect(regexpNumber.test('123abc')).toBe(false);
		});

		it('отклоняет пустую строку', () => {
			expect(regexpNumber.test('')).toBe(false);
		});
	});

	describe('regexpFilterNumber', () => {
		it('удаляет пробелы, скобки, дефисы и плюсы из номера телефона', () => {
			expect('+7 (999) 123-45-67'.replace(regexpFilterNumber, '')).toBe(
				'79991234567',
			);
			expect('(999) 123-45-67'.replace(regexpFilterNumber, '')).toBe(
				'9991234567',
			);
			expect('999 123 45 67'.replace(regexpFilterNumber, '')).toBe(
				'9991234567',
			);
			expect('999-123-45-67'.replace(regexpFilterNumber, '')).toBe(
				'9991234567',
			);
		});

		it('не изменяет строку без форматирования', () => {
			expect('1234567890'.replace(regexpFilterNumber, '')).toBe(
				'1234567890',
			);
		});

		it('обрабатывает строку только с пробелами', () => {
			expect('   '.replace(regexpFilterNumber, '')).toBe('');
		});
	});

	describe('regexpPath', () => {
		it('находит слова в строке', () => {
			const matches = 'test path string'.match(regexpPath);
			expect(matches).not.toBeNull();
			expect(matches?.length).toBeGreaterThan(0);
		});

		it('работает с путями', () => {
			const matches = '/path/to/file'.match(regexpPath);
			expect(matches).not.toBeNull();
		});

		it('работает с пустой строкой', () => {
			const matches = ''.match(regexpPath);
			expect(matches).toBeNull();
		});
	});
});
