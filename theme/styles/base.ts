import { css } from 'styled-components';
import theme from '@/theme/defaultTheme';

const base = css`
	html {
		font-size: 16px;
	}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	body.scroll-lock {
		overflow: hidden;
		padding-right: var(--scrollbar-width, 0);
	}

	body.scroll-lock .scroll-lock-compensate {
		padding-right: var(--scrollbar-width, 0);
	}

	body {
		font-family: ${theme.layout.fonts.body};
		font-size: 16px;
		font-weight: 500;
		display: block;
		line-height: 1.25;
		min-width: 360px;
		color: #333;
		overflow-y: scroll;
	}

	.main {
		position: relative;
		background-color: #fff;
		z-index: 100;
	}

	code {
		font-family:
			'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New',
			monospace;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		font-family: ${theme.layout.fonts.inter};
		font-weight: 900;
		line-height: 1;
	}

	h1 {
		font-size: 3rem;
		margin: 20px 0;
	}

	h2 {
		font-size: 2.5rem;
		margin: 15px 0;
	}

	h3 {
		font-size: 2rem;
		margin: 10px 0;
	}

	h4 {
		font-size: 1.5rem;
		margin: 8px 0;
	}

	h5 {
		font-size: 1rem;
		margin: 4px 0;
	}

	ul {
		list-style: disc;
		padding: 5px 0 5px 25px;
	}
`;

export { base };
export default base;
