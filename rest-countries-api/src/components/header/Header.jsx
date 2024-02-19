import { changeTheme } from '@/actions/changeTheme';
import { FaRegMoon } from 'react-icons/fa6';
import { Wrapper } from '@/ui/Wrapper';

export function Header({ theme }) {
	const modeText = `${theme === 'light' ? 'Dark' : 'Light'} Mode`;

	return (
		<header className="bg-white dark:bg-dark-blue py-9 px-4 sm:px-8 md:px-12 shadow-lg ease-in-out duration-300">
			<Wrapper className="flex justify-between" isSection={false}>
				<h1 className="font-extrabold">Where in the world?</h1>
				<form action={changeTheme}>
					<button className="font-semibold flex items-center gap-x-2" type="submit">
						<FaRegMoon />
						{modeText}
					</button>
				</form>
			</Wrapper>
		</header>
	);
}
