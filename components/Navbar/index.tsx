import Link from 'next/link';
import { FC } from 'react';

import { Container, Flexbox } from '@/components/Layout';
import { navbarItems } from '@/mock/navbar';

import { NavbarItem, StyledNavbar } from './styled';

const Navbar: FC = () => (
	<StyledNavbar>
		<Container>
			<Flexbox align="center" nowrap>
				{navbarItems.map((item) => (
					<NavbarItem key={item.title}>
						<Link href={item.url} />
						{item.title}
					</NavbarItem>
				))}
			</Flexbox>
		</Container>
	</StyledNavbar>
);

export { Navbar };
export default Navbar;
