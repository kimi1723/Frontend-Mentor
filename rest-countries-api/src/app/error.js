'use client';

import { Wrapper } from '@/ui/Wrapper';
import { BackButton } from '@/ui/buttons/BackButton';

export default function Error() {
	return (
		<Wrapper className="flex flex-col gap-y-5 justify-center items-center min-h-svh">
			<h2 className="text-3xl font-bold">Something went wrong!</h2>
			<BackButton />
		</Wrapper>
	);
}
