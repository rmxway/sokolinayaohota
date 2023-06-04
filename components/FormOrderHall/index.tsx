import { Formik, FormikValues, useFormikContext } from 'formik';
import { useRouter } from 'next/router';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

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

type AutoResetFormProps = {
	setIsComplete: Dispatch<SetStateAction<boolean>>;
	isComplete: boolean;
};

const AutoResetForm: FC<AutoResetFormProps> = ({
	setIsComplete,
	isComplete,
}) => {
	const router = useRouter();
	const { resetForm, validateForm } = useFormikContext();

	useEffect(() => {
		const handlePageChange = (lastPath: string) => {
			if (lastPath === router.asPath || !isComplete) return;
			resetForm();
			validateForm();
			setIsComplete(false);
		};
		router.events.on('routeChangeStart', handlePageChange);

		return () => {
			router.events.off('routeChangeStart', handlePageChange);
		};
	}, [isComplete, resetForm, router, setIsComplete, validateForm]);

	return null;
};

export const FormOrderHall = ({ fetchUrl, name }: FormOrderProps) => {
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
						direction="row"
						gap={20}
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

						<p>* Обязательное поле</p>
					</Grid>

					<AutoResetForm
						setIsComplete={setIsComplete}
						isComplete={isComplete}
					/>

					{isComplete && (
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
