import { AnimatePresence } from 'framer-motion';
import React, { createRef, memo, ReactNode, useEffect } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { Icon } from '@/components';

import {
	animationWindow,
	animationWrapper,
	CloseButton,
	ModalWindow,
	ModalWrapper,
} from './styled';

interface ModalProps {
	show: boolean;
	children: ReactNode;
	onClose?: () => void;
}

export const Modal = memo(({ show, onClose, children }: ModalProps) => {
	const wrapperRef = createRef<HTMLDivElement>();
	const closeRef = createRef<HTMLButtonElement>();

	useEffect(() => {
		if (show) {
			disablePageScroll();
		}

		return () => {
			enablePageScroll();
		};
	}, [show]);

	const closeFunction = (
		target: EventTarget,
		current: HTMLButtonElement | HTMLDivElement | null
	) => {
		if (target === current) {
			return onClose && onClose();
		}
		return null;
	};

	const clickCloseButton = (e: React.MouseEvent) => {
		closeFunction(e.target, closeRef.current);
	};

	const clickBackdrop = (e: React.MouseEvent) => {
		closeFunction(e.target, wrapperRef.current);
	};

	return (
		<AnimatePresence mode="sync">
			{show && (
				<ModalWrapper
					variants={animationWrapper}
					initial="start"
					animate="end"
					exit="start"
					onClick={clickBackdrop}
					ref={wrapperRef}
				>
					<ModalWindow variants={animationWindow} layout>
						<CloseButton ref={closeRef} onClick={clickCloseButton}>
							<Icon icon="close" size={12} />
						</CloseButton>

						{children}
					</ModalWindow>
				</ModalWrapper>
			)}
		</AnimatePresence>
	);
});

export default Modal;
