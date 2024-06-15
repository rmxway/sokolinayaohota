import { NextResponse } from 'next/server';

import { ResponseData } from '@/app/content';

export async function GET() {
	return NextResponse.json<ResponseData>({
		advantages: [],
		faqs: [
			{
				answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, vitae dolorum a sed assumenda aspernatur corrupti officia vel excepturi aperiam beatae, quam odio, quis eligendi. Explicabo ducimus corporis quia hic.',
				id: '1',
				question: 'Как произвести заказ?',
			},
			{
				answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, vitae dolorum a sed assumenda aspernatur corrupti officia vel excepturi aperiam beatae, quam odio, quis eligendi. Explicabo ducimus corporis quia hic.',
				id: '2',
				question: 'Где вы находитесь?',
			},
		],
		galleryImages: [],
		mainSlides: [],
	});
}
