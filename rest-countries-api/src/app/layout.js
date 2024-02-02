import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import { cookies } from 'next/headers';

const nunito_sans = Nunito_Sans({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '600', '800'],
});

export const metadata = {
	title: 'Rest Countries Api',
	description: 'Rest Countries Api challange provided by Frontend Mentor. Coded by Patryk Sąsiadek.',
};

export default function RootLayout({ children }) {
	const { value: theme } = cookies().get('theme') || 'light';

	return (
		<html lang="en" className={`${nunito_sans.className} ${theme}`}>
			<body className="bg-vl-gray dark:bg-vd-blue h-screen text-vd-blue dark:text-white">{children}</body>
		</html>
	);
}
