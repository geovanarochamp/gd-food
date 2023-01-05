import { Routes, Route } from 'react-router-dom'

import { RestaurantArea } from '../pages/RestaurantArea'
import { ListRestaurants } from '../pages/ListRestaurants'
import { MyAccount } from '../pages/MyAccount'

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<ListRestaurants />} />
			<Route path="/restaurantmenu/:id" element={<RestaurantArea />} />
			<Route path="/account" element={<MyAccount />} />
		</Routes>
	)
}
