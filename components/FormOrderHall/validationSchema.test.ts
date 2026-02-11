import { validationSchema } from './validationSchema';

describe('FormOrderHall validationSchema', () => {
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

	describe('event field', () => {
		it('валидирует обязательное поле', async () => {
			await expect(
				validationSchema.validateAt('event', { event: '' }),
			).rejects.toThrow('Обязательно для заполнения');
		});

		it('валидирует минимальную длину', async () => {
			await expect(
				validationSchema.validateAt('event', { event: 'А' }),
			).rejects.toThrow('Опишите подробнее ');
		});

		it('валидирует максимальную длину', async () => {
			const longEvent = 'А'.repeat(26);
			await expect(
				validationSchema.validateAt('event', { event: longEvent }),
			).rejects.toThrow('Должно быть не больше 25 символов');
		});

		it('принимает валидное событие', async () => {
			await expect(
				validationSchema.validateAt('event', { event: 'Свадьба' }),
			).resolves.toBe('Свадьба');
		});

		it('удаляет пробелы в начале и конце', async () => {
			const result = await validationSchema.validateAt('event', {
				event: ' Свадьба ',
			});
			expect(result).toBe('Свадьба');
		});
	});

	describe('date field', () => {
		it('валидирует обязательное поле', async () => {
			await expect(
				validationSchema.validateAt('date', { date: '' }),
			).rejects.toThrow('Обязательно для заполнения');
		});

		it('принимает валидную дату', async () => {
			await expect(
				validationSchema.validateAt('date', { date: '2024-12-31' }),
			).resolves.toBe('2024-12-31');
		});

		it('удаляет пробелы в начале и конце', async () => {
			const result = await validationSchema.validateAt('date', {
				date: ' 2024-12-31 ',
			});
			expect(result).toBe('2024-12-31');
		});
	});

	describe('countPeople field', () => {
		it('валидирует обязательное поле', async () => {
			await expect(
				validationSchema.validateAt('countPeople', { countPeople: '' }),
			).rejects.toThrow('Обязательно для заполнения');
		});

		it('принимает валидное количество людей', async () => {
			await expect(
				validationSchema.validateAt('countPeople', {
					countPeople: '50',
				}),
			).resolves.toBe('50');
		});

		it('удаляет пробелы в начале и конце', async () => {
			const result = await validationSchema.validateAt('countPeople', {
				countPeople: ' 50 ',
			});
			expect(result).toBe('50');
		});
	});

	describe('full form validation', () => {
		it('валидирует всю форму с валидными данными', async () => {
			const validData = {
				name: 'Иван',
				phone: '1234567890',
				email: 'test@example.com',
				event: 'Свадьба',
				date: '2024-12-31',
				countPeople: '50',
			};
			await expect(validationSchema.validate(validData)).resolves.toEqual(
				{
					name: 'Иван',
					phone: '1234567890',
					email: 'test@example.com',
					event: 'Свадьба',
					date: '2024-12-31',
					countPeople: '50',
				},
			);
		});

		it('валидирует всю форму без email', async () => {
			const validData = {
				name: 'Иван',
				phone: '1234567890',
				email: '',
				event: 'Свадьба',
				date: '2024-12-31',
				countPeople: '50',
			};
			await expect(validationSchema.validate(validData)).resolves.toEqual(
				{
					name: 'Иван',
					phone: '1234567890',
					email: '',
					event: 'Свадьба',
					date: '2024-12-31',
					countPeople: '50',
				},
			);
		});

		it('отклоняет форму с невалидными данными', async () => {
			const invalidData = {
				name: 'Аб',
				phone: 'abc',
				email: 'неправильный-email',
				event: '',
				date: '',
				countPeople: '',
			};
			await expect(
				validationSchema.validate(invalidData),
			).rejects.toThrow();
		});
	});
});
