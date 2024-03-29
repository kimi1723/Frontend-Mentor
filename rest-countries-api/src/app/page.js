import { Suspense } from 'react';

import { FilterSection } from '@/components/filter-section/FilterSection';
import { Countries } from '@/components/countries/Countries';
import Loading from './loading';

export default async function FrontPage({ searchParams }) {
	return (
		<main className="py-9 px-4 sm:px-8 md:px-12">
			<FilterSection />
			<Suspense fallback={<Loading />}>
				<Countries searchParams={searchParams} />
			</Suspense>
		</main>
	);
}
