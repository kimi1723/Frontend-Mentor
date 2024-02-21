const transformNativeName = (nativeName, firstAphabeticalLanguageKey) => nativeName[firstAphabeticalLanguageKey].common;

const transformLanguages = languages => {
	const languagesKeys = Object.keys(languages);
	const languagesValues = Object.values(languages);

	const sortedLanguages = languagesValues.sort();
	const firstAphabeticalLanguageKey = languagesKeys.find(key => languages[key] === sortedLanguages[0]);

	return { transformedLanguages: sortedLanguages, firstAphabeticalLanguageKey };
};

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

export const transformCountryData = ({
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

	return {
		name,
		nativeName: transformedNativeName,
		population: transformedPopulation,
		region,
		subregion,
		capital: transformedCapital,
		tld: transformedTld,
		languages: transformedLanguages,
		currencies: transformedCurrencies,
	};
};
