import Link from 'next/link';

export function Borders({ borders }) {
	return (
		<div className="mt-10 md:mt-14 flex flex-col md:flex-row md:gap-x-2 md:items-center">
			<h3 className="mb-4 font-semibold text-lg duration-300 ease-in-out md:mb-0 text-nowrap">Border countries:</h3>

			{borders ? (
				<ul className="flex flex-wrap gap-3">
					{borders.map(border => (
						<li key={border} className="flex-1">
							<Link
								href={`/${border}`}
								className="text-sm md:text-md shadow-lg block hover:text-white focus:text-white focus:bg-dark-blue dark:focus:text-vd-blue dark:focus:bg-white hover:bg-dark-blue dark:hover:text-vd-blue dark:hover:bg-white bg-white dark:bg-dark-blue py-2 px-6 text-center duration-300 ease-in-out outline-none">
								{border}
							</Link>
						</li>
					))}
				</ul>
			) : (
				<p className="duration-300 ease-in-out text-sm md:text-lg">Country has no direct border countries</p>
			)}
		</div>
	);
}
