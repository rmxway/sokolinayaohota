import * as Yup from 'yup';

import { regexpNumber, regexpWords } from '@/services/regexp';

export const validationSchema = Yup.object().shape({
	name: Yup.string()
		.required('Обязательно для заполнения')
		.min(4, 'Очень короткое имя')
		.max(25, 'Должно быть не больше 25 символов')
		.matches(regexpWords, {
			message: 'Не используйте цифры',
			excludeEmptyString: true,
		}),
	email: Yup.string().email('Неправильный email'),
	phone: Yup.string()
		.required('Обязательно для заполнения')
		.matches(regexpNumber, {
			message: 'Неправильный номер телефона',
			excludeEmptyString: true,
		})
		.trim(),
});

export default validationSchema;
