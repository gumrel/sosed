import { useRef, useState } from 'react';
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
import { Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

import { ConfirmDialog } from 'primereact/confirmdialog';
import { Dialog as PrimeDialog } from 'primereact/dialog';
import { Divider as PrimeDivider } from 'primereact/divider';
import { InputText as PrimeText } from 'primereact/inputtext';
import { Button as PrimeButton } from 'primereact/button';
import { Toast } from 'primereact/toast';

const products = [
	{
		name: 'Rent',
		description: 'Get a better understanding of your traffic',
		href: '/Rent',
		icon: ChartPieIcon,
	},
	{
		name: 'Flats',
		description: 'Speak directly to your customers',
		href: '/Flats',
		icon: CursorArrowRaysIcon,
	},
	{
		name: 'Sales',
		description: 'Your customers’ data will be safe and secure',
		href: '/Sales',
		icon: FingerPrintIcon,
	},
];
const callsToAction = [
	{ name: 'Mobile', href: '/Mobile', icon: PhoneIcon },
	{ name: 'Telegram', href: 'https://web.telegram.org/k/', icon: PhoneIcon },
];

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [visible, setVisible] = useState<boolean>(false);
	const toast = useRef(null);

	return (
		<header className="bg-white">
			<Toast ref={toast} />
			<PrimeDialog
				header="Войти или зарегистрироваться"
				visible={visible}
				style={{ width: '50vw' }}
				onHide={() => {
					if (!visible) return;
					setVisible(false);
				}}
			>
				<div className="card">
					<div className="flex flex-column md:flex-row">
						<div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
							<div className="flex flex-wrap justify-content-center align-items-center gap-2">
								<label className="w-6rem">Username</label>
								<PrimeText
									id="username"
									type="text"
									className="w-12rem"
								/>
							</div>
							<div className="flex flex-wrap justify-content-center align-items-center gap-2">
								<label className="w-6rem">Password</label>
								<PrimeText
									id="password"
									type="password"
									className="w-12rem"
								/>
							</div>
							<PrimeButton
								label="Login"
								icon="pi pi-user"
								className=" mx-auto"
							></PrimeButton>
						</div>
						{/* <div className="w-full md:w-2">
							<PrimeDivider
								layout="vertical"
								className="hidden md:flex"
							>
								<b>OR</b>
							</PrimeDivider>
							<PrimeDivider
								layout="horizontal"
								className="flex md:hidden"
								align="center"
							>
								<b>OR</b>
							</PrimeDivider>
						</div> */}
						{/* <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
							<PrimeButton
								label="Sign Up"
								icon="pi pi-user-plus"
								severity="success"
								className="w-10rem"
							></PrimeButton>
						</div> */}
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
						href="/Company"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Company
					</a>
				</PopoverGroup>

				<div className="md:hidden  lg:flex lg:flex-1 lg:justify-end">
					<p
						onClick={() => setVisible(true)}
						className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
					>
						Log in
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
									Company
								</a>
							</div>
							<div className="py-6">
								<Link
									to="/login"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Log in
								</Link>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
