export const createObserver = (
	target: Element,
	callback: (entry: IntersectionObserverEntry) => void,
) => {
	const sectionCallback: IntersectionObserverCallback = (entries) => {
		entries.forEach((entry) => {
			callback(entry);
		});
	};

	const observer: IntersectionObserver = new IntersectionObserver(
		sectionCallback,
		{
			root: null,
		},
	);

	observer.observe(target);
};

export default createObserver;
