import * as Yup from 'yup';

import { regexpEmail, regexpNumber, regexpWords } from '@/services/regexp';

export const validationSchema = Yup.object().shape({
	name: Yup.string()
		.required('Обязательно для заполнения')
		.min(4, 'Очень короткое имя')
		.max(25, 'Должно быть не больше 25 символов')
		.matches(regexpWords, {
			message: 'Не используйте цифры',
			excludeEmptyString: true,
		}),
	phone: Yup.string()
		.required('Обязательно для заполнения')
		.matches(regexpNumber, {
			message: 'Неправильный номер телефона',
			excludeEmptyString: true,
		})
		.trim(),
	email: Yup.string().matches(regexpEmail, {
		message: 'Неправильный email',
		excludeEmptyString: true,
	}),
	event: Yup.string()
		.required('Обязательно для заполнения')
		.min(2, 'Опишите подробнее ')
		.max(25, 'Должно быть не больше 25 символов')
		.trim(),
	date: Yup.string().required('Обязательно для заполнения').trim(),
	countPeople: Yup.string().required('Обязательно для заполнения').trim(),
});

export default validationSchema;
