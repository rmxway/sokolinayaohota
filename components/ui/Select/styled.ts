import styled, { css } from 'styled-components';

import { InputWrapper } from '@/components/ui/Input/styled';
import { defaultTheme as theme, media } from '@/theme';

export const SelectWrapper = styled.div<{ $opened: boolean }>`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	color: ${theme.colors.solid.base};

	& > button {
		position: absolute;
		height: 52px;
		width: 50px;
		right: 0;
		top: 0;
		z-index: 2;
		cursor: pointer;

		.icofont:before {
			display: block;
			font-size: 0.85rem;
			transition: all 0.2s;
			transform: rotate(90deg)
				scale(${(props) => (props.$opened ? -1 : 1)}, 1);
		}
	}

	ul {
		position: absolute;
		top: 52px;
		width: 100%;
		z-index: 3;
		list-style: none;
		margin: 0;
		padding: 0;
		min-height: 50px;
		max-height: 50vh;
		overflow: auto;
		background-color: ${theme.colors.gray.$1};
		box-shadow: ${theme.layout.shadow.basic};
		border-bottom-left-radius: ${theme.radius.borderRadius};
		border-bottom-right-radius: ${theme.radius.borderRadius};

		li {
			border-bottom: 1px solid ${theme.colors.gray.$3};

			button {
				padding: 16px;
				width: 100%;
				text-align: left;
				cursor: pointer;
				transition: all 0.1s;

				&:hover {
					background-color: ${theme.colors.solid.disabled}22;
				}
			}

			&:last-child {
				border-bottom: none;
			}
		}
	}

	${media.lessThan('lg')`
		& > button {
			height: 40px;
		}

		ul { 
			top: 40px; 

			li button {
				padding: 8px 16px;				
			}
		}

	`}

	${(props) =>
		props.$opened &&
		css`
			${InputWrapper} {
				& > div {
					border-bottom-left-radius: 0;
					border-bottom-right-radius: 0;
					border-bottom: none;
				}
			}
		`}
`;

export default SelectWrapper;
