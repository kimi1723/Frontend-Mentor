import { NextResponse } from 'next/server';

export function middleware(req) {
	const res = NextResponse.next();

	const theme = req.cookies.get('theme');

	if (!theme) {
		res.cookies.set('theme', 'light', {
			path: '/',
			maxAge: 60 * 60 * 60 * 24 * 365,
			sameSite: 'strict',
		});
	}

	return res;
}
