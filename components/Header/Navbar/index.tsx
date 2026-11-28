import { AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';

import { Space } from '@/components/Layout';
import { useScrollLock } from '@/hooks';
import { navbarItems } from '@/mock/navbar';

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

export const Navbar = () => {
	const { pathname } = useLocation();
	const path = pathname || '';
	const [show, setShow] = useState(false);
	const containerRef = useRef(null);

	useScrollLock(show);

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
					<NavbarItem
						key={item.title}
						data-testid={`desktop-navbar-item-${item.name.toLowerCase()}`}
						$active={activeLink(item.url)}
					>
						<Link to={item.url} aria-label={item.title} />
						{item.title}
					</NavbarItem>
				))}
			</DesktopNav>
			<Wrapper
				data-testid="navbar-overlay"
				variants={wrapperVariant}
				animate={show ? 'end' : 'start'}
				onClick={toggleNavbar}
			>
				<AnimatePresence>
					{show && (
						<MobileNav
							data-testid="mobile-nav"
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
									data-testid={`mobile-navbar-item-${item.name.toLowerCase()}`}
									$active={activeLink(item.url)}
								>
									<Link to={item.url} />
									{item.title}
								</NavbarItem>
							))}
							<Space />
							<img
								src="/assets/img/old-logo.png"
								alt="Logo navbar"
								width={200}
							/>
						</MobileNav>
					)}
				</AnimatePresence>
			</Wrapper>
		</>
	);
};

export default Navbar;
