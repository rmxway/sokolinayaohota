import {
	Ledger,
	Yanone_Kaffeesatz,
	Zen_Kaku_Gothic_Antique,
} from 'next/font/google';

export const YanoneKaffeesatzFont = Yanone_Kaffeesatz({
	subsets: ['cyrillic'],
	preload: true,
	weight: ['500', '600'],
	fallback: ['block'],
});

export const LedgerFont = Ledger({
	subsets: ['cyrillic'],
	weight: ['400'],
	fallback: ['block'],
});

export const ZenKakuFont = Zen_Kaku_Gothic_Antique({
	subsets: ['cyrillic'],
	weight: ['300', '400'],
});
