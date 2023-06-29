import { HallType } from '@/@types/types';

export const halls: HallType[] = [
	{
		name: 'Большой зал',
		tag: 'big-hall',
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
		video: ['https://video-on-youtube'],
	},
	{
		name: 'Малый зал',
		tag: 'small-hall',
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

export default halls;