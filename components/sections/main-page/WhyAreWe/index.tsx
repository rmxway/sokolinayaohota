import { FC } from 'react';

import { Icon } from '@/components';
import { Container, Title } from '@/components/Layout';
import { advantages } from '@/mock/advantages';

import { Advantages, IconWrapper, Item, Wrapper } from './styled';

export const WhyAreWe: FC = () => (
	<Wrapper>
		<Container flex direction="column" gap={40}>
			<Title color="disabled">Почему мы?</Title>
			<Advantages>
				{advantages.map(({ title, icon, description, list }) => (
					<Item key={title}>
						<IconWrapper>
							<Icon icon={`${icon.toString()}`} size={52} />
						</IconWrapper>
						<div>{title}</div>
						<span>
							{description?.map((desc) => (
								<p key={desc}>{desc}</p>
							))}
							{list && (
								<ul>
									{list.map((item) => (
										<li key={item}>{item}</li>
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

export default WhyAreWe;
