import { DescriptionList } from '@/ui/lists/DescriptionList';

const fontSize = 'md:text-lg';

const listClasses = {
	list: 'md:w-1/2 gap-y-2',
	title: fontSize,
	desc: fontSize,
};

export function DetailsList({
	data: { nativeName, population, region, subregion, capital, tld, currencies, languages },
}) {
	const firstList = [
		['Native Name', nativeName],
		['Population', population],
		['Region', region],
		['Sub Region', subregion],
		['Capital', capital],
	];

	const secondList = [
		['Top Level Domain', tld],
		['Currencies', currencies],
		['Languages', languages],
	];

	return (
		<div className="flex flex-col gap-y-12 md:flex-row md:gap-x-12 xl:gap-x-20">
			<DescriptionList elements={firstList} additionalClasses={listClasses} />
			<DescriptionList elements={secondList} additionalClasses={listClasses} />
		</div>
	);
}
