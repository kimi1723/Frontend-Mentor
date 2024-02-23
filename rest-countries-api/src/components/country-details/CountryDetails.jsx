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
			<section className="mt-16 flex flex-col items-center gap-y-12 xl:flex-row xl:justify-between xl:gap-x-20 2xl:gap-x-24">
				<div className="relative w-full min-h-52 aspect-[320/213] max-w-md md:max-w-xl xl:max-w-md 2xl:max-w-xl">
					<Image src={src} alt={alt} fill className="shadow-xl" quality={100} priority />
				</div>

				<div className="w-max xl:mt-10 xl:w-full">
					<h2 className="font-bold text-2xl mb-5 duration-300 ease-in-out">{name}</h2>
					<DetailsList data={data} />
					<Borders borders={borders} />
				</div>
			</section>
		</Wrapper>
	);
}
