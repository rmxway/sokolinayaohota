import { FC } from 'react';

import { FormOrder } from '@/components/FormOrder';
import { Modal, ModalProps } from '@/components/Modal';
import { apiUrl } from '@/services/variable';

export const ModalFormOrder: FC<ModalProps> = ({ show, onClose }) => (
	<Modal show={show} onClose={onClose} header="Заказать зал">
		<FormOrder name="order-form" fetchUrl={apiUrl('send-user-request')} />
	</Modal>
);

export default ModalFormOrder;
