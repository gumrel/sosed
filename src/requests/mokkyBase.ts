import htttpService from '../Services/htttpService';

// https://9af78c5f5318e74a.mokky.dev/adress_coord

interface ICreateAddress {
	id: number;
	address: string;
	coordinates: [number, number];
	price: number;
	rooms: number;
	description: string;
	detailsUrl: string;
	imageUrl: string;
	metro: string;
}

export const postMokky = async (path: ICreateAddress) => {
	try {
		const result = await htttpService.post<any, ICreateAddress>(
			`https://${process.env.REACT_APP_MOKKY_KEY}.mokky.dev/adress_coord`,
			path,
		);
		const data = await result.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};
