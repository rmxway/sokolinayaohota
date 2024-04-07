import { FC } from 'react';

import { QuestionType } from '@/@types/types';
import { ImageBackground, Question } from '@/components';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Container, Flexbox, Title } from '@/components/Layout';
import imageBack from '@/public/assets/img/questions.jpg';

import { Wrapper } from './styled';

type Props = {
	data: QuestionType[] | undefined;
	error?: string;
};

export const Questions: FC<Props> = ({ data, error }) => (
	<Wrapper>
		<Container $grid $direction="row" $gap={40}>
			<Title color="disabled">Частые вопросы</Title>
			{data?.length ? (
				<Flexbox $direction="column">
					{data.map((question) => (
						<Question
							key={question.id}
							id={question.id}
							question={question.question}
							answer={question.answer}
						/>
					))}
				</Flexbox>
			) : (
				<ErrorMessage message={error} />
			)}
		</Container>
		<ImageBackground image={imageBack} quality={20} />
	</Wrapper>
);

export default Questions;
