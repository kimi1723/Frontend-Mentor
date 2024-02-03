import { Wrapper } from '@/ui/Wrapper';
import { SearchBar } from '@/components/filter-section/search-bar/SearchBar';
import { Filter } from '@/components/filter-section/filter/Filter';

export function FilterSection() {
	return (
		<Wrapper className="flex flex-col gap-y-12 items-start md:flex-row md:justify-between md:items-center">
			<SearchBar />
			<Filter />
		</Wrapper>
	);
}
