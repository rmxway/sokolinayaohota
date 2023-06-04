import * as Yup from 'yup';

import { regexpNumber, regexpWords } from '@/services/regexp';

export const validationSchema = Yup.object().shape({
	name: Yup.string()
		.matches(regexpWords, 'Не используйте цифры')
		.min(4, 'Очень короткое имя')
		.max(25, 'Должно быть не больше 25 символов')
		.required('Обязательно для заполнения'),
	phone: Yup.string()
		.matches(regexpNumber, 'Неправильный номер телефона')
		.required('Обязательно для заполнения')
		.trim(),
	event: Yup.string()
		.min(2, 'Опишите подробнее ')
		.max(25, 'Должно быть не больше 25 символов')
		.required('Обязательно для заполнения')
		.trim(),
	date: Yup.string().trim(),
	countPeople: Yup.string().required('Обязательно для заполнения').trim(),
});

export default validationSchema;
