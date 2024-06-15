import '@/public/assets/fonts/icofont/icofont.scss';

import type { Metadata } from 'next';

import { StyledComponentsRegistry } from '@/lib';

export const metadata: Metadata = {
	title: 'Sokolinaya ohota',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
