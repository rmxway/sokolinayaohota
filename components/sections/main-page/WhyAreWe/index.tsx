import Image from 'next/image';
import { FC } from 'react';

import { Icon } from '@/components';
import { ErrorMessage } from '@/components/ErrorMessage';
import imageStyle from '@/components/ImageBackground/styles.module.scss';
import { Container, Grid, Title } from '@/components/Layout';
import { advantages, AdvantageType } from '@/mock/advantages';

import { IconWrapper, Item, Wrapper } from './styled';

type WhyAreWeProps = {
	data: AdvantageType[] | undefined;
	error?: string;
};

export const WhyAreWe: FC<WhyAreWeProps> = ({ data, error }) => (
	<Wrapper>
		<Container grid direction="row" gap={40}>
			<Title color="disabled">Почему мы?</Title>
			{advantages?.length ? (
				<Grid gap={20} $w100 justify="center" className="grid">
					{advantages.map(({ title, icon, description }) => (
						<Item key={title}>
							<IconWrapper>
								<Icon icon={icon} />
							</IconWrapper>
							<div>{title}</div>
							<span>
								{description.map(({ type, values }) => {
									if (type === 'p')
										return values.map((value) => (
											<p key={value}>{value}</p>
										));

									if (type === 'ul')
										return (
											<ul>
												{values.map((value) => (
													<li key={value}>{value}</li>
												))}
											</ul>
										);

									return null;
								})}
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
