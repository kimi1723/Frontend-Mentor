'use client';

export function HeadingTwo({ text, className: classes }) {
	const handleTextClick = e => {
		// Check if it's a text selection, not just a click

		if (e.target.length !== 0) {
			e.preventDefault();
			console.log('true');
		}
	};

	return (
		<h2 className={classes} onClick={handleTextClick}>
			{text}
		</h2>
	);
}
