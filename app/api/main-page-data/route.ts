import { NextResponse } from 'next/server';

import { ResponseData } from '@/app/content';
import { advantages, galleryImages, mainSlider, questions } from '@/mock';

export async function GET() {
	return NextResponse.json<ResponseData>({
		advantages,
		faqs: questions,
		galleryImages,
		mainSlides: mainSlider,
	});
}
