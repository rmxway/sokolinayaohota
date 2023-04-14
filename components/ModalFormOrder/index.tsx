import React from 'react';

import { FormOrder } from '@/components/FormOrder';
import { Modal } from '@/components/Modal';

type ModalFormOrderProps = {
	show: boolean;
	onClose: () => void;
};

export const ModalFormOrder: React.FC<ModalFormOrderProps> = ({
	show,
	onClose,
}) => (
	<Modal show={show} onClose={onClose} header="Заказать зал">
		<FormOrder />
	</Modal>
);

export default ModalFormOrder;
