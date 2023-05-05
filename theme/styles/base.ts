import { css } from 'styled-components';

import { YanoneKaffeesatzFont, ZenKakuFont } from '@/services/fonts';
import { media } from '@/theme/media';

const base = css`
	html {
		scroll-snap-align: inherit;
		scroll-snap-type: mandatory;
		scroll-behavior: smooth;
	}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	[data-scroll-lock-locked] {
		height: 100vh;
	}
	body {
		background-color: #fff;
		${ZenKakuFont.style}
		font-size: 20px;

		display: block;
		line-height: 1.25;
		min-width: 320px;
		color: #222;
		overflow-y: scroll;

		${media.lessThan('md')`
			font-size: 16px;
		`}
	}
	code {
		font-family: 'source-code-pro', 'Menlo', 'Monaco', 'Consolas',
			'Courier New', monospace;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		${YanoneKaffeesatzFont.style}
		letter-spacing: 1px;
		line-height: 1;
	}

	h1 {
		font-size: 4.5rem;
		margin: 20px 0;
	}

	h2 {
		font-size: 3.5rem;
		margin: 15px 0;
	}

	h3 {
		font-size: 2.5rem;
		margin: 10px 0;
	}

	h4 {
		font-size: 2rem;
		margin: 8px 0;
	}

	h5 {
		font-size: 1.5rem;
		margin: 4px 0;
	}

	ul {
		list-style: disc;
		padding: 5px 0 5px 25px;
	}
`;

export { base };
export default base;
