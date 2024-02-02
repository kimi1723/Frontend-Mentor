import { FaMagnifyingGlass } from 'react-icons/fa6';

export function SearchBar() {
	const inputLabelAndPlaceholder = 'Search for country';

	return (
		<form action="" className="w-full relative">
			<span className="absolute flex items-center left-6 h-full">
				<FaMagnifyingGlass />
			</span>
			<input
				type="text"
				aria-label={inputLabelAndPlaceholder}
				name="search"
				placeholder={`${inputLabelAndPlaceholder}...`}
				className="w-full md:w-3/5 max-w-lg py-5 ps-16 shadow-lg rounded-md hover:shadow-d-gray dark:hover:shadow-vd-blue
				focus:shadow-d-gray dark:focus:shadow-vd-blue transition-shadow duration-200 ease-in-out outline-none dark:bg-dark-blue dark:text-white placeholder:text-vd-blue/50  dark:placeholder:text-white/50"
			/>
		</form>
	);
}
