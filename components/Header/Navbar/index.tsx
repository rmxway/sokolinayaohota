import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { Space } from '@/components/Layout';
import { navbarItems } from '@/mock/navbar';
import oldLogo from '@/public/assets/img/old-logo.png';

import {
	BurgerButton,
	DesktopNav,
	MobileNav,
	mobileNavVariant,
	NavbarItem,
	navbarItemVariant,
	Wrapper,
	wrapperVariant,
} from './styled';

export const Navbar: FC = () => {
	const path = usePathname() || '';
	const [show, setShow] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		if (show && containerRef?.current) {
			disablePageScroll(containerRef?.current);
		}

		return () => {
			enablePageScroll();
		};
	}, [show]);

	const toggleNavbar = (e: React.MouseEvent) => {
		if (e.target !== containerRef.current) setShow((prev) => !prev);
	};

	const activeLink = (url: string): boolean => {
		const active = url.split('/');
		return active[1] === path.split('/')[1];
	};

	return (
		<>
			<BurgerButton
				onClick={toggleNavbar}
				$open={show}
				aria-label="burger button"
			>
				<span className="first-line" />
				<span className="second-line" />
				<span className="third-line" />
			</BurgerButton>
			<DesktopNav>
				{navbarItems.map((item) => (
					<NavbarItem key={item.title} $active={activeLink(item.url)}>
						<Link href={item.url} aria-label={item.title} />
						{item.title}
					</NavbarItem>
				))}
			</DesktopNav>
			<Wrapper
				variants={wrapperVariant}
				animate={show ? 'end' : 'start'}
				onClick={toggleNavbar}
			>
				<AnimatePresence>
					{show && (
						<MobileNav
							ref={containerRef}
							variants={mobileNavVariant}
							initial="start"
							animate={show ? 'end' : 'start'}
							exit="start"
						>
							{navbarItems.map((item) => (
								<NavbarItem
									variants={navbarItemVariant}
									key={item.title}
									$active={activeLink(item.url)}
								>
									<Link href={item.url} />
									{item.title}
								</NavbarItem>
							))}
							<Space />
							<Image
								src={oldLogo}
								alt="Logo navbar"
								width={200}
								quality={60}
							/>
						</MobileNav>
					)}
				</AnimatePresence>
			</Wrapper>
		</>
	);
};

export default Navbar;
