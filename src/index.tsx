import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
		<Provider store={store}>
			<BrowserRouter>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</BrowserRouter>
		</Provider>
	</PrimeReactProvider>,
);

reportWebVitals();
