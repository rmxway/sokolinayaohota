import { NextPage } from 'next';

import { Icon } from '@/components/Icon';
import { Title } from '@/components/Layout';
import { HallType } from '@/mock/halls';

import { BlockContent, HallAdvantages, HallsPageWrapper } from './styled';

const HallsPage: NextPage<HallType> = ({
	advantages = [],
	description = [],
	title,
}) => (
	<HallsPageWrapper gap={40} $w100>
		<BlockContent>
			<Title>{title}</Title>
			<br />
			{description.length
				? description.map((info) => (
						<p key={info.slice(0, 10)}>{info}</p>
				  ))
				: null}
			{/* Slider */}
		</BlockContent>
		<HallAdvantages>
			{advantages.length ? (
				<ul>
					{advantages.map((advantage) => (
						<li key={`${advantage.slice(0, 15)}`}>
							<Icon icon="success" size={16} />
							{advantage}
						</li>
					))}
				</ul>
			) : null}
		</HallAdvantages>
	</HallsPageWrapper>
);

export { HallsPage };
export default HallsPage;
