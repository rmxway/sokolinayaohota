'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { HallsTypes, HallType } from '@/@types/types';
import { Icon } from '@/components';
import { ErrorMessage } from '@/components/ErrorMessage';
import { FormOrderHall } from '@/components/FormOrderHall';
import { Container, Grid, Title } from '@/components/Layout';
import { HallsPage } from '@/components/sections/halls';
import {
	FormBlock,
	MainBlock,
	Sidebar,
} from '@/components/sections/halls/styled';
import { apiUrl } from '@/services/variable';

export interface PathType {
	type: HallsTypes | undefined;
}

export interface HallsProps {
	params: PathType;
	titles: {
		title: string;
		tag: HallsTypes;
	}[];
	currentHall: HallType | null;
	error: string;
}

export function ContentHalls({
	params,
	titles,
	currentHall,
	error,
}: HallsProps) {
	const [isLoaded, setLoaded] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => setLoaded(false), 0);
		return () => clearTimeout(t);
	}, [params]);

	if (error)
		return (
			<Container $grid $mt>
				<ErrorMessage message={error} />
			</Container>
		);

	return (
		currentHall && (
			<>
				<MainBlock $grid $gap={40}>
					<Sidebar>
						<p>Все залы:</p>

						<Grid $direction="row" $gap={12}>
							{titles?.map(({ title, tag }) => (
								<Link
									href={`/halls/${tag}`}
									className={
										params.type === tag ? 'active' : ''
									}
									key={title}
									onClick={() => setLoaded(true)}
								>
									{title}
								</Link>
							))}
						</Grid>
					</Sidebar>
					<HallsPage {...currentHall} {...{ isLoaded }} />
				</MainBlock>
				<FormBlock>
					<Container $grid $direction="column" $gap={40}>
						<Grid $gap={20} $direction="row">
							<Grid $gap={20} $direction="column" $align="center">
								<Icon icon="secure" size={40} />
								<Title color="primary">Бронирование</Title>
							</Grid>
							<Grid $gap={20} $direction="row">
								<span className="info">
									Отправьте заявку на проведение мероприятия,
									и наши специалисты подберут для вас самые
									лучшие условия, помогут составить меню с
									учетом ваших пожеланий. Скидки для всех.
								</span>
								<span className="info">
									Мы позаботимся о том, что бы ваше торжество
									запомнилось на всю жизнь!
								</span>
							</Grid>
						</Grid>
						<FormOrderHall
							name={String(currentHall.name)}
							fetchUrl={apiUrl('send-hall-request')}
						/>
					</Container>
				</FormBlock>
			</>
		)
	);
}

export default ContentHalls;
