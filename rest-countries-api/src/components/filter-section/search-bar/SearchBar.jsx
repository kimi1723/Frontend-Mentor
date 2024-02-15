'use client';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';

import { SearchInput } from '@/ui/inputs/SearchInput';
import { debounce } from '@/utils/debounce';
import { getFirstFormData } from '@/utils/getFirstFormData';

const inputLabelAndPlaceholder = 'Search for country';

export function SearchBar() {
	const updateSearchParams = useUpdateSearchParams();

	const search = query => updateSearchParams('search', query);

	const debouncedSearch = debounce(search, 400);

	const searchHandler = e => debouncedSearch(e.target.value);

	const submitHandler = e => {
		e.preventDefault();

		const query = getFirstFormData(e.target);
		search(query);
	};

	return (
		<form onSubmit={submitHandler} className="w-full relative md:w-1/2">
			<SearchInput inputLabelAndPlaceholder={inputLabelAndPlaceholder} onChange={searchHandler} />
		</form>
	);
}
