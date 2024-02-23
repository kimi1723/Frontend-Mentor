import { CountryDetails } from '@/components/country-details/CountryDetails';
import { transformCountryData } from '@/utils/transformCountryData';

export default async function Country({ params: { country } }) {
	const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
	const [data] = await res.json();

	const transformedData = await transformCountryData(data);

	return (
		<main className="py-9 px-8 sm:px-12 md:px-16">
			<CountryDetails data={transformedData} />
		</main>
	);
}
