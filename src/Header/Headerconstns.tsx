import { ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/20/solid';

export const products = [
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
export const callsToAction = [
	{ name: 'Mobile', href: '/Mobile', icon: PhoneIcon },
	{ name: 'Telegram', href: 'https://web.telegram.org/k/', icon: PhoneIcon },
];
