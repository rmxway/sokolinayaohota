import { HallsTypes } from './halls';

export interface MainSliderType {
	img: string;
	alt: string;
	title: string;
	type: HallsTypes;
	description: string;
}

export const mainSlider: MainSliderType[] = [
	{
		img: '/assets/img/slider/IMG_8960.jpg',
		alt: 'img1',
		title: 'Большой зал',
		type: 'big-hall',
		description: `
		Обстановка Большого зала без преувеличения царская. Мероприятие в этом зале будет грандиозным. Зал готов принять до 400 персон для проведения банкета.
		Оформление стильными картинами и золотой лепниной, «тронный зал», полностью оборудованная сцена и тяжелые витые люстры создают атмосферу, сочетающую праздничную роскошь и уют.`,
	},
	{
		img: '/assets/img/slider/IMG_8961.jpg',
		alt: 'img2',
		title: 'Малый зал',
		type: 'small-hall',
		description: `Малый зал имеет совсем не маленькие размеры и готов принять 120 персон. Зал имеет отдельный вход и гардероб. Также имеется парковка.
		Здесь всегда присутствует приятная атмосфера, способствующая проведению Вашего мероприятия.`,
	},
	{
		img: '/assets/img/slider/IMG_8968.jpg',
		alt: 'img3',
		title: 'Зал Соколиный дворик',
		type: 'falcon-yard',
		description: `Соколиный дворик - зал с собственным внутренним двориком со своим водопадом. И полностью оборудован всем необходимым для приятного отдыха.`,
	},
];

export default mainSlider;
