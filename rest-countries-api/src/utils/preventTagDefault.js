export const preventTagDefault = (e, tags) => {
	const tagName = e.target.tagName.toLowerCase();

	if (tags.includes(tagName)) {
		e.preventDefault();
	}
};
