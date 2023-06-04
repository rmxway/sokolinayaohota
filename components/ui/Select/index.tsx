import { useField } from 'formik';
import { FC, useState } from 'react';

import { Icon } from '@/components/Icon';
import { InputProps, InputUI } from '@/components/ui';

import { SelectWrapper } from './styled';

interface SelectProps extends InputProps {
	values: string[];
}

export const SelectUI: FC<SelectProps> = ({
	values: selectValues,
	...props
}) => {
	const [isOpen, setOpen] = useState(false);
	const [field, meta, helpers] = useField(props);

	const handleOpen = (val: string) => {
		helpers.setValue(val);
		setOpen((prev) => !prev);
	};

	return (
		<SelectWrapper $opened={isOpen}>
			<InputUI
				{...props}
				error={meta.touched && meta.error ? meta.error : null}
				{...field}
			/>
			<button type="button" onClick={() => setOpen((prev) => !prev)}>
				<Icon icon="arrow-simple" />
			</button>

			{isOpen && (
				<ul>
					{selectValues.length &&
						selectValues.map((val) => (
							<li key={val}>
								<button
									type="button"
									onClick={() => handleOpen(val)}
								>
									{val}
								</button>
							</li>
						))}
				</ul>
			)}
		</SelectWrapper>
	);
};

export default SelectUI;
