import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { RestaurantArea } from './pages/RestaurantArea'
import { SearchRestaurant } from './pages/SearchRestaurant'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/searchrestaurant" element={<SearchRestaurant />} />
			<Route path="/restaurantarea" element={<RestaurantArea />} />
		</Routes>
	)
}
