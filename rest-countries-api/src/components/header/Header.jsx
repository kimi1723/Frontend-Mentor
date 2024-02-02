import { changeTheme } from '@/actions/changeTheme';
import { FaRegMoon } from 'react-icons/fa6';

export function Header() {
	return (
		<header className="flex justify-between py-9 px-4">
			<h1 className="font-extrabold">Where in the world?</h1>
			<form action={changeTheme}>
				<button className="font-semibold flex items-center gap-x-2" type="submit">
					<FaRegMoon />
					Dark Mode
				</button>
			</form>
		</header>
	);
}
