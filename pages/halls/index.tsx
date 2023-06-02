import { useState } from 'react';

import { Icon } from '@/components';
import { FormOrderHall } from '@/components/FormOrderHall';
import { Container, Grid, Title } from '@/components/Layout';
import { HallsPage } from '@/components/sections/halls';
import { halls, HallsTypes } from '@/mock/halls';

import { FormBlock, MainBlock, Sidebar } from './styled';

export const Halls = () => {
	const [currentType, setCurrentType] = useState<HallsTypes>('big-hall');

	const titles = halls.map(({ title, type }) => ({ title, type }));
	const currentHall = halls.filter((hall) => currentType === hall.type);

	return (
		<>
			<MainBlock grid gap={40}>
				<Sidebar>
					<p>Все залы:</p>

					<Grid direction="row" gap={12}>
						{titles.map(({ title, type }) => (
							<button
								className={currentType === type ? 'active' : ''}
								key={title}
								type="button"
								onClick={() => setCurrentType(type)}
							>
								{title}
							</button>
						))}
					</Grid>
				</Sidebar>

				{currentHall.length ? (
					currentHall.map((hall) => (
						<HallsPage key={hall.type} {...hall} />
					))
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
					<FormOrderHall name={currentType} />
				</Container>
			</FormBlock>
		</>
	);
};
export default Halls;
