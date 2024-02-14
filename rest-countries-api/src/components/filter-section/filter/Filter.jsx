'use client';

import { useEffect, useState } from 'react';

import { FilterButton } from '@/ui/buttons/FilterButton';
import { FilterList } from './FilterList';

const ariaControlId = 'regions-list';

export function Filter() {
	const [isListShown, setIsListShown] = useState(false);

	const toggleListHandler = () => setIsListShown(prev => !prev);

	useEffect(() => {
		if (isListShown === true) {
			document.addEventListener('click', toggleListHandler);
		}

		return () => document.removeEventListener('click', toggleListHandler);
	}, [isListShown]);

	return (
		<form action="" className="relative">
			<FilterButton onClick={toggleListHandler} ariaControlId={ariaControlId} isListShown={isListShown} />
			{isListShown && <FilterList ariaControlId={ariaControlId} />}
		</form>
	);
}
