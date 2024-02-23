export function Borders({ borders }) {
	return (
		<>
			<h3 className="mt-10 mb-4 font-semibold text-lg duration-300 ease-in-out">Border countries:</h3>
			<ul className="flex flex-wrap gap-3">
				{borders ? (
					borders.map(border => (
						<li
							key={border}
							className="inline py-2 px-6 text-sm bg-white dark:bg-dark-blue shadow-lg flex-1 text-center duration-300 ease-in-out">
							{border}
						</li>
					))
				) : (
					<p className="duration-300 ease-in-out">Country has no border countries</p>
				)}
			</ul>
		</>
	);
}
