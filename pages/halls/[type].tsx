import { NextPage } from 'next';
import Link from 'next/link';

import { Icon } from '@/components';
import { FormOrderHall } from '@/components/FormOrderHall';
import { Container, Grid, Title } from '@/components/Layout';
import { HallsPage } from '@/components/sections/halls';
import {
	FormBlock,
	MainBlock,
	Sidebar,
} from '@/components/sections/halls/styled';
import { halls, HallsTypes, HallType } from '@/mock/halls';

type PathType = {
	type: HallsTypes | undefined;
};

export const getStaticPaths = async () => {
	// halls заменить на реальный запрос
	const paths: { params: PathType }[] = halls.map(({ type }) => ({
		params: { type },
	}));
	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: PathType }) => {
	const titles = halls.map(({ title, type }) => ({ title, type }));
	const currentHall = halls.find((item) => item.type === params.type);

	return { props: { params, titles, currentHall } };
};

type HallsProps = {
	params: PathType;
	titles: [];
	currentHall: HallType;
};

export const Halls: NextPage<HallsProps> = ({
	params,
	titles,
	currentHall,
}) => (
	<>
		<MainBlock grid gap={40}>
			<Sidebar>
				<p>Все залы:</p>

				<Grid direction="row" gap={12}>
					{titles?.map(({ title, type }) => (
						<Link
							href={`/halls/${type}`}
							className={params.type === type ? 'active' : ''}
							key={type}
						>
							{title}
						</Link>
					))}
				</Grid>
			</Sidebar>

			{currentHall !== undefined ? (
				<HallsPage {...currentHall} />
			) : (
				<h3>Залов не найдено</h3>
			)}
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
							Отправьте заявку на проведение мероприятия, и наши
							специалисты подберут для вас самые лучшие условия,
							помогут составить меню с учетом ваших пожеланий.
							Скидки для всех.
						</span>
						<span className="info">
							Мы позаботимся о том, что бы ваше торжество
							запомнилось на всю жизнь!
						</span>
					</Grid>
				</Grid>
				<FormOrderHall name={String(params.type)} />
			</Container>
		</FormBlock>
	</>
);
export default Halls;
