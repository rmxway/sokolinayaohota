import { useRouter } from 'next/router';
import { useState } from 'react';

import { Container } from '@/components/Layout';
import { useStore } from '@/hooks';
import { isMainPage } from '@/services/variable';
import { actionChangeTopPanel } from '@/store/actions';

import { contentAnimation, InfoBlock, TopPanelSC } from './styled';
import { TopPanelItem, TopPanelType } from './TopPanelItem';

export const TopPanelBlock = ({ show }: { show?: boolean }) => {
	const { dispatch, state } = useStore();
	const [content, setContent] = useState<TopPanelType>();
	const router = useRouter();

	const handleClick = (e: TopPanelType) => {
		setContent(e);
		const panel = state.topPanel === e.icon ? '' : e.icon;
		dispatch(actionChangeTopPanel(panel));
	};

	return (
		<TopPanelSC
			$isMainPage={isMainPage(router)}
			animate={{
				bottom: show ? 0 : '-100px',
				transition: {
					type: 'tween',
					delay: 0.2,
					duration: 0.5,
				},
			}}
		>
			<InfoBlock
				variants={contentAnimation}
				initial="start"
				animate={state.topPanel !== '' ? 'end' : 'start'}
				exit="start"
			>
				<div>{content && content.content}</div>
			</InfoBlock>
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
		</TopPanelSC>
	);
};
export default TopPanelBlock;
