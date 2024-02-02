import { Wrapper } from '@/ui/Wrapper';
import { FilterButton } from '@/components/filter-section/filter-button/FilterButton';
import { SearchBar } from '@/components/filter-section/search-bar/SearchBar';
import { Countries } from '@/components/countries/Countries';

export default async function FrontPage() {
	return (
		<main className="py-9 px-4 sm:px-8 md:px-12">
			<Wrapper className="flex flex-col gap-y-12 items-start md:flex-row">
				<SearchBar />
				<FilterButton />
			</Wrapper>
			<Wrapper>
				<Countries />
			</Wrapper>
		</main>
	);
}
