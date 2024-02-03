import { FaChevronUp } from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa6';

const inputLabelAndText = 'Filter by Region';

export function FilterButton({ toggleList, ariaControls, isListShown }) {
	return (
		<button
			type="button"
			className="ps-7 pe-24 py-5 relative bg-white dark:bg-dark-blue rounded-lg shadow-lg"
			aria-label={inputLabelAndText}
			aria-controls={ariaControls}
			onClick={toggleList}>
			{inputLabelAndText}
			<span className="absolute top-0 right-6 flex items-center h-full">
				{isListShown ? <FaChevronDown /> : <FaChevronUp />}
			</span>
		</button>
	);
}
