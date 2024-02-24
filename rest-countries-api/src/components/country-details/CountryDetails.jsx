import Image from 'next/image';

import { transformCountryData } from '@/utils/transformCountryData';
import { Wrapper } from '@/ui/Wrapper';
import { BackButton } from '@/ui/buttons/BackButton';
import { DetailsList } from './DetailsList';
import { Borders } from './Borders';

export async function CountryDetails({ country }) {
	const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
	const [data] = await res.json();

	const {
		name,
		flag: { src, alt = '' },
		borders,
		...countriesData
	} = await transformCountryData(data);

	return (
		<Wrapper>
			<BackButton />
			<section className="mt-16 flex flex-col items-center gap-y-12 xl:flex-row xl:justify-between xl:gap-x-20 2xl:gap-x-32">
				<div className="relative w-full min-h-52 aspect-[320/213] max-w-md md:max-w-xl">
					<Image
						src={src}
						alt={alt}
						fill
						className="shadow-xl"
						quality={100}
						priority
						sizes="(max-width: 768px) 448px, 576px"
					/>
				</div>

				<div className="xl:mt-10 xl:w-full">
					<h2 className="font-bold text-2xl md:text-3xl mb-5 xl:mb-8 duration-300 ease-in-out">{name}</h2>
					<DetailsList data={countriesData} />
					<Borders borders={borders} />
				</div>
			</section>
		</Wrapper>
	);
}
