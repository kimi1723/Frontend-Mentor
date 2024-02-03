'use client';

import { useState } from 'react';

import { FilterButton } from '@/ui/buttons/FilterButton';
import { FilterList } from './FilterList';

const ariaControl = 'regions list';

export function Filter() {
	const [isListShown, setIsListShown] = useState(false);

	const toggleListHandler = () => setIsListShown(prev => !prev);

	return (
		<form action="" className="relative">
			<FilterButton toggleList={toggleListHandler} ariaControls={ariaControl} isListShown={isListShown} />
			{isListShown && <FilterList ariaLabelledby={ariaControl} />}
		</form>
	);
}
