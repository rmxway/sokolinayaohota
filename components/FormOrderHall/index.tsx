import { Formik } from 'formik';
import { useState } from 'react';

import { Grid } from '@/components/Layout';
import { ButtonUI, InputUI } from '@/components/ui';
import { SelectUI } from '@/components/ui/Select';
import { regexpFilterNumber } from '@/services/regexp';
import { fadeInOut } from '@/theme/styles/motionAnimations';

import { FinalText, FormStyled } from './styled';
import { validationSchema } from './validationSchema';

type FormOrderProps = {
	fetchUrl?: string;
	name: string;
};

interface FormHall {
	name: string;
	phone: string;
	email: string;
	event: string;
	date: string;
	countPeople: string;
}

export interface DataHall extends FormHall {
	hall: string;
}

export const FormOrderHall = ({ fetchUrl, name }: FormOrderProps) => {
	const [error, setError] = useState('');
	const [isComplete, setIsComplete] = useState(false);

	const onSubmit = async (values: FormHall) => {
		const { phone } = values;

		const data: DataHall = {
			...values,
			phone: phone.replace(regexpFilterNumber, ''),
			hall: name,
		};

		try {
			if (fetchUrl) {
				const resp = fetch(fetchUrl, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});

				await resp.then((res) => {
					if (!res.ok) setError(res.statusText);
				});
			}
		} catch (e) {
			setError((e as Error).message);
		} finally {
			setIsComplete((prev) => !prev);
		}
	};

	const initialValues = {
		name: '',
		phone: '',
		email: '',
		event: '',
		date: '',
		countPeople: '',
	};

	return (
		<Formik
			{...{ initialValues, onSubmit, validationSchema }}
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
						$gap={20}
						variants={fadeInOut}
						animate={isComplete ? 'start' : 'end'}
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
							type="text"
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
						<SelectUI
							type="text"
							id="event"
							name="event"
							values={['Свадьба', 'День рождения', 'Вечеринка']}
							placeholder="Событие *"
						/>
						<InputUI
							type="text"
							id="date"
							name="date"
							icon="time"
							error={
								touched.date && errors.date ? errors.date : null
							}
							placeholder="Дата *"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.date}
						/>
						<InputUI
							type="text"
							id="countPeople"
							name="countPeople"
							icon="star"
							error={
								touched.countPeople && errors.countPeople
									? errors.countPeople
									: null
							}
							placeholder="Кол-во гостей *"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.countPeople}
						/>
					</Grid>
					{!isComplete ? (
						<>
							<br />
							<p>* Обязательное поле</p>
							<ButtonUI
								$danger
								$w100
								$icon="arrow"
								type="submit"
								disabled={!isValid}
							>
								Отправить
							</ButtonUI>
						</>
					) : (
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
					)}
				</FormStyled>
			)}
		</Formik>
	);
};

export default FormOrderHall;
