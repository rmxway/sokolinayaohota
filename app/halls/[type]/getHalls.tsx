import { getHallPageData } from '@/lib/pageData';

import { HallsProps, PathType } from './content';

export const getHalls = async (params: PathType): Promise<HallsProps> => {
	try {
		const { halls } = getHallPageData();
		const titles = halls.map(({ name, tag }) => ({ title: name, tag }));
		const currentHall =
			halls.find((hall) => params.type === hall.tag) ?? null;

		return {
			currentHall,
			error: '',
			params,
			titles,
		};
	} catch (e) {
		return {
			currentHall: null,
			error: e instanceof Error ? e.message : 'Ошибка загрузки данных',
			params,
			titles: [],
		};
	}
};
