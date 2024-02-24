export function Borders({ borders }) {
	return (
		<div className="mt-10 md:mt-14 flex flex-col md:flex-row md:gap-x-5 md:items-center">
			<h3 className="mb-4 font-semibold text-lg duration-300 ease-in-out md:mb-0">Border countries:</h3>

			{borders ? (
				<ul className="flex flex-wrap gap-3">
					{borders.map(border => (
						<li
							key={border}
							className="inline py-2 px-6 text-sm md:text-md bg-white dark:bg-dark-blue shadow-lg flex-1 text-center duration-300 ease-in-out">
							{border}
						</li>
					))}
				</ul>
			) : (
				<p className="duration-300 ease-in-out text-sm md:text-lg">Country has no border countries</p>
			)}
		</div>
	);
}
