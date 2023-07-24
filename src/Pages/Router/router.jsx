import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';

import About from '../About/About';
import Contact from '../Contact/Contact';
import CompanyDetails from '../Home/BdItCompany/CompanyDetails/CompanyDetails';
import Home from '../Home/Home/Home';
import CompanyData from '../Home/World/CompanyData/CompanyData';
import Login from '../Log/Login';
import Register from '../Register/register';
import PrivateRoute from './Private/PrivateRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'company/:id',
				element: (
					<PrivateRoute>
						<CompanyDetails />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://job-portals-sever.vercel.app/bdIt/${params.id}`),
			},
			{
				path: 'details/:id',
				element: (
					<PrivateRoute>
						<CompanyData />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://job-portals-sever.vercel.app/world/${params.id}`),
			},
		],
	},
]);

export default router;
