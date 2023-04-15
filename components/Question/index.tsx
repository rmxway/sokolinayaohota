import { FC } from 'react';

import { Flexbox, Space, Title } from '@/components/Layout';

import { Answer, PlusMinus, Wrapper } from './styled';

type QuestionType = {
	answer?: string;
	question?: string;
	id: string;
	type: 'checkbox' | 'radio';
};

export const Question: FC<QuestionType> = ({ answer, question, id, type }) => (
	<Wrapper htmlFor={id}>
		<input name="questions" id={id} type={type} />
		<Flexbox nowrap direction="row" gap={10}>
			<div>
				<Title size="24px" color="brown" className="title">
					{question}
				</Title>
				<Answer>{answer}</Answer>
			</div>
			<Space />
			<PlusMinus />
		</Flexbox>
	</Wrapper>
);

export default Question;
