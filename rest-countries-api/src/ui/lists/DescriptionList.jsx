export function DescriptionList({ elements, additionalClasses = {} }) {
	const { list = '', wrapper = '', title = '', desc = '' } = additionalClasses;

	const dlClasses = `flex flex-col duration-300 ease-in-out ${list}`;
	const wrapperClasses = wrapper;
	const titleClasses = `font-semibold inline ${title}`;
	const descClasses = `inline ${desc}`;

	return (
		<dl className={dlClasses}>
			{elements.map(el => {
				const [title, desc] = el;

				return (
					<div key={title} className={wrapperClasses}>
						<dt className={titleClasses}>{title}: </dt>
						<dd className={descClasses}>{desc}</dd>
					</div>
				);
			})}
		</dl>
	);
}
