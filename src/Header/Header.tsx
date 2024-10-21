import { useRef, useState } from 'react'; //todo забыли пароль
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { products, callsToAction } from './Headerconstns';

import { Dialog as PrimeDialog } from 'primereact/dialog';
import { InputText as PrimeText } from 'primereact/inputtext';
import { Button as PrimeButton } from 'primereact/button';
import { Toast } from 'primereact/toast';

import { signUp, signIn } from '../Services/configFireBase/firebaseLogic.js';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Services/configFireBase/firebaseConfig.js';

export default function Example() {
	// onAuthStateChanged(auth, user => {
	// 	if (user) {
	// 		console.log(user);
	// 	} else {
	// 		console.log('No user is signed in');
	// 	}
	// });

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [visible, setVisible] = useState<boolean>(false);
	const [openReg, setReg] = useState<boolean>(false);
	const [fakepass, setfakepass] = useState<boolean>(false);

	const [mail, setMail] = useState<string>('');
	const [pass, setPass] = useState<string>('');
	const [pasrep, setPasrep] = useState<string>('');

	const [maillog, setMaillog] = useState<string>('');
	const [passlog, setPasslog] = useState<string>('');

	const toast = useRef<Toast>(null);

	const registration = async () => {
		if (pass !== pasrep) {
			setfakepass(true);
			toast.current?.show({
				severity: 'error',
				detail: 'Пароли не совпадают',
				life: 3000,
			});
			return;
		}
		const data = await signUp(mail, pass);

		if (data.error) {
			toast.current?.show({
				severity: 'error',
				detail: data.error,
				life: 3000,
			});
		} else {
			setMail('');
			setPass('');
			setReg(false);
			setfakepass(false);
			setPasrep('');
			toast.current?.show({
				severity: 'success',
				detail: 'Вы успешно зарегистрировались!',
				life: 3000,
			});
		}
	};

	const login = async () => {
		const data = await signIn(maillog, passlog);

		if (data.error) {
			toast.current?.show({
				severity: 'error',
				detail: data.error,
				life: 3000,
			});
		} else {
			setMaillog('');
			setPasslog('');
			setVisible(false);
			toast.current?.show({
				severity: 'success',
				detail: 'Вы успешно вошли!',
				life: 3000,
			});
		}
	};

	return (
		<header className="bg-white">
			<Toast ref={toast} />

			<PrimeDialog
				header="Войти в аккаунт"
				visible={visible}
				style={{ width: '30rem' }}
				onHide={() => {
					if (!visible) return;
					setVisible(false);
				}}
			>
				<div className="card">
					<div className="flex flex-col align-items-center justify-content-center gap-3 py-5">
						<div className="flex flex-col">
							<label className="w-6rem">Имя пользователя</label>
							<PrimeText
								id="username"
								type="text"
								className="w-12rem"
								value={maillog}
								onChange={event => setMaillog(event.target.value)}
							/>
						</div>
						<div className="flex flex-col">
							<label className="w-6rem">Пароль</label>
							<PrimeText
								id="password"
								type="password"
								className="w-12rem"
								value={passlog}
								onChange={event => setPasslog(event.target.value)}
							/>
						</div>
						<div className="flex justify-between">
							<PrimeButton
								label="Регистрация"
								link
								onClick={() => {
									setVisible(false);
									setReg(true);
								}}
							/>

							<PrimeButton onClick={() => login()}>Войти</PrimeButton>
						</div>
					</div>
				</div>
			</PrimeDialog>

			<PrimeDialog
				header="Зарегистрироваться"
				visible={openReg}
				style={{ width: '30rem' }}
				onHide={() => {
					if (!openReg) return;
					setReg(false);
				}}
			>
				<div className="card">
					<div className="flex flex-col align-items-center justify-content-center gap-3 py-5">
						<div className="flex flex-col">
							<label className="w-6rem">Имя пользователя</label>
							<PrimeText
								id="username"
								type="text"
								className="w-12rem"
								value={mail}
								onChange={event => setMail(event.target.value)}
							/>
						</div>
						<div className="flex flex-col">
							<label className="w-6rem">Пароль</label>
							<PrimeText
								id="password"
								type="password"
								className="w-12rem"
								value={pass}
								onChange={event => setPass(event.target.value)}
							/>
						</div>
						<div className="flex flex-col">
							<label className="w-6rem">Подтвердите пароль</label>
							<PrimeText
								id="passwordrep"
								type="password"
								className="w-12rem"
								value={pasrep}
								onChange={event => setPasrep(event.target.value)}
								invalid={fakepass}
							/>
						</div>
						<div className="flex justify-between">
							<PrimeButton
								label="Логин"
								link
								onClick={() => {
									setReg(false);
									setVisible(true);
								}}
							/>

							<PrimeButton onClick={() => registration()}>Регистрация</PrimeButton>
						</div>
					</div>
				</div>
			</PrimeDialog>

			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			>
				<div className="flex lg:flex-1">
					<a
						href="/"
						className="-m-1.5 p-1.5"
					>
						<span className="sr-only">Your Company</span>
						<img
							alt=""
							src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
							className="h-8 w-auto"
						/>
					</a>
				</div>

				<div className="lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon
							aria-hidden="true"
							className="h-6 w-6"
						/>
					</button>
				</div>

				<PopoverGroup className="md:hidden lg:flex lg:gap-x-12">
					<Popover className="relative">
						<PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
							Product
							<ChevronDownIcon
								aria-hidden="true"
								className="h-5 w-5 flex-none text-gray-400"
							/>
						</PopoverButton>

						<PopoverPanel
							transition
							className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
						>
							<div className="p-4">
								{products.map(item => (
									<div
										key={item.name}
										className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
									>
										<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
											<item.icon
												aria-hidden="true"
												className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
											/>
										</div>
										<div className="flex-auto">
											<a
												href={item.href}
												className="block font-semibold text-gray-900"
											>
												{item.name}
												<span className="absolute inset-0" />
											</a>
											<p className="mt-1 text-gray-600">{item.description}</p>
										</div>
									</div>
								))}
							</div>
							<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
								{callsToAction.map(item => (
									<a
										key={item.name}
										href={item.href}
										className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
									>
										<item.icon
											aria-hidden="true"
											className="h-5 w-5 flex-none text-gray-400"
										/>
										{item.name}
									</a>
								))}
							</div>
						</PopoverPanel>
					</Popover>
					<a
						href="/Features"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Features
					</a>
					<a
						href="/Marketplace"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Marketplace
					</a>
					<a
						href="/createForm"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Разместить объявление
					</a>
				</PopoverGroup>

				<div className="md:hidden  lg:flex lg:flex-1 lg:justify-end">
					<p
						onClick={() => setVisible(true)}
						className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
					>
						Войти
					</p>
				</div>
			</nav>

			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon
								aria-hidden="true"
								className="h-6 w-6"
							/>
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Disclosure
									as="div"
									className="-mx-3"
								>
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										Product
										<ChevronDownIcon
											aria-hidden="true"
											className="h-5 w-5 flex-none group-data-[open]:rotate-180"
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										{[...products, ...callsToAction].map(item => (
											<DisclosureButton
												key={item.name}
												as="a"
												href={item.href}
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>
												{item.name}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Features
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Marketplace
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Разместить объявление
								</a>
							</div>
							<div className="py-6">
								<Link
									to="/login"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Войти
								</Link>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
