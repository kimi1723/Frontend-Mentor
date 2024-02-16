'use client';

import { useEffect, useState } from 'react';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';
import { useGetSearchParamValue } from '@/hooks/useGetSearchParamValue';

import { FilterButton } from '@/ui/buttons/FilterButton';
import { FilterList } from './FilterList';

const ariaControlId = 'regions-list';

export function Filter() {
	const [isListShown, setIsListShown] = useState(false);

	const updateSearchParams = useUpdateSearchParams();
	const activeRegion = useGetSearchParamValue('filter')?.toLowerCase();

	const toggleListHandler = () => setIsListShown(prev => !prev);

	const filterRegionsHandler = region => updateSearchParams('filter', region);

	useEffect(() => {
		if (isListShown === true) {
			document.addEventListener('click', toggleListHandler);
		}

		return () => document.removeEventListener('click', toggleListHandler);
	}, [isListShown]);

	return (
		<div className="relative">
			<FilterButton
				onClick={toggleListHandler}
				ariaControlId={ariaControlId}
				isListShown={isListShown}
				activeRegion={activeRegion}
			/>
			{isListShown && (
				<FilterList ariaControlId={ariaControlId} onClick={filterRegionsHandler} activeRegion={activeRegion} />
			)}
		</div>
	);
}
