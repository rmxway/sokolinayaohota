'use client';

import { useFormikContext } from 'formik';
import { usePathname, useRouter } from 'next/navigation';
import { Dispatch, FC, SetStateAction } from 'react';

type AutoResetFormProps = {
	setIsComplete: Dispatch<SetStateAction<boolean>>;
	isComplete: boolean;
};

export const AutoResetForm: FC<AutoResetFormProps> = ({
	setIsComplete,
	isComplete,
}) => {
	const path = usePathname();
	const router = useRouter();
	const { resetForm, validateForm } = useFormikContext();

	// useEffect(() => {
	// 	const handlePageChange = (lastPath: string) => {
	// 		if (lastPath === path || !isComplete) return;
	// 		setIsComplete(false);
	// 		resetForm();
	// 		validateForm();
	// 	};
	// 	router?.events.on('routeChangeStart', handlePageChange);

	// 	return () => {
	// 		router?.events.off('routeChangeStart', handlePageChange);
	// 	};
	// }, [isComplete, path, resetForm, router, setIsComplete, validateForm]);

	return null;
};

export default AutoResetForm;
