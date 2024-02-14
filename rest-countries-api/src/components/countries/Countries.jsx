import { Wrapper } from '@/ui/Wrapper';
import Image from 'next/image';

const defaultQuery = 'all?fields=flags,name,population,region,capital';

const getQuery = searchParams => {
	const [firstEntry] = Object.entries(searchParams);

	if (!firstEntry) {
		return defaultQuery;
	}

	const [key, value] = firstEntry;

	return `region/${value}`;
};

export async function Countries({ searchParams }) {
	const [firstEntry] = Object.entries(searchParams);

	const API__URL = firstEntry ? `region/${firstEntry[1]}` : defaultQuery;
	const API_URL = getQuery(searchParams);
	// define which way is better, get data validating with zod, first maybe check if its even a viable
	// solution and if not should just opt into client component, as the problems may arise
	// while trying to search by both region and searchbar

	const res = await fetch(`https://restcountries.com/v3.1/${API_URL}`);
	const data = await res.json();

	return (
		<Wrapper>
			<ul>
				{data.map(({ flags: { png: src, alt }, name: { official: name }, population, region, capital }) => (
					<li key={name} className="relative">
						<Image src={src} alt={alt} fill />
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
