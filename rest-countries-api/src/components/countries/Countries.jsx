import Image from 'next/image';

import { Wrapper } from '@/ui/Wrapper';

export async function Countries({ searchParams }) {
	const filter = searchParams.filter?.toLowerCase();
	const searchQuery = searchParams.search?.toLowerCase();

	const API_FILTER_URL = filter && filter !== 'all' ? `region/${filter}` : 'all';

	const res = await fetch(
		`https://restcountries.com/v3.1/${API_FILTER_URL}?fields=flags,name,population,region,capital`,
	);
	const data = await res.json();

	return (
		<Wrapper>
			<ul className="w-1/2">
				{data
					.filter(country => country.name.official.toLowerCase().includes(searchQuery))
					.map(({ flags: { png: src, alt }, name: { official: name }, population, region, capital }) => (
						<li key={name} className="relative">
							{/* <Image src={src} alt={alt} fill /> */}
							<div>
								<h2>{name}</h2>

								<dt>Population:</dt>
								<dd>{population}</dd>

								<dt>Region:</dt>
								<dd>{region}</dd>

								<dt>Capital:</dt>
								<dd>{capital}</dd>
							</div>
						</li>
					))}
			</ul>
		</Wrapper>
	);
}
