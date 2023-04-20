import { Formik, FormikValues } from 'formik';
import { FC, memo, useState } from 'react';

import { Flexbox } from '@/components/Layout';
import { ButtonUI, InputUI } from '@/components/ui';
import { regexpFilterNumber } from '@/services/regexp';
import { fadeInOut } from '@/theme/styles/motionAnimations';

import { FinalText, FormStyled } from './styled';
import { validationSchema } from './validationSchema';

type FormOrderProps = {
	fetchUrl?: string;
};

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
			await new Promise((r) => {
				setTimeout(r, 1000);
			});

			if (fetchUrl) {
				await fetch(fetchUrl, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});
			}
		} catch (e) {
			setError((e as Error).message);
		} finally {
			setIsComplete((prev) => !prev);
		}
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
