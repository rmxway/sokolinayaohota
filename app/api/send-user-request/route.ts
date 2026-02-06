import { NextRequest, NextResponse } from 'next/server';

import { FormData } from '@/components/FormOrder';

export async function POST(req: NextRequest) {
	const body: FormData = await req.json();
	if (req.method !== 'POST') {
		return NextResponse.json({ status: 'Error' });
	}

	return NextResponse.json({ body, status: 'Success' });
}
