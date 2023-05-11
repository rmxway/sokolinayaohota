import { FC, useState } from 'react';

import { Grid, Space, Title } from '@/components/Layout';

import { Answer, PlusMinus, Wrapper } from './styled';

type QuestionType = {
	answer?: string;
	question?: string;
	id: string;
	type: 'checkbox' | 'radio';
};

export const Question: FC<QuestionType> = ({ answer, question, id, type }) => {
	const [checked, setChecked] = useState(false);

	return (
		<Wrapper htmlFor={id} layout>
			<input
				name="questions"
				id={id}
				type={type}
				onChange={() => setChecked((prev) => !prev)}
			/>

			<Grid direction="column" gap={10}>
				<div>
					<Title color="brown">
						{question}
					</Title>

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
				</div>
				<Space />
				<PlusMinus />
			</Grid>
		</Wrapper>
	);
};

export default Question;
