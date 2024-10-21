import { Route, Routes } from '../../node_modules/react-router-dom/dist/index';
import Home from '../Home/Home';
import Login from '../Login/Login';
import CreateForm from '../CreateForm/createForm';

const AppRouter = () => {
	return (
		<Routes>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/createForm"
				element={<CreateForm />}
			/>
		</Routes>
	);
};

export default AppRouter;
