import { Formik, FormikValues } from 'formik';
import { FC, memo, useState } from 'react';
import * as Yup from 'yup';

import { Flexbox } from '@/components/Layout';
import { ButtonUI, InputUI } from '@/components/ui';
import {
	regexpEmail,
	regexpFilterNumber,
	regexpNumber,
	regexpWords,
} from '@/services/regexp';
import { fadeInOut } from '@/theme/styles/motionAnimations';

import { FinalText, FormStyled } from './styled';

type FormOrderProps = {
	fetchUrl?: string;
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

// temp function
const sleep = (ms: number) =>
	// eslint-disable-next-line no-promise-executor-return
	new Promise((r): NodeJS.Timeout => setTimeout(r, ms));

export const FormOrder: FC<FormOrderProps> = memo(({ fetchUrl }) => {
	const [error, setError] = useState('');
	const [isComplete, setIsComplete] = useState(false);

	const onSubmit = async (values: FormikValues) => {
		const { phone } = values;

		const data = {
			...values,
			phone: phone.replace(regexpFilterNumber, ''),
		};

		try {
			await sleep(1000);
			console.log(data);
		} catch (e) {
			console.log(e);
			setError((e as Error).message);
		} finally {
			setIsComplete((prev) => !prev);
		}

		// try {
		// 	await sleep(1000);

		// 	const resp = await fetch(fetchUrl, {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify(data),
		// 	});
		// 	// const json = await resp.json();
		// 	console.log(data);
		// } catch (e) {
		// 	setError('Что то пошло не так...');
		// } finally {
		// 	setIsComplete((prev) => !prev);
		// }
	};

	return (
		<Formik
			initialValues={{ name: '', email: '', phone: '' }}
			validationSchema={validationSchema}
			onSubmit={(values) => onSubmit(values)}
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
				isSubmitting,
			}) => (
				<FormStyled onSubmit={handleSubmit} $fetching={isSubmitting}>
					<Flexbox
						direction="column"
						variants={fadeInOut}
						animate={isComplete ? 'start' : 'end'}
						key="Flex"
						layout
					>
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

					<FinalText
						variants={fadeInOut}
						animate={isComplete ? 'end' : 'start'}
						$valid={!!error}
					>
						{error || (
							<>
								Спасибо!
								<br />
								В ближайшее время <br />с вами свяжется наш
								менеджер.
							</>
						)}
					</FinalText>
				</FormStyled>
			)}
		</Formik>
	);
});

export default FormOrder;
