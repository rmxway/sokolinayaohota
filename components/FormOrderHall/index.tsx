import { Formik, FormikValues } from 'formik';
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

export const FormOrderHall: FC<FormOrderProps> = ({ fetchUrl, name }) => {
	const [error, setError] = useState('');
	const [isComplete, setIsComplete] = useState(false);

	const onSubmit = async (values: FormikValues) => {
		const { phone } = values;

		const data = {
			phone: phone.replace(regexpFilterNumber, ''),
			...values,
			hall: name,
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

	const initialValues = {
		name: '',
		phone: '',
		event: '',
		date: '',
		countPeople: '',
	};

	return (
		<Formik
			initialValues={initialValues}
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
						direction="row"
						gap={20}
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
							id="event"
							name="event"
							icon="heart"
							error={
								touched.event && errors.event
									? errors.event
									: null
							}
							placeholder="Событие"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.event}
						/>
						<InputUI
							type="text"
							id="date"
							name="date"
							icon="time"
							error={
								touched.date && errors.date ? errors.date : null
							}
							placeholder="Дата"
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
						<ButtonUI danger type="submit" disabled={!isValid} w100>
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

export default FormOrderHall;
