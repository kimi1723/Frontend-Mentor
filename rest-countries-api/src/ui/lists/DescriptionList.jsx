export function DescriptionList({ elements, additionalClasses }) {
	const [additionalTitleClasses, additionalDescClasses] = additionalClasses;

	const titleClasses = `font-semibold inline ${additionalTitleClasses}`;
	const descClasses = `inline ${additionalDescClasses}`;

	return (
		<dl className="flex flex-col gap-y-1">
			{elements.map(el => {
				const [title, desc] = el;

				return (
					<div key={title}>
						<dt className={titleClasses}>{title}: </dt>
						<dd className={descClasses}>{desc}</dd>
					</div>
				);
			})}
		</dl>
	);
}
