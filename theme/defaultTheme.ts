import { DefaultTheme } from 'styled-components';

import {
	LedgerFont,
	YanoneKaffeesatzFont,
	ZenKakuFont,
} from '@/services/fonts';

const defaultTheme: DefaultTheme = {
	name: 'default',
	colors: {
		solid: {
			primary: '#FFDE7D',
			success: '#079404',
			danger: '#FF4773',
			disabled: '#958888',
			brown: '#42210B',
			white: '#FFFFFF',
			base: '#222',
		},
		gray: {
			$1: '#f7f7f7',
			$2: '#ececec',
			$3: '#cdcdcd',
			$4: '#bebebe',
			$5: '#a5a5a5',
			$6: '#747474',
			$7: '#595959',
			$8: '#434343',
			$9: '#222222',
		},
		gradients: {
			golden: (deg = '180deg') =>
				`linear-gradient(${deg}, #FFDE7D, #EDB97C)`,
			brown: (deg = '180deg') =>
				`linear-gradient(${deg}, #42210B, #5E361B)`,
			rubin: (deg = '180deg') =>
				`linear-gradient(${deg}, #FF4773 0%, #F22E13 100%)`,
			disabled: (deg = '180deg') =>
				`linear-gradient(${deg}, #e8e8e8 0%, #cbc8c8 100%)`,
			black: (deg = '180deg') =>
				`linear-gradient(${deg}, #3b2d26 0%, #544740 100%)`,
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

export { defaultTheme };
export default defaultTheme;
