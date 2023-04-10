import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { memo, PropsWithChildren } from 'react';

import { Button, ButtonProps, itemVar, textVar } from './styled';

const ButtonUI = memo(
	({
		children,
		animate = false,
		icon,
		...props
	}: PropsWithChildren<ButtonProps & { animate?: boolean }>) => {
		const memoText = String(children).split('');
		const randIndex = Number(Math.random() * Number(new Date()));
		const itemIcon = icon ? (
			<i className={`icofont icofont-${icon}`} />
		) : null;

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
