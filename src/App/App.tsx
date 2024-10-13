import './App.css';
import React from 'react';
import AppRouter from './AppRouter';
// import { YMaps } from "@pbe/react-yandex-maps";
import Header from '../Header/Header';

function App() {
	return (
		<div>
			<Header />
			<div className="App-info">
				<AppRouter />
			</div>
		</div>
	);
}

export default App;
