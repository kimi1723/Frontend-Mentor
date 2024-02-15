import { useSearchParams } from 'next/navigation';

export const useGetSearchParamValue = key => {
	const searchParams = useSearchParams();
	const searchQuery = searchParams.get(key);

	return searchQuery;
};
