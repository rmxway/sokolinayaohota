import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
	name: 'default',
	colors: {
		primary: '#FFDE7D',
		success: '#079404',
		danger: '#FF4773',
		disabled: '#958888',
		brown: '#42210B',
		gray: {
			$1: '#ddd',
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
			golden: `linear-gradient(180deg, #FFDE7D, #EDB97C)`,
			brown: `linear-gradient(180deg, #42210B, #5E361B)`,
			rubin: `linear-gradient(180deg, #FF4773 0%, #F22E13 100%)`,
			disabled: `linear-gradient(180deg, #e8e8e8 0%, #cbc8c8 100%)`,
		},
	},
	layout: {
		containerWidth: '1024px',
		shadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
	},
	radius: {
		borderRadius: '8px',
		blockRadius: '20px',
	},
};

export { defaultTheme };
export default defaultTheme;
