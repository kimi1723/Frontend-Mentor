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
			<ul className="flex items-center justify-center flex-wrap gap-14 lg:gap-20 my-7 py-5 w-full">
				{data
					.filter(country => country.name.common.toLowerCase().includes(searchQuery))
					.map(({ flags: { png: src, alt }, name: { common: name }, population, region, capital }) => (
						<li key={name} className="w-72 bg-white dark:bg-dark-blue shadow-lg rounded-md">
							<Image src={src} alt={alt} height={192} width={288} className="rounded-t-md shadow-sm h-40" />

							<div className="mt-0.5 px-7 pt-6 pb-12 rounded-b-md">
								<h2 className="font-bold text-xl mb-3">{name}</h2>

								<dl className="flex flex-col gap-y-1">
									<div>
										<dt className="font-semibold inline">Population: </dt>
										<dd className="inline">{population.toLocaleString()}</dd>
									</div>

									<div>
										<dt className="font-semibold inline">Region: </dt>
										<dd className="inline">{region}</dd>
									</div>

									<div>
										<dt className="font-semibold inline">Capital: </dt>
										<dd className="inline">{capital}</dd>
									</div>
								</dl>
							</div>
						</li>
					))}
			</ul>
		</Wrapper>
	);
}
