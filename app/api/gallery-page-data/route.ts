import { NextResponse } from 'next/server';

import { getGalleryPageData } from '@/lib/pageData';

export async function GET() {
	return NextResponse.json(getGalleryPageData());
}
