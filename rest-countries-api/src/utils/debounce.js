export const debounce = (func, delay) => {
	let timeoutId;

	return (...args) => {
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			clearTimeout(timeoutId);
			func(...args);
		}, delay);
	};
};
