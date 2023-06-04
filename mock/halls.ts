export type HallsTypes = 'falcon-yard' | 'big-hall' | 'small-hall';

export type HallType = {
	advantages: string[];
	description: string[];
	title: string;
	type: HallsTypes;
	video?: string;
};

export const halls: HallType[] = [
	{
		title: 'Большой зал',
		type: 'big-hall',
		advantages: [
			'Вместительный зал до 200 посадочных мест',
			'Оборудованная сцена, свет, звук',
			'Свадебный трон',
			'Подходит для крупномасштабного мероприятия',
		],
		description: [
			'Dolor sit amet, consectetur adipisicing elit. Odit obcaecati id alias inventore facilis explicabo magnam labore reprehenderit, laboriosam itaque, modi nulla expedita adipisci non ex consequatur iusto, sequi aperiam.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit obcaecati id alias inventore facilis explicabo magnam labore reprehenderit, laboriosam itaque, modi nulla expedita adipisci non ex consequatur iusto, sequi aperiam.',
		],
		video: 'https://video-on-youtube',
	},
	{
		title: 'Малый зал',
		type: 'small-hall',
		advantages: [
			'Оборудованная сцена, свет, звук',
			'Свадебный трон',
			'Подходит для крупномасштабного мероприятия',
			'Вместительный зал до 200 посадочных мест',
		],
		description: [
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit obcaecati id alias inventore facilis explicabo magnam labore reprehenderit, laboriosam itaque, modi nulla expedita adipisci non ex consequatur iusto, sequi aperiam.',
			'Dolor sit amet, consectetur adipisicing elit. Odit obcaecati id alias inventore facilis explicabo magnam labore reprehenderit, laboriosam itaque, modi nulla expedita adipisci non ex consequatur iusto, sequi aperiam.',
		],
	},
];
