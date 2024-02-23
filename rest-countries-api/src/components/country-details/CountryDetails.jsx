import Image from 'next/image';

import { Wrapper } from '@/ui/Wrapper';
import { BackButton } from '@/ui/buttons/BackButton';
import { DetailsList } from './DetailsList';
import { Borders } from './Borders';

export function CountryDetails({
	data: {
		name,
		flag: { src, alt },
		borders,
		...data
	},
}) {
	return (
		<Wrapper>
			<BackButton />
			<div className="mt-16 flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between">
				<Image src={src} alt={alt} width={320} height={208} className="h-52 shadow-xl" />

				<section className="w-full">
					<h2 className="font-bold text-2xl mb-5 duration-300 ease-in-out">{name}</h2>

					<DetailsList data={data} />
					<Borders borders={borders} />
				</section>
			</div>
		</Wrapper>
	);
}
