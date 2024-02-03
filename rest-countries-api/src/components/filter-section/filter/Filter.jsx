'use client';

import { useState } from 'react';

import { FilterButton } from '@/ui/buttons/FilterButton';
import { FilterList } from './FilterList';

const ariaControlId = 'regions-list';

export function Filter() {
	const [isListShown, setIsListShown] = useState(false);

	const toggleListHandler = () => setIsListShown(prev => !prev);

	return (
		<form action="" className="relative">
			<FilterButton toggleList={toggleListHandler} ariaControlId={ariaControlId} isListShown={isListShown} />
			{isListShown && <FilterList ariaControlId={ariaControlId} toggleList={toggleListHandler} />}
		</form>
	);
}
