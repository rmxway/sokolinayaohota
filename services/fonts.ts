import {
	Ledger,
	Yanone_Kaffeesatz,
	Zen_Kaku_Gothic_Antique,
} from 'next/font/google';

export const YanoneKaffeesatzFont = Yanone_Kaffeesatz({
	subsets: ['cyrillic'],
	weight: ['500', '600'],	
	display: 'swap',	
});

export const LedgerFont = Ledger({
	subsets: ['cyrillic'],
	weight: ['400'],
	display: 'swap',	
});

export const ZenKakuFont = Zen_Kaku_Gothic_Antique({
	subsets: ['cyrillic'],
	weight: ['300', '400', '500', '700', '900'],
	display: 'swap',	
});
