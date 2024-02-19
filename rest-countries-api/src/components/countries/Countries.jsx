import { Wrapper } from '@/ui/Wrapper';

import { SingleCountry } from './SingleCountry';

export async function Countries({ searchParams }) {
	const filter = searchParams.filter?.toLowerCase();
	const searchQuery = searchParams.search?.toLowerCase() || '';

	const API_FILTER_URL = filter && filter !== 'all' ? `region/${filter}` : 'all';

	const res = await fetch(
		`https://restcountries.com/v3.1/${API_FILTER_URL}?fields=flags,name,population,region,capital`,
	);
	const data = await res.json();

	return (
		<Wrapper>
			<ul className="flex items-center justify-center flex-wrap gap-14 lg:gap-20 my-7 py-5 w-full">
				{data
					.filter(country => country.name.common.toLowerCase().includes(searchQuery))
					.map(country => (
						<SingleCountry key={country.name.common} country={country} />
					))}
			</ul>
		</Wrapper>
	);
}
