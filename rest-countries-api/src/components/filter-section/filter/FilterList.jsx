import { FilterListButton } from '@/ui/buttons/FilterListButton';
import { getFirstLastTypeClasses } from '@/utils/getFirstLastTypeClasses';

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
const lastIndex = regions.length - 1;

export function FilterList({ ariaLabelledby }) {
	return (
		<ul className="bg-vd-blue absolute w-full mt-1 shadow-md rounded-lg" aria-labelledby={ariaLabelledby}>
			{regions.map((region, index) => {
				return (
					<li
						key={region}
						className={getFirstLastTypeClasses({
							index,
							lastIndex,
							first: 'rounded-t-lg',
							last: 'rounded-b-lg',
						})}>
						<FilterListButton region={region} index={index} lastIndex={lastIndex} />
					</li>
				);
			})}
		</ul>
	);
}
