import { AnimatePresence } from 'framer-motion';
import React, { ReactNode, useEffect, useRef } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { Icon } from '@/components';
import { Title } from '@/components/Layout';

import {
	animationWindow,
	animationWrapper,
	CloseButton,
	ModalWindow,
	ModalWrapper,
} from './styled';

export interface ModalProps {
	header?: string;
	show: boolean;
	fullscreen?: boolean;
	onClose?: () => void;
	children?: ReactNode;
}

export const Modal = ({
	header,
	show,
	fullscreen,
	onClose,
	children,
}: ModalProps) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const closeRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (show && wrapperRef.current) {
			disablePageScroll(wrapperRef.current);
		}

		return () => {
			enablePageScroll();
		};
	}, [show]);

	const handleClose = (e: React.MouseEvent) => {
		const { target } = e;

		if (target === wrapperRef.current || target === closeRef.current) {
			return onClose && onClose();
		}
		return null;
	};

	return (
		<AnimatePresence mode="sync">
			{show ? (
				<ModalWrapper
					variants={animationWrapper}
					initial="start"
					animate="end"
					exit="start"
					onClick={handleClose}
					ref={wrapperRef}
				>
					<ModalWindow
						variants={animationWindow}
						$fullscreen={fullscreen}
					>
						{header && (
							<Title className="modal-header" size="40px">
								{header}
							</Title>
						)}
						<CloseButton ref={closeRef}>
							<Icon icon="close" size={10} />
						</CloseButton>

						{children}
					</ModalWindow>
				</ModalWrapper>
			) : null}
		</AnimatePresence>
	);
};

export default Modal;
