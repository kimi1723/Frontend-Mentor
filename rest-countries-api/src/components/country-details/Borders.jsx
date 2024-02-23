export function Borders({ borders }) {
	return (
		<div className="mt-10 flex flex-col md:flex-row md:gap-x-5">
			<h3 className="mb-4 font-semibold text-lg duration-300 ease-in-out md:mb-0">Border countries:</h3>

			{borders ? (
				<ul className="flex flex-wrap gap-3">
					{borders.map(border => (
						<li
							key={border}
							className="inline py-2 px-6 text-sm bg-white dark:bg-dark-blue shadow-lg flex-1 text-center duration-300 ease-in-out">
							{border}
						</li>
					))}
				</ul>
			) : (
				<p className="duration-300 ease-in-out">Country has no border countries</p>
			)}
		</div>
	);
}
