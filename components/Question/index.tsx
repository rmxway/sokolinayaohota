import { FC, useState } from 'react';

import { Flexbox, Space, Title } from '@/components/Layout';

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

			<Flexbox $noWrap direction="row" gap={10}>
				<div>
					<Title size="24px" color="brown" className="title">
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
			</Flexbox>
		</Wrapper>
	);
};

export default Question;
