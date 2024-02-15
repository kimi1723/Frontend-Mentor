import { useRouter, useSearchParams } from 'next/navigation';

export const useUpdateSearchParams = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	return (key, value) => {
		const newSearchParams = new URLSearchParams(searchParams);
		newSearchParams.set(key, value);

		const queryString = newSearchParams.toString();
		router.push(`?${queryString}`);
	};
};
