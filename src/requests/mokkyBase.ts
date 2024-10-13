import htttpService from '../Services/htttpService';

// https://9af78c5f5318e74a.mokky.dev/adress_coord

interface ICreateAddress {
	id: number;
	address: string; // Адрес как строка
	coordinates: [number, number]; // Координаты в формате массива с двумя числами [долгота, широта]
	price: number; // Цена как число
	rooms: number; // Количество комнат как число
	description: string; // Описание квартиры как строка
	detailsUrl: string; // URL страницы с деталями
	imageUrl: string; // URL изображения
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
