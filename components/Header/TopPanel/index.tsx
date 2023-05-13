import { useState } from 'react';

import { Container } from '@/components/Layout';
import { useStore } from '@/hooks';
import { actionChangeTopPanel } from '@/store/actions';

import { contentAnimation, InfoBlock, TopPanelSC } from './styled';
import { TopPanelItem, TopPanelType } from './TopPanelItem';

export const TopPanelBlock = () => {
	const { dispatch, state } = useStore();
	const [content, setContent] = useState<TopPanelType>();

	const handleClick = (e: TopPanelType) => {
		setContent(e);
		const panel = state.topPanel === e.icon ? '' : e.icon;
		dispatch(actionChangeTopPanel(panel));
	};

	return (
		<TopPanelSC>
			<Container grid gap={8} spaceBetween center>
				<TopPanelItem
					onSend={handleClick}
					icon="location"
					content="проезд Сокольнического круга, д.11 (справа от центрального входа в парк Сокольники)"
				/>
				<TopPanelItem
					onSend={handleClick}
					icon="phone"
					content={<a href="tel:+74992686834">+7 (499) 268-68-34</a>}
				/>
			</Container>
			<InfoBlock
				variants={contentAnimation}
				initial="start"
				animate={state.topPanel !== '' ? 'end' : 'start'}
				exit="start"
			>
				<div>{content && content.content}</div>
			</InfoBlock>
		</TopPanelSC>
	);
};
export default TopPanelBlock;
