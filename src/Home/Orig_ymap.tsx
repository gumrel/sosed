import { useEffect, useRef, useState } from 'react';
import { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } from '../lib/ymaps';
import type { YMapLocationRequest } from 'ymaps3';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { getGeoItems } from '../Reducers/geoReducer.js';
import { postMokky } from '../requests/mokkyBase';

import { Button } from 'primereact/button';

const LOCATION: YMapLocationRequest = {
	center: [37.588144, 55.733842],
	zoom: 12,
};

export default function Orig() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');
	const handleThemeToggle = () => {
		setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
	};

	const dispatch = useDispatch();
	const isLoaded = useRef(false);

	const { items = {}, isLoading = false } = useSelector(({ geo }) => geo);

	useEffect(() => {
		if (!isLoaded.current) {
			// dispatch(getGeoItems());
			isLoaded.current = true;
		}
	}, [dispatch]);

	const marker = items?.response?.GeoObjectCollection?.featureMember[0].GeoObject.Point.pos;

	const coordinates = marker ? marker.split(' ').map(Number) : [27.588144, 55.733842];

	if (isLoading) {
		return <Loader />;
	}

	const sbor = {
		id: 10,
		address: '123 Main St, City',
		coordinates: [37.588144, 55.733842] as [number, number],
		price: 50000,
		rooms: 3,
		description: 'A cozy 3-room apartment near the park.',
		detailsUrl: '/apartment/1',
		imageUrl: '/images/apartment1.jpg',
		metro: 'Арбатская',
	};
	return (
		<div style={{ width: '100%', height: '50vh' }}>
			<YMap
				location={LOCATION}
				mode={'auto'}
				theme={theme}
			>
				<YMapDefaultSchemeLayer />
				<YMapDefaultFeaturesLayer />

				<YMapMarker
					coordinates={coordinates}
					draggable={false}
					zIndex={100}
					onClick={() => console.log('2')}
				>
					<section>
						<div
							className="w-5"
							style={{
								backgroundImage: "url('https://www.picng.com/upload/circle/png_circle_84143.png')",
								backgroundSize: 'contain',
								backgroundPosition: 'center',
								width: '15px',
								height: '15px',
								display: 'inline-block',
							}}
						></div>
					</section>
				</YMapMarker>
			</YMap>

			<p
				className=" w-30 text-center text-white z-10 cursor-pointer mt-10"
				onClick={handleThemeToggle}
			>
				Поменять тему!
			</p>
			<Button onClick={() => postMokky(sbor)}>Отправь меня!</Button>
		</div>
	);
}
