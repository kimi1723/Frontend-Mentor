import { Suspense } from 'react';

import { CountryDetails } from '@/components/country-details/CountryDetails';
import Loading from './loading';

export default async function Country({ params: { country } }) {
	return (
		<main className="py-9 px-8 sm:px-12 md:px-16">
			<Suspense fallback={<Loading />}>
				<CountryDetails country={country} />
			</Suspense>
		</main>
	);
}
