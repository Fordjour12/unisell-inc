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

const routerService = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={<RootApp />}
		>
			<Route
				index
				element={<App />}
			/>
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={routerService} />
	</React.StrictMode>
)
