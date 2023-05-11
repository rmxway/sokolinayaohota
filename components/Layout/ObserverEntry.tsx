import { forwardRef, Ref, Suspense } from 'react';

type EntryType = {
	show: boolean;
	children: React.ReactElement;
};

export const ObserverEntry = forwardRef(
	({ show, children }: EntryType, ref: Ref<HTMLDivElement>) => {
		if (show)
			return (
				<div ref={ref}>
					<Suspense fallback={<span>Loading ...</span>}>
						{children}
					</Suspense>
				</div>
			);
		return null;
	}
);
export default ObserverEntry;
