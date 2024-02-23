import { DescriptionList } from '@/ui/lists/DescriptionList';

export function DetailsList({
	data: { nativeName, population, region, subregion, capital, tld, currencies, languages },
}) {
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
		<>
			<DescriptionList
				elements={descriptionListElements}
				additionalClasses={{
					dl: '[&>*:nth-child(5)]:mb-10 md:[&>*:nth-child(5)]:mb-0 md:h-40 md:flex-wrap gap-y-2 md:gap-x-5 xl:gap-x-10 2xl:gap-x-20',
				}}
			/>
		</>
	);
}
