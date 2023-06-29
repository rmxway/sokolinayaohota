import { GetServerSidePropsContext, NextPage } from 'next';

import { getTitle, HeadPage } from '@/components/HeadPage';
import { ContactsBlock } from '@/components/sections/main-page/ContactsBlock';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => ({
	props: {
		title: getTitle(ctx.resolvedUrl),
	},
});

const ContactsPage: NextPage<{ title: string }> = ({ title }) => (
	<>
		<HeadPage title={title} />
		<ContactsBlock />
	</>
);

export { ContactsPage };
export default ContactsPage;
