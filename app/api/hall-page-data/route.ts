import { NextResponse } from 'next/server';

import { getHallPageData } from '@/lib/pageData';

export async function GET() {
	return NextResponse.json(getHallPageData());
}
