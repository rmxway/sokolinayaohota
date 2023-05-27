import icomoon from '@/public/assets/fonts/icofont/icofont.json';

type DescriptionElement = {
	type: 'ul' | 'p';
	values: string[];
};

export type AdvantageType = {
	title: string;
	icon: keyof typeof icomoon;
	description: DescriptionElement[];
};

export const advantages: AdvantageType[] = [
	{
		icon: 'heart',
		title: `4 зала вместительностью от 30 до 800 человек`,
		description: [
			{
				type: 'p',
				values: [
					'Выбирайте зал оптимально подходящий для вашего мероприятия. От небольшого банкета до грандиозного мероприятия. У некоторых залов имеется свой внутренний дворик.',
				],
			},
		],
	},
	{
		icon: 'secure',
		title: 'Нам доверяют',
		description: [
			{
				type: 'p',
				values: [
					'С 1993 года на рынке мы стараемся обеспечить лучший сервис и предоставляем индивидуальную систему скидок. Только профессионалы своего дела, продумываем всё до мелочей.',
				],
			},
		],
	},
	{
		icon: 'star',
		title: 'Полный комплекс услуг',
		description: [
			{
				type: 'p',
				values: [
					'Организации праздников, презентационных мероприятий любого масштаба и степени  сложности.',
					'Заказ артистов, оформление залов, фото и видео съемка. Оборудованная сцена в большой зале.',
				],
			},
		],
	},
	{
		icon: 'time',
		title: 'Удобное расположение',
		description: [
			{
				type: 'ul',
				values: [
					'Мы находимся в парке Сокольники в 100 м. от центрального входа ',
					'Рядом с метро Сокольники',
					'Большая бесплатная и охраняемая парковка на 200 машиномест',
				],
			},
		],
	},
];

export default advantages;
