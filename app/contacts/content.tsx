'use client';

import { usePathname } from 'next/navigation';

import { getTitle, HeadPage } from '@/components/HeadPage';
import { ContactsBlock } from '@/components/sections/main-page/ContactsBlock';

export const ContactsContent = () => {
	const path = usePathname() || '/contacts';

	return (
		<>
			<HeadPage title={getTitle(path)} />
			<ContactsBlock />
		</>
	);
};
export default ContactsContent;
