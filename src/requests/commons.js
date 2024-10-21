// const address = "Москва, Арбат улица, дом 1";
// export const GEO_HTTPS_KOORD = `https://geocode-maps.yandex.ru/1.x/?apikey=c552cd40-8535-42a2-973b-76e4d47c57da&geocode=${encodeURIComponent(
//   address
// )}&format=json`;

export const request = async () => {
	try {
		const result = await fetch(` `, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await result.json();

		return data;
	} catch (err) {
		console.log(err);
	}
};

export const findNearestMetro = async () => {
	const coordinates = '37.599292,55.751817';
	try {
		const result = await fetch(
			`https://geocode-maps.yandex.ru/v1/?apikey=${process.env.REACT_APP_GEO}&text=метро&ll=${coordinates}&type=biz&results=1`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		const data = await result.json();
		return data;
		// if (data.features && data.features.length > 0) {
		// 	const nearestMetro = data.features[0];
		// 	return nearestMetro;
		// } else {
		// 	return null;
		// }
	} catch (err) {
		console.log(err);
	}
};

export const calculateWalkingRoute = async () => {
	const coordinates1 = '37.599292,55.751817';
	const coordinates2 = '37.999292,55.751817';

	try {
		const result = await fetch(
			`https://api.routing.yandex.net/v2/route?apikey=${process.env.REACT_APP_GEO}&waypoints=${coordinates1}|${coordinates2}&mode=walking`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		const data = await result.json();

		if (data.routes && data.routes.length > 0) {
			const route = data.routes[0];
			return route;
		} else {
			return null;
		}
	} catch (err) {
		console.log(err);
	}
};
