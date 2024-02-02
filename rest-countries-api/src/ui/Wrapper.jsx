export function Wrapper({ children, isSection = true, className: additionalClasses = '' }) {
	const classes = `max-w-screen-2xl mx-auto ${additionalClasses}`;

	return isSection ?
	<section className={classes}>{children}</section> :
	<div className={classes}>{children}</div>;
}
