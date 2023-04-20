import * as Yup from 'yup';

import { regexpEmail, regexpNumber, regexpWords } from '@/services/regexp';

export const validationSchema = Yup.object().shape({
	name: Yup.string()
		.matches(regexpWords, 'Не используйте цифры')
		.min(4, 'Очень короткое имя')
		.max(25, 'Должно быть не больше 25 символов')
		.required('Обязательно для заполнения'),
	email: Yup.string()
		.matches(regexpEmail, 'Неправильный email')
		.required('Обязательно для заполнения'),
	phone: Yup.string()
		.matches(regexpNumber, 'Неправильный номер телефона')
		.trim(),
});

export default validationSchema;
