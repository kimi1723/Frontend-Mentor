import { BackButton } from '@/ui/buttons/BackButton';

export default async function Country({ params: { country } }) {
	const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
	const [data] = await res.json();

	console.log(data);
	const {
		name: { nativeName },
		population,
		region,
		subregion,
		capital,
		tld,
		currencies,
		languages,
		borders,
	} = data;
	// console.log(nativeName); get lang by official lang
	console.log(nativeName);

	return (
		<>
			<BackButton />
		</>
	);
}
