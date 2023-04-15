import { Variants } from 'framer-motion';

export const fadeInOut: Variants = {
	start: {
		opacity: 0,
		scale: 0.5,
		transition: { type: 'spring', duration: 0.4 },
	},
	end: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default fadeInOut;
