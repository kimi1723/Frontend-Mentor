'use server';

import { cookies } from 'next/headers';

export async function changeTheme() {
	const { value: theme = 'light' } = cookies().get('theme') || {};

	cookies().set('theme', theme === 'light' ? 'dark' : 'light');
}
