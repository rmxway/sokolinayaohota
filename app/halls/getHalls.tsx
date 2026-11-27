import { getHallPageData } from '@/lib/pageData';

import { HallsProps } from './content';
import { HallsTypes } from '@/types/types';

export const getHalls = async (type: HallsTypes): Promise<HallsProps> => {
	try {
		const { halls } = getHallPageData();
		const titles = halls.map(({ name, tag }) => ({ title: name, tag }));
		const currentHall = halls.find((hall) => type === hall.tag) ?? null;

		return {
			currentHall,
			error: '',
			titles,
		};
	} catch (e) {
		return {
			currentHall: null,
			error: e instanceof Error ? e.message : 'Ошибка загрузки данных',
			titles: [],
		};
	}
};
