import './App.css';

import React from 'react';
import AppRouter from './AppRouter';
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
