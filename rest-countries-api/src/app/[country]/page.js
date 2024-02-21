import { Wrapper } from '@/ui/Wrapper';
import { BackButton } from '@/ui/buttons/BackButton';
import { DescriptionList } from '@/ui/lists/DescriptionList';
import { transformCountryData } from '@/utils/transformCountryData';

export default async function Country({ params: { country } }) {
	const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
	const [data] = await res.json();

	const transformedData = transformCountryData(data);

	const { nativeName, population, region, subregion, capital, tld, currencies, languages, borders } = transformedData;

	const descriptionListElements = [
		['Native Name', nativeName],
		['Population', population],
	];

	return (
		<main className="py-9 px-8">
			<Wrapper>
				<BackButton />
				{/* <Image/> */}
				<h2 className="font-bold text-2xl">{country}</h2>
				<DescriptionList elements={descriptionListElements} additionalClasses={[]} />
			</Wrapper>
		</main>
	);
}
