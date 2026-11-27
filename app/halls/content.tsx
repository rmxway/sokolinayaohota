import { HallsTypes, HallType } from '@/types/types';
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
import { Link } from 'react-router';
import type { Route } from '../halls/+types/content';
import { getHalls } from './getHalls';

export interface PathType {
	type: HallsTypes | undefined;
}

export interface HallsProps {
	titles:
		| {
				title: string;
				tag: HallsTypes;
		  }[]
		| null;
	currentHall: HallType | null;
	error: string;
}

export async function clientLoader({
	params,
}: Route.ClientLoaderArgs): Promise<HallsProps> {
	const { type } = params;

	const resp = await getHalls(type as HallsTypes);
	if (resp.currentHall === null)
		return {
			currentHall: null,
			error: 'Данной страницы не существует',
			titles: null,
		};

	return { ...resp };
}

export function ContentHalls({ loaderData, params }: Route.ComponentProps) {
	const { currentHall, error, titles } = loaderData;
	const { type } = params;

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
									to={`/halls/${tag}`}
									className={type === tag ? 'active' : ''}
									key={title}
								>
									{title}
								</Link>
							))}
						</Grid>
					</Sidebar>
					<HallsPage {...currentHall} />
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
							key={type}
							name={String(type)}
							fetchUrl="send-hall-request"
						/>
					</Container>
				</FormBlock>
			</>
		)
	);
}

export default ContentHalls;
