import { getFirstLastTypeClasses } from '@/utils/getFirstLastTypeClasses';

export function FilterListButton({ region, index, lastIndex }) {
	const buttonClasses = `ps-7 py-2 w-full text-left bg-white dark:bg-dark-blue hover:opacity-85 focus:opacity-85 outline-none transition-opacity duration-300 ease-in-out ${getFirstLastTypeClasses(
		{
			index,
			lastIndex,
			first: 'pt-5 rounded-t-lg',
			last: 'pb-5 rounded-b-lg',
		},
	)}`;

	return (
		<button type="submit" className={buttonClasses}>
			{region}
		</button>
	);
}
