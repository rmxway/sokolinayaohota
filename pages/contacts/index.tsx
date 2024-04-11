import { GetServerSidePropsContext } from 'next';

import { getTitle, HeadPage } from '@/components/HeadPage';
import { ContactsBlock } from '@/components/sections/main-page/ContactsBlock';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => ({
	props: {
		title: getTitle(ctx.resolvedUrl),
	},
});

export default function ContactsPage({ title }: { title: string }) {
	return (
		<>
			<HeadPage title={title} />
			<ContactsBlock />
		</>
	);
}
