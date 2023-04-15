import { Formik, FormikValues } from 'formik';
import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import * as Yup from 'yup';

import { Flexbox } from '@/components/Layout';
import { ButtonUI, InputUI } from '@/components/ui';
import {
	regexpEmail,
	regexpFilterNumber,
	regexpNumber,
	regexpWords,
} from '@/services/regexp';

type FormOrderProps = {
	name?: string;
};

const validationSchema = Yup.object().shape({
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

const onSubmit = (values: FormikValues) => {
	const { phone } = values;
	const data = { ...values, phone: phone.replace(regexpFilterNumber, '') };
	console.log(data);
};

export const FormOrder: FC<FormOrderProps> = () => (
	<Formik
		initialValues={{ name: '', email: '', phone: '' }}
		validationSchema={validationSchema}
		onSubmit={onSubmit}
		validateOnMount
	>
		{({
			errors,
			touched,
			values,
			handleBlur,
			handleChange,
			handleSubmit,
			isValid,
		}) => (
			<form onSubmit={handleSubmit}>
				<AnimatePresence>
					<Flexbox direction="column">
						<InputUI
							type="text"
							id="name"
							name="name"
							error={
								touched.name && errors.name ? errors.name : null
							}
							placeholder="Имя *"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
						<InputUI
							type="email"
							id="email"
							name="email"
							error={
								touched.email && errors.email
									? errors.email
									: null
							}
							placeholder="Электронная почта *"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						<InputUI
							type="text"
							id="phone"
							name="phone"
							error={
								touched.phone && errors.phone
									? errors.phone
									: null
							}
							placeholder="Телефон"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.phone}
						/>
						<ButtonUI primary type="submit" disabled={!isValid}>
							Отправить
						</ButtonUI>
					</Flexbox>
				</AnimatePresence>
			</form>
		)}
	</Formik>
);

export default FormOrder;
