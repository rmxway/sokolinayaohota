import type { Config } from '@react-router/dev/config';
import { baseName as basename } from './services/constants';

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: false,
	basename,
} satisfies Config;
