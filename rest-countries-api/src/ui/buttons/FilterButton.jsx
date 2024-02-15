import { useGetSearchParam } from '@/hooks/useGetSearchParam';

import { FaChevronUp } from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa6';

export function FilterButton({ onClick, ariaControlId, isListShown }) {
	const activeRegion = useGetSearchParam('filter');

	return (
		<button
			type="button"
			className="ps-7 pe-24 py-5 relative bg-white dark:bg-dark-blue rounded-lg shadow-lg outline-none
			focus:shadow-d-gray dark:focus:shadow-vd-blue hover:shadow-d-gray dark:hover:shadow-vd-blue transition-shadow duration-300 ease-in-out"
			aria-controls={ariaControlId}
			aria-expanded={isListShown}
			onClick={onClick}>
			{activeRegion !== 'all' || activeRegion !== undefined ? activeRegion : 'Filter by Region'}
			{/* to do all */}
			<span className="absolute top-0 right-6 flex items-center h-full">
				{isListShown ? <FaChevronDown /> : <FaChevronUp />}
			</span>
		</button>
	);
}
