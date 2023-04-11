import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { navbarItems } from '@/mock/navbar';

import { NavbarItem, Wrapper } from './styled';

export const Navbar: FC = () => {
	const router = useRouter();

	return (
		<Wrapper>
			{navbarItems.map((item) => (
				<NavbarItem key={item.title} active={router.asPath === item.url}>
					<Link href={item.url} />
					{item.title}
				</NavbarItem>
			))}
		</Wrapper>
	);
};

export default Navbar;
