import { generateMedia } from 'styled-media-query';

interface BreakpointsType {
	xl: string | number;
	lg: string | number;
	md: string | number;
	sm: string | number;
	xs: string | number;
	xxs: string | number;
}

const jsBreakpoints: BreakpointsType = {
	xl: 1440,
	lg: 1280,
	md: 1024,
	sm: 768,
	xs: 600,
	xxs: 420,
};

const breakpoints: BreakpointsType = {
	xl: `${jsBreakpoints.xl}px`,
	lg: `${jsBreakpoints.lg}px`,
	md: `${jsBreakpoints.md}px`,
	sm: `${jsBreakpoints.sm}px`,
	xs: `${jsBreakpoints.xs}px`,
	xxs: `${jsBreakpoints.xxs}px`,
};

const media = generateMedia(breakpoints);

export { breakpoints, jsBreakpoints, media };
export default media;
