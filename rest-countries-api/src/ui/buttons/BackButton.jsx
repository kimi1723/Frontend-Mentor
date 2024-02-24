'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import { FaArrowLeftLong } from 'react-icons/fa6';

const buttonClasses =
	'text-lg font-semibold text-white py-2 px-8 bg-dark-vd-blue dark:text-dark-vd-blue dark:bg-white rounded-md shadow-lg outline-none duration-300 ease-in-out';

export function BackButton() {
	const router = useRouter();
	const [isModalActive, setIsModalActive] = useState(false);

	const goBack = () => (window.history.length === 1 ? setIsModalActive(true) : router.back());

	const btnClickHandler = answer => (answer ? router.push('/') : setIsModalActive(false));

	return (
		<>
			<button
				type="button"
				onClick={goBack}
				className="flex items-center gap-x-3 py-2 px-7 bg-white shadow-lg dark:bg-dark-blue duration-300 ease-in-out hover:scale-105 focus:scale-105 outline-none">
				<FaArrowLeftLong />
				Back
			</button>

			{isModalActive &&
				createPortal(
					<section className="absolute inset-0 flex justify-center items-center shadow-lg">
						<div className="absolute inset-0 z-0 bg-vd-blue opacity-50"></div>
						<div className="bg-dark-blue dark:bg-vl-gray mx-5 py-6 px-4 md:py-10 md:px-20 rounded-md flex flex-col gap-y-6 z-10">
							<p className="text-center font-semibold">
								<span className="text-2xl block text-error mb-3">You do not have any browse history.</span>
								<span className="block text-white dark:text-dark-vd-blue text-lg">
									Do you wish to go back to home page?
								</span>
							</p>

							<div className="flex justify-around">
								<button
									type="button"
									className={`${buttonClasses} hover:bg-success focus:bg-success	dark:focus:bg-success dark:hover:bg-success`}
									onClick={() => btnClickHandler(true)}>
									Yes
								</button>
								<button
									type="button"
									className={`${buttonClasses} hover:bg-error focus:bg-error dark:hover:bg-error dark:focus:bg-error`}
									onClick={() => btnClickHandler(false)}>
									No
								</button>
							</div>
						</div>
					</section>,
					document.querySelector('#back-modal'),
				)}
		</>
	);
}
