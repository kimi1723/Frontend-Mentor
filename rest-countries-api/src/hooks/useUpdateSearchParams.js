import { useRouter, useSearchParams } from 'next/navigation';

export const useUpdateSearchParams = (key, value) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	return () => {
		const newSearchParams = new URLSearchParams(searchParams);
		newSearchParams.set(key, value);

		const queryString = newSearchParams.toString();
		router.push(`?${queryString}`);
	};
};
