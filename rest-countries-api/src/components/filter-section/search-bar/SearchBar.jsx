import { SearchInput } from '@/ui/inputs/SearchInput';

const inputLabelAndPlaceholder = 'Search for country';

export function SearchBar() {
	return (
		<form action="" className="w-full relative md:w-1/2">
			<SearchInput inputLabelAndPlaceholder={inputLabelAndPlaceholder} />
		</form>
	);
}
