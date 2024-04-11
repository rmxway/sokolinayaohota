'use client';

import Link from 'next/link';

import { SvgIcon } from '@/components';
import { ButtonUI } from '@/components/ui';

import { ErrorWrapper } from './ErrorWrapper';

export default function Error() {
	return (
		<ErrorWrapper>
			<span>404</span>
			<SvgIcon name="BarDecor" width="200" />
			Страница не найдена
			<Link href="/">
				<ButtonUI $brown>Перейти на главную</ButtonUI>
			</Link>
		</ErrorWrapper>
	);
}
