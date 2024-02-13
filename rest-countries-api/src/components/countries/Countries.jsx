import { Wrapper } from '@/ui/Wrapper';
import Image from 'next/image';

export async function Countries() {
	const res = await fetch(`https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital`);
	const data = await res.json();

	return (
		<Wrapper>
			<ul>
				{data.map(({ flags: { png: src, alt }, name: { official: name }, population, region, capital }) => (
					<li key={name}>
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
