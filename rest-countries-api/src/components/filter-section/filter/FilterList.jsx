import { useRouter, useSearchParams } from 'next/navigation';

import { FilterListButton } from '@/ui/buttons/FilterListButton';
import { getFirstLastTypeClasses } from '@/utils/getFirstLastTypeClasses';

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
const lastIndex = regions.length - 1;

export function FilterList({ ariaControlId }) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const filterRegionsHandler = region => {
		const newSearchParams = new URLSearchParams(searchParams);
		newSearchParams.set('filter', region);

		const queryString = newSearchParams.toString();
		router.push(`?${queryString}`);
	};

	return (
		<ul className="bg-vd-blue absolute top-full w-full mt-1 shadow-lg rounded-lg" id={ariaControlId}>
			{regions.map((region, index) => {
				const liClasses = getFirstLastTypeClasses({
					index,
					lastIndex,
					first: 'rounded-t-lg',
					last: 'rounded-b-lg',
				});

				return (
					<li key={region} className={liClasses}>
						<FilterListButton
							region={region}
							index={index}
							lastIndex={lastIndex}
							onClick={() => filterRegionsHandler(region)}
						/>
					</li>
				);
			})}
		</ul>
	);
}
