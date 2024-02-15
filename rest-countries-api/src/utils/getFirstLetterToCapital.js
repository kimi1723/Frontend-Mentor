export const getFirstLetterToCapital = (initialString = '') => {
	const transformedString = initialString.slice(0, 1).toUpperCase() + initialString.slice(1);

	return transformedString;
};
