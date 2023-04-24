import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { navbarItems } from '@/mock/navbar';

import { BurgerButton, NavbarItem, NavContainer, Wrapper } from './styled';

export const Navbar: FC = () => {
	const router = useRouter();
	const [show, setShow] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		if (show) {
			disablePageScroll();
		}

		return () => {
			enablePageScroll();
		};
	}, [show]);

	const toggleNavbar = (e: React.MouseEvent) => {
		if (e.target !== containerRef.current) setShow((prev) => !prev);
	};

	return (
		<>
			<BurgerButton onClick={toggleNavbar}>
				<span />
				<span />
				<span />
			</BurgerButton>
			<Wrapper $open={show} onClick={toggleNavbar}>
				<NavContainer ref={containerRef}>
					{navbarItems.map((item) => (
						<NavbarItem
							key={item.title}
							active={router.asPath === item.url}
						>
							<Link href={item.url} />
							{item.title}
						</NavbarItem>
					))}
				</NavContainer>
			</Wrapper>
		</>
	);
};

export default Navbar;
