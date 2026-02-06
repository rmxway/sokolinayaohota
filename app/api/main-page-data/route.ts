import { NextResponse } from 'next/server';

import { ResponseData } from '@/app/content';
import { getMainPageData } from '@/lib/pageData';

export async function GET() {
	return NextResponse.json<ResponseData>(getMainPageData());
}
