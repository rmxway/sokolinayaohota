import { FC } from 'react';

import { Icon } from '@/components';
import { Container, Grid, Title } from '@/components/Layout';
import { advantages } from '@/mock/advantages';

import { IconWrapper, Item, Wrapper } from './styled';

export const WhyAreWe: FC = () => (
	<Wrapper>
		<Container grid direction="row" gap={40}>
			<Title color="disabled">Почему мы?</Title>
			<Grid gap={20} $w100 justify="center" align="stretch">
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
			</Grid>
		</Container>
	</Wrapper>
);

export default WhyAreWe;
