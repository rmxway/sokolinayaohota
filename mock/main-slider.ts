interface MainSliderType {
	img: string;
	alt: string;
	title: string;
	description: string;
}

export const mainSlider: MainSliderType[] = [
	{
		img: '/assets/img/slider/IMG_8960.jpg',
		alt: 'img1',
		title: 'Малый зал',
		description:
			'Общей площадью в 200 кв. метров и с 30 посадочными зонами значительно уступает большому залу по вместимости, однако этого хватит на пышное торество на 100 человек.',
	},
	{
		img: '/assets/img/slider/IMG_8961.jpg',
		alt: 'img2',
		title: 'Большой зал',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nemo a tenetur voluptatibus nam, cumque voluptatum vel perspiciatis fugiat nihil repellendus minima ut amet rerum quam aliquam! Amet porro, dolorem pariatur temporibus eaque iure placeat, ut asperiores blanditiis aliquam doloribus explicabo neque aperiam eius molestiae culpa commodi id repudiandae quo.',
	},
	{
		img: '/assets/img/slider/IMG_8968.jpg',
		alt: 'img3',
		title: 'Средний зал',
		description:
			'Amet porro, dolorem pariatur temporibus eaque iure placeat, ut asperiores blanditiis aliquam doloribus explicabo neque aperiam eius molestiae culpa commodi id repudiandae quo.',
	},
];

export default mainSlider;
