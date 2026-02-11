import { AnimatePresence } from 'framer-motion';
import React, { FC, ReactNode, useRef } from 'react';

import { Icon } from '@/components';
import { Title } from '@/components/Layout';
import { useScrollLock } from '@/hooks';

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
	gallery?: boolean;
	onClose?: () => void;
	children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({
	header,
	show,
	fullscreen,
	gallery,
	onClose,
	children,
}) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const closeRef = useRef<HTMLButtonElement>(null);

	useScrollLock(show);

	const handleClose = (e: React.MouseEvent) => {
		const { target } = e;

		if (target === wrapperRef.current || target === closeRef.current) {
			return onClose && onClose();
		}
		return null;
	};

	return (
		<AnimatePresence>
			{show && (
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
						$gallery={gallery}
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
			)}
		</AnimatePresence>
	);
};

export default Modal;
