import Image from 'next/image';
import { FC } from 'react';

import { Icon } from '@/components';
import imageStyle from '@/components/ImageBackground/styles.module.scss';
import { Container, Grid, Title } from '@/components/Layout';
import { advantages } from '@/mock/advantages';

import { IconWrapper, Item, Wrapper } from './styled';

export const WhyAreWe: FC = () => (
	<Wrapper>
		<Container grid direction="row" gap={40}>
			<Title color="disabled">Почему мы?</Title>
			<Grid gap={20} $w100 justify="center">
				{advantages.map(({ title, icon, description, list }) => (
					<Item key={title}>
						<IconWrapper>
							<Icon icon={icon} />
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

		<Image src="/assets/img/why-we-are.svg" className={imageStyle.imageBackground} alt="image" width={1200} height={1200}  />
	</Wrapper>
);

export default WhyAreWe;
