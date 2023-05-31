import { FC, useState } from 'react';

import { Grid, Title } from '@/components/Layout';
import { QuestionType } from '@/mock/questions';

import { Answer, PlusMinus, Wrapper } from './styled';

export const Question: FC<QuestionType> = ({ answer, question, id }) => {
	const [checked, setChecked] = useState(false);

	return (
		<Wrapper htmlFor={id} layout>
			<input
				name="questions"
				id={id}
				type="checkbox"
				onChange={() => setChecked((prev) => !prev)}
			/>

			<Grid direction="column" gap={20}>
				<Title color="brown">{question}</Title>
				<PlusMinus />
			</Grid>
			<Answer
				animate={{
					height: checked ? 'auto' : 0,
					opacity: checked ? 1 : 0,
					marginTop: checked ? 20 : 0,
					transition: {
						duration: 0.2,
						type: 'spring',
						stiffness: 150,
						damping: 20,
					},
				}}
			>
				{answer}
			</Answer>
		</Wrapper>
	);
};

export default Question;
