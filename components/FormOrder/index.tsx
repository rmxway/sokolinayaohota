import { Formik } from 'formik';
import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import * as Yup from 'yup';

import { Flexbox } from '@/components/Layout';
import { ButtonUI, InputUI } from '@/components/ui';

type FormOrderProps = {
	name?: string;
};

const regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
const regexWords = /^[а-яА-Яa-zA-Z]/;
const regexNumber = /^[0-9]+$/;

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.matches(regexWords, 'Не используйте цифры')
		.min(4, 'Очень короткое имя')
		.max(25, 'Должно быть не больше 25 символов')
		.required('Обязательно для заполнения'),
	email: Yup.string()
		.matches(regexEmail, 'Неправильный email')
		.required('Обязательно для заполнения'),
	phone: Yup.string()
		.matches(regexNumber, 'Неправильный номер телефона')
		.min(10, 'Неправильный номер телефона')
		.required('Обязательно для заполнения'),
});

export const FormOrder: FC<FormOrderProps> = () => (
	<Formik
		initialValues={{ name: '', email: '', phone: '' }}
		validationSchema={validationSchema}
		onSubmit={(values) => console.log(values)}
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
							maxLength={10}
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
