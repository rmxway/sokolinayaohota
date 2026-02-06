/**
 * Мок для next/font/google в Storybook.
 * Next.js font API не работает в webpack-сборке Storybook,
 * шрифты подключаются через .storybook/fonts.scss
 */

/* eslint-disable camelcase -- имена как в next/font/google */
const createFontMock = (family: string) => () => ({
	className: '',
	style: { fontFamily: `"${family}", sans-serif` },
});

export const Ledger = createFontMock('Ledger');
export const Yanone_Kaffeesatz = createFontMock('Yanone Kaffeesatz');
export const Zen_Kaku_Gothic_Antique = createFontMock(
	'Zen Kaku Gothic Antique',
);
/* eslint-enable camelcase */
