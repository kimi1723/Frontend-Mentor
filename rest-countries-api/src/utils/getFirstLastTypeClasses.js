export const getFirstLastTypeClasses = ({ index, lastIndex, first, last }) => {
	if (index === 0) {
		return first;
	} else if (index === lastIndex) {
		return last;
	}
};
