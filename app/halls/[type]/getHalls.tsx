import { HallType } from '@/@types/types';
import { apiUrl } from '@/services/variable';

import { HallsProps, PathType } from './content';

export const getHalls = async (params: PathType): Promise<HallsProps> => {
	const resp = fetch(apiUrl('hall-page-data'));
	let error = '';

	const json: { halls: HallType[] } = await resp
		.then((res) => res.json())
		.catch((e) => {
			error = e.message;
		});

	const titles =
		json?.halls.map(({ name, tag }) => ({
			title: name,
			tag,
		})) || [];

	const currentHall: HallType | null =
		json.halls.find((hall) => params.type === hall.tag) || null;

	return {
		currentHall,
		error,
		params,
		titles,
	};
};
