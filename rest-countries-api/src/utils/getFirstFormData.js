export const getFirstFormData = form => {
	const formData = new FormData(form);
	const [data] = Array.from(formData.values());

	return data;
};
