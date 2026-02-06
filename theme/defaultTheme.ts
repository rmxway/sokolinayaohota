import { DefaultTheme } from 'styled-components';

import {
	LedgerFont,
	YanoneKaffeesatzFont,
	ZenKakuFont,
} from '@/services/fonts';

export const defaultTheme: DefaultTheme = {
	name: 'default',
	colors: {
		solid: {
			primary: '#FFDB70',
			secondary: '#26221C',
			success: '#079404',
			danger: '#FF4773',
			disabled: '#8C8882',
			brown: '#42210B',
			white: '#FFFFFF',
			base: '#26221C',
		},
		gray: {
			$1: '#F7F7F7',
			$2: '#ECECEC',
			$3: '#CDCDCD',
			$4: '#BEBEBE',
			$5: '#A5A5A5',
			$6: '#747474',
			$7: '#595959',
			$8: '#434343',
			$9: '#222222',
		},
		gradients: {
			golden: (deg = '180deg') =>
				`linear-gradient(${deg}, #FFDE7D, #FDC087)`,
			brown: (deg = '180deg') =>
				`linear-gradient(${deg}, #42210B, #5E361B)`,
			rubin: (deg = '180deg') =>
				`linear-gradient(${deg}, #FF4773 0%, #F22E13 100%)`,
			disabled: (deg = '180deg') =>
				`linear-gradient(${deg}, #E8E8E8 0%, #CBC8C8 100%)`,
			black: (deg = '180deg') =>
				`linear-gradient(${deg}, #1B1913 0%, #433F38 100%)`,
			black2: (deg = '180deg') =>
				`linear-gradient(${deg}, #34302D, #615E5C)`,
		},
	},
	layout: {
		fonts: {
			header: `${YanoneKaffeesatzFont.style.fontFamily}, serif`,
			old: `${LedgerFont.style.fontFamily}, serif`,
			body: `${ZenKakuFont.style.fontFamily}, sans-serif`,
		},
		containerWidth: '1024px',
		shadow: {
			basic: '0px 4px 14px rgba(0, 0, 0, 0.3)',
			big: '0px 8px 59px rgba(0, 0, 0, 0.31)',
			gallery: '0px 23px 28px -13px rgba(0, 0, 0, 0.5)',
		},
	},
	radius: {
		borderRadius: '8px',
		blockRadius: '20px',
	},
};

export default defaultTheme;
