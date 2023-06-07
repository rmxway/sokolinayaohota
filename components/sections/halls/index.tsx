import { NextPage } from 'next';

import { HallType } from '@/@types/types';
import { Icon } from '@/components/Icon';
import { Title, VideoYouTube } from '@/components/Layout';
import { Slider } from '@/components/Slider';

import { BlockContent, HallAdvantages, HallsPageWrapper } from './styled';

const HallsPage: NextPage<HallType> = ({
	advantages = [],
	description = [],
	title,
	video,
	images,
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

			{video && <VideoYouTube src={video} />}
			{images && <Slider images={images} countThumbsPerView={5} />}
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
