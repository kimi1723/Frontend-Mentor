import { FilterListButton } from '@/ui/buttons/FilterListButton';
import { getFirstLastTypeClasses } from '@/utils/getFirstLastTypeClasses';

const options = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
const lastIndex = options.length - 2;

export function FilterList({ ariaControlId, onClick, activeRegion = 'all' }) {
	const filteredOptions = options.filter(option => option.toLowerCase() !== activeRegion);

	return (
		<ul className="bg-vd-blue absolute top-full w-full mt-1 shadow-lg rounded-lg" id={ariaControlId}>
			{filteredOptions.map((region, index) => {
				const liClasses = getFirstLastTypeClasses({
					index,
					lastIndex,
					first: 'rounded-t-lg',
					last: 'rounded-b-lg',
				});

				return (
					<li key={region} className={liClasses}>
						<FilterListButton region={region} index={index} lastIndex={lastIndex} onClick={() => onClick(region)} />
					</li>
				);
			})}
		</ul>
	);
}
