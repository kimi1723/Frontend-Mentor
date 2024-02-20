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
		<button onClick={goBack}>
			<FaArrowLeftLong />
			Back
		</button>
	);
}
