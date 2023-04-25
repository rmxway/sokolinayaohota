import { css } from 'styled-components';

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
		left: 0;
		// right: 15px;		
	}
	body {
		background-color: #fff;

		font-family: 'Zen Kaku Gothic Antique', sans-serif;
		font-weight: 400;
		font-size: 20px;

		display: block;
		line-height: 1.25;
		min-width: 400px;
		color: #222;

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
		font-family: 'Yanone Kaffeesatz', sans-serif;
		font-weight: 600;
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
