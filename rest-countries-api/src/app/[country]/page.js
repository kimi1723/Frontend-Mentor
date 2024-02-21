import { Wrapper } from '@/ui/Wrapper';
import { BackButton } from '@/ui/buttons/BackButton';
import { DescriptionList } from '@/ui/lists/DescriptionList';

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

	const [topLevelDomain] = tld;

	// console.log(nativeName); get lang by official lang
	console.log(nativeName);

	return (
		<main className="py-9 px-8">
			<BackButton />
			{/* <Image/> */}
			<h2 className="font-bold text-2xl">{country}</h2>
			<DescriptionList
				content={[
					{
						title: 'Native Name',
						desc: 'Belgie',
					},
				]}
			/>
		</main>
	);
}
