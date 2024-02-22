'use client';

import { useRouter } from 'next/navigation';

import { FaArrowLeftLong } from 'react-icons/fa6';

export function BackButton() {
	const router = useRouter();

	const goBack = () => {
		if (!router.back()) {
			router.push('/');
		}
	};

	return (
		<button
			type="button"
			onClick={goBack}
			className="flex items-center gap-x-3 py-2 px-7 bg-white shadow-lg dark:bg-dark-blue">
			<FaArrowLeftLong />
			Back
		</button>
	);
}
