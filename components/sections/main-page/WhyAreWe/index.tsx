import Image from 'next/image';
import { FC } from 'react';

import { AdvantageType } from '@/@types/types';
import { Icon } from '@/components';
import { ErrorMessage } from '@/components/ErrorMessage';
import imageStyle from '@/components/ImageBackground/styles.module.scss';
import { Container, Grid, Title } from '@/components/Layout';

import { IconWrapper, Item, ItemDescription, Wrapper } from './styled';

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

		<Image
			src="/assets/img/why-we-are.svg"
			className={imageStyle.imageBackground}
			fill
			alt="image"
		/>
	</Wrapper>
);

export default WhyAreWe;
