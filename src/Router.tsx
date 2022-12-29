import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { RestaurantArea } from './pages/RestaurantArea'
import { ListRestaurants } from './pages/ListRestaurants'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/listrestaurants" element={<ListRestaurants />} />
			<Route path="/restaurantarea" element={<RestaurantArea />} />
		</Routes>
	)
}
