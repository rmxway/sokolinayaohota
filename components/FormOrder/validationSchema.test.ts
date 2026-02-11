import { validationSchema } from './validationSchema';

describe('FormOrder validationSchema', () => {
	describe('name field', () => {
		it('валидирует обязательное поле', async () => {
			await expect(
				validationSchema.validateAt('name', { name: '' }),
			).rejects.toThrow('Обязательно для заполнения');
		});

		it('валидирует минимальную длину', async () => {
			await expect(
				validationSchema.validateAt('name', { name: 'Аб' }),
			).rejects.toThrow('Очень короткое имя');
		});

		it('валидирует максимальную длину', async () => {
			const longName = 'А'.repeat(26);
			await expect(
				validationSchema.validateAt('name', { name: longName }),
			).rejects.toThrow('Должно быть не больше 25 символов');
		});

		it('валидирует что имя содержит только буквы', async () => {
			await expect(
				validationSchema.validateAt('name', { name: 'Иван123' }),
			).rejects.toThrow('Не используйте цифры');
		});

		it('принимает валидное имя', async () => {
			await expect(
				validationSchema.validateAt('name', { name: 'Иван' }),
			).resolves.toBe('Иван');
		});

		it('принимает имя длиной 4 символа', async () => {
			await expect(
				validationSchema.validateAt('name', { name: 'Иван' }),
			).resolves.toBe('Иван');
		});

		it('принимает имя длиной 25 символов', async () => {
			const name = 'А'.repeat(25);
			await expect(
				validationSchema.validateAt('name', { name }),
			).resolves.toBe(name);
		});
	});

	describe('phone field', () => {
		it('валидирует обязательное поле', async () => {
			await expect(
				validationSchema.validateAt('phone', { phone: '' }),
			).rejects.toThrow('Обязательно для заполнения');
		});

		it('валидирует формат телефона', async () => {
			await expect(
				validationSchema.validateAt('phone', { phone: 'abc' }),
			).rejects.toThrow('Неправильный номер телефона');
		});

		it('принимает валидный номер телефона', async () => {
			await expect(
				validationSchema.validateAt('phone', { phone: '1234567890' }),
			).resolves.toBe('1234567890');
		});

		it('принимает номер телефона с пробелами и скобками', async () => {
			await expect(
				validationSchema.validateAt('phone', {
					phone: '+7 (999) 123-45-67',
				}),
			).resolves.toBe('+7 (999) 123-45-67');
		});

		it('удаляет пробелы в начале и конце', async () => {
			const result = await validationSchema.validateAt('phone', {
				phone: ' 1234567890 ',
			});
			expect(result).toBe('1234567890');
		});
	});

	describe('email field', () => {
		it('не требует email (опциональное поле)', async () => {
			await expect(
				validationSchema.validateAt('email', { email: '' }),
			).resolves.toBe('');
		});

		it('валидирует формат email', async () => {
			await expect(
				validationSchema.validateAt('email', {
					email: 'неправильный-email',
				}),
			).rejects.toThrow('Неправильный email');
		});

		it('принимает валидный email', async () => {
			await expect(
				validationSchema.validateAt('email', {
					email: 'test@example.com',
				}),
			).resolves.toBe('test@example.com');
		});
	});

	describe('full form validation', () => {
		it('валидирует всю форму с валидными данными', async () => {
			const validData = {
				name: 'Иван',
				phone: '1234567890',
				email: 'test@example.com',
			};
			await expect(validationSchema.validate(validData)).resolves.toEqual(
				validData,
			);
		});

		it('валидирует всю форму без email', async () => {
			const validData = {
				name: 'Иван',
				phone: '1234567890',
				email: '',
			};
			await expect(validationSchema.validate(validData)).resolves.toEqual(
				{
					name: 'Иван',
					phone: '1234567890',
					email: '',
				},
			);
		});

		it('отклоняет форму с невалидными данными', async () => {
			const invalidData = {
				name: 'Аб',
				phone: 'abc',
				email: 'неправильный-email',
			};
			await expect(
				validationSchema.validate(invalidData),
			).rejects.toThrow();
		});
	});
});
