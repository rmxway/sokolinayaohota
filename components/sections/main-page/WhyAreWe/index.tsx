import Image from 'next/image';
import { FC } from 'react';

import { Icon } from '@/components';
import { ErrorMessage } from '@/components/ErrorMessage';
import imageStyle from '@/components/ImageBackground/styles.module.scss';
import { Container, Grid, Title } from '@/components/Layout';
import { AdvantageType } from '@/mock/advantages';

import { IconWrapper, Item, Wrapper } from './styled';

type WhyAreWeProps = {
	data: AdvantageType[] | undefined;
	error?: string;
};

export const WhyAreWe: FC<WhyAreWeProps> = ({ data, error }) => (
	<Wrapper>
		<Container grid direction="row" gap={40}>
			<Title color="disabled">Почему мы?</Title>
			{data?.length ? (
				<Grid gap={20} $w100 justify="center" className="grid">
					{data.map(({ title, icon, description, list }) => (
						<Item key={title}>
							<IconWrapper>
								<Icon icon={icon} />
							</IconWrapper>
							<div>{title}</div>
							<span>
								{Array.isArray(description) &&
									description?.map((desc) => (
										<p key={desc}>{desc}</p>
									))}
								{typeof description === 'string' && description}
								{list && (
									<ul>
										{list.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								)}
							</span>
						</Item>
					))}{' '}
				</Grid>
			) : (
				<ErrorMessage message={error} />
			)}
		</Container>

		<Image
			src="/assets/img/why-we-are.svg"
			className={imageStyle.imageBackground}
			fill
			alt="image"
		/>
	</Wrapper>
);

export default WhyAreWe;
