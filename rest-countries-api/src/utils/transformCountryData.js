const transformLanguages = languages => {
	const languagesKeys = Object.keys(languages);
	const languagesValues = Object.values(languages);

	const sortedLanguages = languagesValues.sort();
	const firstAphabeticalLanguageKey = languagesKeys.find(key => languages[key] === sortedLanguages[0]);
	const transformedLanguages = sortedLanguages.join(', ');

	return { transformedLanguages, firstAphabeticalLanguageKey };
};

const transformNativeName = (nativeName, firstAphabeticalLanguageKey) => nativeName[firstAphabeticalLanguageKey].common;

const transformPopulation = population => population.toLocaleString('en-US');

const transformCapital = capital => {
	const [transformedCapital] = capital;

	return transformedCapital;
};

const transformTld = tld => {
	const [transformedTld] = tld;

	return transformedTld;
};

const transformCurrencies = currencies => {
	const currenciesValues = Object.values(currencies);

	return currenciesValues.map(currency => currency.name);
};

const transformBorders = async (bordersCodes = []) => {
	if (bordersCodes.length < 1) return null;

	const bordersQuery = bordersCodes.join(',');
	const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${bordersQuery}&fields=name`);
	const data = await res.json();
	const borders = data.map(country => country.name.common).sort();

	return borders;
};

export const transformCountryData = async ({
	flags: { png, alt },
	name: { nativeName, common: name },
	population,
	region,
	subregion,
	capital,
	tld,
	currencies,
	languages,
	borders,
}) => {
	const { transformedLanguages, firstAphabeticalLanguageKey } = transformLanguages(languages);
	const transformedNativeName = transformNativeName(nativeName, firstAphabeticalLanguageKey);
	const transformedPopulation = transformPopulation(population);
	const transformedCapital = transformCapital(capital);
	const transformedTld = transformTld(tld);
	const transformedCurrencies = transformCurrencies(currencies);
	const transformedBorders = await transformBorders(borders);

	return {
		flag: { src: png, alt },
		name,
		nativeName: transformedNativeName,
		population: transformedPopulation,
		region,
		subregion,
		capital: transformedCapital,
		tld: transformedTld,
		languages: transformedLanguages,
		currencies: transformedCurrencies,
		borders: transformedBorders,
	};
};
