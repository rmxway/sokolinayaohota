import { NextPage } from 'next';
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
import { fetchApi } from '@/services/variable';

type PathType = {
	type: HallsTypes | undefined;
};

export const getServerSideProps = async ({ params }: { params: PathType }) => {
	const resp = fetch(fetchApi('hall-page-data'));
	let error = '';

	const json: { halls: HallType[] } = await resp
		.then((res) => res.json())
		.catch((e) => {
			error = e.message;
		});

	const titles =
		json?.halls.map(({ name, tag }) => ({
			title: name,
			tag,
		})) || [];

	const currentHall: HallType | undefined = json?.halls.find(
		(hall) => params.type === hall.tag
	);

	if (!currentHall) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			params,
			titles,
			currentHall,
			error,
		},
	};
};

type HallsProps = {
	params: PathType;
	titles: {
		title: string;
		tag: HallsTypes;
	}[];
	currentHall: HallType;
	error: string;
};

export const Halls: NextPage<HallsProps> = ({
	params,
	titles,
	currentHall,
	error,
}) => {
	const [isLoaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(false);
	}, [params]);

	if (error)
		return (
			<Container grid mt>
				<ErrorMessage message={error} />
			</Container>
		);

	return (
		<>
			<MainBlock grid gap={40}>
				<Sidebar>
					<p>Все залы:</p>

					<Grid direction="row" gap={12}>
						{titles?.map(({ title, tag }) => (
							<Link
								href={`/halls/${tag}`}
								className={params.type === tag ? 'active' : ''}
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
				<Container grid direction="column" gap={40}>
					<Grid gap={20} direction="row">
						<Grid
							gap={20}
							direction="column"
							align="center"
							justify="center"
						>
							<Icon icon="secure" size={40} />
							<Title color="primary">Бронирование</Title>
						</Grid>
						<Grid gap={20} direction="row">
							<span className="info">
								Отправьте заявку на проведение мероприятия, и
								наши специалисты подберут для вас самые лучшие
								условия, помогут составить меню с учетом ваших
								пожеланий. Скидки для всех.
							</span>
							<span className="info">
								Мы позаботимся о том, что бы ваше торжество
								запомнилось на всю жизнь!
							</span>
						</Grid>
					</Grid>
					<FormOrderHall
						name={String(params.type)}
						fetchUrl={fetchApi('send-hall-request')}
					/>
				</Container>
			</FormBlock>
		</>
	);
};

export default Halls;
