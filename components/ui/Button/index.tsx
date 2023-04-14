import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { memo, PropsWithChildren } from 'react';

import { Icon } from '@/components';

import { Button, ButtonProps, itemVar, textVar } from './styled';

/**
 * @prop {boolean} w100 - на всю ширину
 * @prop {boolean} inactive - запретить клик
 * @prop {boolean} mobile - уменьшенная версия
 * @prop {keyof typeof icon} icon - выбор иконки
 * @prop {boolean} primary, danger, success, brown

 * @example <ButtonUI mobile icon="phone">Телефон</ButtonUI>
 */
const ButtonUI = memo(
	({
		children,
		animate = false,
		icon,
		...props
	}: PropsWithChildren<ButtonProps & { animate?: boolean }>) => {
		const memoText = String(children).split('');
		const randIndex = Number(Math.random() * Number(new Date()));
		const itemIcon = icon ? <Icon icon={icon} /> : null;

		return (
			<Button {...props}>
				{animate ? (
					<AnimatePresence initial={false} mode="wait">
						<LayoutGroup key={randIndex}>
							<motion.div
								layout
								variants={textVar}
								initial="hidden"
								animate="visible"
								exit="hidden"
							>
								{memoText.map((item) => (
									<motion.span
										layout
										variants={itemVar}
										key={Number(Math.random())}
									>
										{item}
									</motion.span>
								))}
							</motion.div>
						</LayoutGroup>
					</AnimatePresence>
				) : (
					children
				)}
				{itemIcon}
			</Button>
		);
	}
);

ButtonUI.displayName = 'ButtonUI';

export { ButtonUI };
export default ButtonUI;
