import { NextPage } from 'next';

import { HallType } from '@/@types/types';
import { Icon } from '@/components/Icon';
import { PageLoader, Title, VideoYouTube } from '@/components/Layout';
import { Slider } from '@/components/Slider';

import {
	BlockContent,
	HallAdvantages,
	HallsPageWrapper,
	PhoneBlock,
	RightBlock,
} from './styled';

const HallsPage: NextPage<HallType> = ({
	advantages = [],
	description = [],
	name,
	video = [],
	images = [],
	isLoaded,
}) => (
	<HallsPageWrapper gap={40} $w100>
		{isLoaded && <PageLoader absolute noDelay />}
		<BlockContent>
			<Title as="h1">{name}</Title>
			<br />
			{description.length
				? description.map((info) => (
						<p key={info.slice(0, 10)}>{info}</p>
				  ))
				: null}

			{video &&
				video.map((item) => <VideoYouTube key={item} src={item} />)}
			{images && <Slider images={images} countThumbsPerView={5} />}
		</BlockContent>
		<RightBlock>
			<HallAdvantages>
				<Icon icon="star" size={270} />
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
			<PhoneBlock>
				<Icon icon="phone" size={270} />
				<div>Если остались вопросы ?</div>
				<p>Звоните с 10 до 22</p>
				<ul>
					<li>+7 (499) 269-38-33</li>
					<li>+7 (499) 268-23-59</li>
					<li>+7 (499) 268-68-34</li>
					<li>+7 (926) 163-63-04</li>
					<li>+7 (926) 159-55-58</li>
				</ul>
			</PhoneBlock>
		</RightBlock>
	</HallsPageWrapper>
);

export { HallsPage };
export default HallsPage;
