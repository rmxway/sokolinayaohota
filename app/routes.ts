import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('./content.tsx'),
	route('/halls/:type', './halls/content.tsx'),
	route('/gallery', './gallery/content.tsx'),
	route('*', './not-found/page.tsx'),
] satisfies RouteConfig;
