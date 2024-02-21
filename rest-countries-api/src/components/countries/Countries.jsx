import { Wrapper } from '@/ui/Wrapper';

import { SingleCountry } from './SingleCountry';
import { REST_API_URL } from '@/constants/urls';

export async function Countries({ searchParams }) {
	const filter = searchParams.filter?.toLowerCase();
	const searchQuery = searchParams.search?.toLowerCase() || '';

	const API_FILTER_URL = filter && filter !== 'all' ? `region/${filter}` : 'all';

	const res = await fetch(`${REST_API_URL}${API_FILTER_URL}?fields=flags,name,population,region,capital`);
	const data = await res.json();

	return (
		<Wrapper isSection>
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
