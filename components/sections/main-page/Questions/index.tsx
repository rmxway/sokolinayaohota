import { FC } from 'react';

import { ImageBackground, Question } from '@/components';
import { Container, Flexbox, Title } from '@/components/Layout';
import { questions } from '@/mock/questions';
import imageBack from '@/public/assets/img/questions.jpg';

import { Wrapper } from './styled';

const typeInput = 'checkbox';

export const Questions: FC = () => (
	<Wrapper>
		<Container>
			<Title color="disabled">Частые вопросы</Title>
			<Flexbox direction="column" style={{ marginTop: '40px' }}>
				{questions.map((question) => (
					<Question
						key={question.id}
						id={question.id}
						type={typeInput}
						question={question.question}
						answer={question.answer}
					/>
				))}
			</Flexbox>
		</Container>
		<ImageBackground image={imageBack} quality={20} />
	</Wrapper>
);

export default Questions;
