export function DescriptionList({ content }) {
	return (
		<dl>
			{content.map(({ title, desc }) => (
				<div key={title}>
					<dt className="font-semibold inline">{title}</dt>
					<dd>{desc}</dd>
				</div>
			))}
		</dl>
	);
}
