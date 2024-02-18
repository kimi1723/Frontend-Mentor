import Image from 'next/image';

import { Wrapper } from '@/ui/Wrapper';
import Link from 'next/link';
import { HeadingTwo } from '@/ui/h2';

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
					.map(({ flags: { png: src, alt }, name: { common: name }, population, region, capital }) => (
						<li
							key={name}
							className="w-72 bg-white dark:bg-dark-blue shadow-lg rounded-md ease-in-out duration-300 hover:shadow-2xl hover:scale-105 z-0">
							<Link href="/a" className="hover:focus:shadow-2xl hover:focus:scale-105">
								<Image src={src} alt={alt} height={160} width={288} className="rounded-t-md shadow-sm h-40" />
								{/* try to work on the focus as it doesnt work as intended(hoevr does), make the text copyable */}
								<div className="mt-0.5 px-7 pt-6 pb-12 rounded-b-md">
									<HeadingTwo text={name} className="font-bold text-xl mb-3 cursor-default select-text" />
									{/* <h2 className="font-bold text-xl mb-3 cursor-default">{name}</h2> */}

									<dl className="flex flex-col gap-y-1">
										<div>
											<dt className="font-semibold inline cursor-default">Population: </dt>
											<dd className="inline cursor-default">{population.toLocaleString()}</dd>
										</div>

										<div>
											<dt className="font-semibold inline cursor-default">Region: </dt>
											<dd className="inline cursor-default">{region}</dd>
										</div>

										<div>
											<dt className="font-semibold inline cursor-default">Capital: </dt>
											<dd className="inline cursor-default">{capital}</dd>
										</div>
									</dl>
								</div>
							</Link>
						</li>
					))}
			</ul>
		</Wrapper>
	);
}
