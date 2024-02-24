import './globals.css';
import { Nunito_Sans } from 'next/font/google';
import { cookies } from 'next/headers';

import { Header } from '@/components/header/Header';

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
			<body className="bg-vl-gray dark:bg-dark-vd-blue h-screen text-vd-blue dark:text-white ease-in-out duration-300">
				<Header theme={theme} />
				{children}
				<div id="back-modal"></div>
			</body>
		</html>
	);
}
