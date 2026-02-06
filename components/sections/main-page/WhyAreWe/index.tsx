import { FC } from 'react';

import { AdvantageType } from '@/@types/types';
import { Icon, ImageBackground } from '@/components';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Container, Grid, Title } from '@/components/Layout';
import image from '@/public/assets/img/why-we-are.jpg';

import { IconWrapper, Item, ItemDescription, Wrapper } from './styled';

type WhyAreWeProps = {
	data: AdvantageType[] | undefined;
	error?: string;
};

export const WhyAreWe: FC<WhyAreWeProps> = ({ data, error }) => (
	<Wrapper>
		<Container $grid $direction="row" $gap={40}>
			<Title color="disabled">Почему мы?</Title>
			{data?.length ? (
				<Grid $gap={20} $w100 $justify="center" className="grid">
					{data.map(({ title, icon, description }) => (
						<Item key={title}>
							<IconWrapper>
								<Icon icon={icon} />
							</IconWrapper>
							<div>{title}</div>

							{description.map((item) => {
								const { type, values } = item;

								return (
									<ItemDescription key={values[0]}>
										{type === 'p' &&
											values.map((value) => (
												<p key={value}>{value}</p>
											))}

										{type === 'ul' && (
											<ul>
												{values.map((value) => (
													<li key={value}>{value}</li>
												))}
											</ul>
										)}
									</ItemDescription>
								);
							})}
						</Item>
					))}{' '}
				</Grid>
			) : (
				<ErrorMessage message={error} />
			)}
		</Container>

		<ImageBackground image={image} />
	</Wrapper>
);

export default WhyAreWe;
