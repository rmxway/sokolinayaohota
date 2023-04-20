import { FC } from 'react';

import { FormOrder } from '@/components/FormOrder';
import { Modal, ModalProps } from '@/components/Modal';

export const ModalFormOrder: FC<ModalProps> = ({ show, onClose }) => (
	<Modal show={show} onClose={onClose} header="Заказать зал">
		<FormOrder />
	</Modal>
);

export default ModalFormOrder;
