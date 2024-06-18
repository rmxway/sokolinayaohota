import { NextResponse } from 'next/server';

import { HallType } from '@/@types/types';
import { halls } from '@/mock';

export async function GET() {
	return NextResponse.json<{ halls: HallType[] }>({
		halls,
	});
}
