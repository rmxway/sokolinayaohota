import { FC } from 'react';

import { Container, Title } from '@/components/Layout';
import { advantages } from '@/mock/advantages';

import { Advantages, Icon, Item, Wrapper } from './styled';

const WhyAreWe: FC = () => (
	<Wrapper>
		<Container flex direction="column" gap={40}>
			<Title color="disabled">Почему мы?</Title>
			<Advantages>
				{advantages.map((item) => (
					<Item key={item.title}>
						<Icon>
							<i className={`icofont icofont-${item.icon}`} />
						</Icon>
						<div>{item.title}</div>
						<span>
							{item.description?.map((desc) => (
								<p key={desc}>{desc}</p>
							))}
							{item.list && (
								<ul>
									{item.list.map((list) => (
										<li key={list}>{list}</li>
									))}
								</ul>
							)}
						</span>
					</Item>
				))}
			</Advantages>
		</Container>
	</Wrapper>
);

export { WhyAreWe };
export default WhyAreWe;
