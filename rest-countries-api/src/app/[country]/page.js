import { Wrapper } from '@/ui/Wrapper';
import { BackButton } from '@/ui/buttons/BackButton';
import { DescriptionList } from '@/ui/lists/DescriptionList';
import { transformCountryData } from '@/utils/transformCountryData';
import Image from 'next/image';

export default async function Country({ params: { country } }) {
	const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
	const [data] = await res.json();

	const transformedData = await transformCountryData(data);
	const {
		flag: { src, alt },
		name,
		nativeName,
		population,
		region,
		subregion,
		capital,
		tld,
		currencies,
		languages,
		borders,
	} = transformedData;

	const descriptionListElements = [
		['Native Name', nativeName],
		['Population', population],
		['Region', region],
		['Sub Region', subregion],
		['Capital', capital],
		['Top Level Domain', tld],
		['Currencies', currencies],
		['Languages', languages],
	];

	return (
		<main className="py-9 px-8 sm:px-12 md:px-16">
			<Wrapper>
				<BackButton />
				<div className="mt-16 flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between">
					<Image src={src} alt={alt} width={320} height={208} className="h-52 shadow-xl" />

					<section className="w-full">
						<h2 className="font-bold text-2xl mb-5 duration-300 ease-in-out">{name}</h2>
						<DescriptionList
							elements={descriptionListElements}
							additionalClasses={{
								dl: '[&>*:nth-child(5)]:mb-10 md:[&>*:nth-child(5)]:mb-0 md:h-40 md:flex-wrap gap-y-2 md:content-between',
							}}
						/>

						<h3 className="mt-10 mb-4 font-semibold text-lg duration-300 ease-in-out">Border countries:</h3>
						<ul className="flex flex-wrap gap-3">
							{borders.map(border => (
								<li
									key={border}
									className="inline py-2 px-6 text-sm bg-white dark:bg-dark-blue shadow-lg flex-1 text-center duration-300 ease-in-out">
									{border}
								</li>
							))}
						</ul>
					</section>
				</div>
			</Wrapper>
		</main>
	);
}
