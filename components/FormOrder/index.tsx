'use client';

import { Formik } from 'formik';
import { FC, useState } from 'react';

import { Grid } from '@/components/Layout';
import { ButtonUI, InputUI } from '@/components/ui';
import { regexpFilterNumber } from '@/services/regexp';
import { fadeInOut } from '@/theme/styles/motionAnimations';

import { FinalText, FormStyled } from './styled';
import { validationSchema } from './validationSchema';

type FormOrderProps = {
	fetchUrl?: string;
	name: string;
};

export interface FormData {
	name: string;
	email: string;
	phone: string;
}

export const FormOrder: FC<FormOrderProps> = ({ fetchUrl, name }) => {
	const [error, setError] = useState('');
	const [isComplete, setIsComplete] = useState(false);

	const onSubmit = async (values: FormData) => {
		const { phone } = values;

		const data: FormData = {
			...values,
			phone: phone.replace(regexpFilterNumber, ''),
		};

		try {
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
				<FormStyled
					onSubmit={handleSubmit}
					$fetching={isSubmitting}
					name={name}
				>
					<Grid
						$direction="row"
						$justify="stretch"
						$gap={20}
						variants={fadeInOut}
						animate={isComplete ? 'start' : 'end'}
						key="Flex"
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
							type="text"
							id="phone"
							name="phone"
							icon="phone"
							error={
								touched.phone && errors.phone
									? errors.phone
									: null
							}
							placeholder="Телефон *"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.phone}
						/>
						<InputUI
							type="email"
							id="email"
							name="email"
							icon="mail"
							error={
								touched.email && errors.email
									? errors.email
									: null
							}
							placeholder="Электронная почта"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						<ButtonUI
							$danger
							type="submit"
							disabled={!isValid}
							$w100
						>
							Отправить
						</ButtonUI>
					</Grid>

					<FinalText
						variants={fadeInOut}
						initial="start"
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
};

export default FormOrder;
