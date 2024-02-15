import { useSearchParams } from 'next/navigation';

export const useGetSearchParam = key => {
	const searchParams = useSearchParams();
	const searchQuery = searchParams.get(key);

	return searchQuery;
};
