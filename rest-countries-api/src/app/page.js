import { Wrapper } from '@/ui/Wrapper';
import { Filter } from '@/components/filter-section/filter/Filter';
import { SearchBar } from '@/components/filter-section/search-bar/SearchBar';
import { Countries } from '@/components/countries/Countries';

export default async function FrontPage() {
	return (
		<main className="py-9 px-4 sm:px-8 md:px-12">
			<Wrapper className="flex flex-col gap-y-12 items-start md:flex-row md:justify-between md:items-center">
				<SearchBar />
				<Filter />
			</Wrapper>
			<Wrapper>
				<Countries />
			</Wrapper>
		</main>
	);
}
