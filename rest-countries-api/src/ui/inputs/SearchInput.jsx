import { FaMagnifyingGlass } from 'react-icons/fa6';

export function SearchInput({ inputLabelAndPlaceholder = 'Search' }) {
	return (
		<>
			<span className="absolute flex items-center top-0 left-8 h-full">
				<FaMagnifyingGlass />
			</span>
			<input
				type="text"
				aria-label={inputLabelAndPlaceholder}
				name="search"
				placeholder={`${inputLabelAndPlaceholder}...`}
				className="w-full md:max-w-xl py-5 ps-20 shadow-lg rounded-md hover:shadow-d-gray dark:hover:shadow-vd-blue
	focus:shadow-d-gray dark:focus:shadow-vd-blue transition-shadow duration-200 ease-in-out outline-none dark:bg-dark-blue dark:text-white placeholder:text-vd-blue/50  dark:placeholder:text-white/50"
			/>
		</>
	);
}
