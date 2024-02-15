'use client';

import { useEffect, useState } from 'react';

import { FilterButton } from '@/ui/buttons/FilterButton';
import { FilterList } from './FilterList';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';

const ariaControlId = 'regions-list';

export function Filter() {
	const [isListShown, setIsListShown] = useState(false);

	const updateSearchParams = useUpdateSearchParams();

	const toggleListHandler = () => setIsListShown(prev => !prev);

	const filterRegionsHandler = region => updateSearchParams('filter', region);

	useEffect(() => {
		if (isListShown === true) {
			document.addEventListener('click', toggleListHandler);
		}

		return () => document.removeEventListener('click', toggleListHandler);
	}, [isListShown]);

	return (
		<form action="" className="relative">
			<FilterButton onClick={toggleListHandler} ariaControlId={ariaControlId} isListShown={isListShown} />
			{isListShown && <FilterList ariaControlId={ariaControlId} onClick={filterRegionsHandler} />}
		</form>
	);
}
