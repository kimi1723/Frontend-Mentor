'use client';

import Link from 'next/link';
import Image from 'next/image';

import { DescriptionList } from '@/ui/lists/DescriptionList';
import { selectableTextClasses } from '@/constants/selectableText';
import { preventTagDefault } from '@/utils/preventTagDefault';

const descriptionListAdditionalClasses = {
	list: 'gap-y-1',
	title: selectableTextClasses,
	desc: selectableTextClasses,
};

const textTags = ['h2', 'dt', 'dd'];

export function SingleCountry({
	country: {
		flags: { png: src, alt },
		name: { common: name },
		population,
		region,
		capital,
	},
}) {
	const descriptionListElements = [
		['Population', population.toLocaleString('en-US')],
		['Region', region],
		['Capital', capital],
	];

	const textClickHandler = e => preventTagDefault(e, textTags);

	return (
		<li
			key={name}
			className="w-72 bg-white dark:bg-dark-blue shadow-lg rounded-md ease-in-out duration-300 hover:shadow-2xl hover:scale-105 z-0">
			<Link href={name}>
				<Image src={src} alt={alt} height={160} width={288} className="rounded-t-md shadow-sm h-40" />

				<div className="mt-0.5 px-7 pt-6 pb-12 rounded-b-md" onClick={textClickHandler}>
					<h2 className="font-bold inline-block text-xl mb-3 cursor-text select-text">{name}</h2>

					<DescriptionList elements={descriptionListElements} additionalClasses={descriptionListAdditionalClasses} />
				</div>
			</Link>
		</li>
	);
}
