import { NextRequest, NextResponse } from 'next/server';

import { DataHall } from '@/components/FormOrderHall';

export async function POST(req: NextRequest) {
	const body: DataHall = await req.json();
	if (req.method !== 'POST') {
		return NextResponse.json({ status: 'Error' });
	}

	return NextResponse.json({ body, status: 'Success' });
}
