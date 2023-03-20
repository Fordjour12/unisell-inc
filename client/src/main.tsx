import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom'
import RootApp from './components/pages/RootApp'
import App from './App'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Error from './components/pages/Error'

const routerService = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={<RootApp />}
			errorElement={<Error />}
		>
			<Route
				index
				element={<App />}
			/>
			<Route
				path='login'
				element={<Login />}
			/>
			<Route
				path='register'
				element={<Register />}
			/>
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={routerService} />
	</React.StrictMode>
)
